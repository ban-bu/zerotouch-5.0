import { useState, useCallback } from 'react'
import { processWithLLM } from '../services/llmService'

export const useMessageFlow = (currentScenario) => {
  const [messages, setMessages] = useState({
    problem: [],
    llm: [],
    solution: []
  })
  const [llmProcessing, setLlmProcessing] = useState(false)
  const [iterationProcessing, setIterationProcessing] = useState(false) // 新增：迭代处理状态
  const [iterationMode, setIterationMode] = useState(false) // 新增：迭代模式状态
  const [pendingResponse, setPendingResponse] = useState(null) // 新增：待发送的响应
  
  // 新增：需求分析相关状态
  const [missingInfoOptions, setMissingInfoOptions] = useState([])
  const [showMissingInfoPanel, setShowMissingInfoPanel] = useState(false)
  const [currentNeedsAnalysis, setCurrentNeedsAnalysis] = useState(null)

  const addMessage = useCallback((panel, message) => {
    setMessages(prev => ({
      ...prev,
      [panel]: [...prev[panel], message]
    }))
  }, [])

  const clearMessages = useCallback(() => {
    setMessages({
      problem: [],
      llm: [],
      solution: []
    })
    setIterationMode(false)
    setPendingResponse(null)
  }, [])

  const sendProblemMessage = useCallback(async (messageData) => {
    // 添加用户消息到问题端
    const userMessage = {
      type: 'user',
      text: messageData.text,
      image: messageData.image,
      timestamp: messageData.timestamp
    }
    addMessage('problem', userMessage)

    // 开始LLM处理
    setLlmProcessing(true)

    try {
      // 构建完整的聊天历史 - 包含所有真实的对话内容
      const chatHistory = [
        // 问题端的所有消息：用户输入 + AI优化后的回复
        ...messages.problem
          .filter(msg => msg.type === 'user' || msg.type === 'ai_response')
          .map(msg => ({ ...msg, panel: 'problem' })),
        // 方案端的所有消息：AI转译的请求 + 企业用户输入 + AI回复
        ...messages.solution
          .filter(msg => msg.type === 'llm_request' || msg.type === 'user' || msg.type === 'ai_response')
          .map(msg => ({ ...msg, panel: 'solution' })),
        userMessage // 包含当前消息（用户）
      ].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))

      // 使用新的智能需求分析
      const llmResult = await processWithLLM({
        type: 'analyze_needs_with_missing_info',
        content: messageData.text,
        image: messageData.image,
        context: 'problem_to_solution',
        scenario: currentScenario,
        chatHistory: chatHistory
      })

      // 保存当前需求分析结果
      setCurrentNeedsAnalysis({
        originalContent: messageData.text,
        image: messageData.image,
        chatHistory: chatHistory
      })

      // 设置缺失信息选项
      setMissingInfoOptions(llmResult.missingInfoOptions || [])
      
      // 添加LLM处理过程到中介面板
      const llmMessage = {
        type: 'processing',
        title: '智能需求分析',
        steps: [
          {
            name: '需求理解',
            content: llmResult.needsUnderstanding
          },
          {
            name: '需求转译',
            content: llmResult.translation
          },
          {
            name: '缺失信息分析',
            content: llmResult.missingInfoOptions && llmResult.missingInfoOptions.length > 0 
              ? `识别到 ${llmResult.missingInfoOptions.length} 个可了解的信息点，等待企业方选择`
              : '需求信息较为完整，无需额外了解信息'
          }
        ],
        output: llmResult.translation,
        timestamp: new Date().toISOString()
      }
      addMessage('llm', llmMessage)

      // 添加翻译后的消息到方案端
      const translatedMessage = {
        type: 'llm_request',
        text: llmResult.translation,
        timestamp: new Date().toISOString(),
        needsAnalysis: llmResult.needsUnderstanding,
        missingInfoOptions: llmResult.missingInfoOptions || []
      }
      addMessage('solution', translatedMessage)

      // 如果有缺失信息选项，显示勾选面板
      if (llmResult.missingInfoOptions && llmResult.missingInfoOptions.length > 0) {
        setShowMissingInfoPanel(true)
      }

    } catch (error) {
      console.error('LLM处理错误:', error)
      // 添加错误消息
      const errorMessage = {
        type: 'processing',
        title: '处理出错',
        steps: [{
          name: '错误信息',
          content: '抱歉，处理过程中出现了错误，请稍后重试。'
        }],
        timestamp: new Date().toISOString()
      }
      addMessage('llm', errorMessage)
    } finally {
      setLlmProcessing(false)
    }
  }, [addMessage, currentScenario, messages.problem, messages.solution])

  const sendSolutionMessage = useCallback(async (messageData) => {
    // 添加用户消息到方案端
    const userMessage = {
      type: 'user',
      text: messageData.text,
      timestamp: messageData.timestamp
    }
    addMessage('solution', userMessage)

    // 隐藏信息选择面板（如果正在显示）
    if (showMissingInfoPanel) {
      setShowMissingInfoPanel(false)
      setMissingInfoOptions([])
      setCurrentNeedsAnalysis(null)
    }

    // 检查是否是协商后的追问或客户回复，如果是则直接发送，不需要AI转译
    const inputText = messageData.text.trim()
    
    // 检查协商后的追问
    const negotiatedFollowUp = messages.solution.find(msg => 
      (msg.type === 'followup' || msg.type === 'intelligent_followup') && 
      msg.negotiated && 
      msg.text.trim() === inputText
    )

    // 检查部门联络指令中的客户回复
    const customerReplyMatch = messages.solution.find(msg => 
      msg.type === 'department_contact' && 
      msg.customerReply && 
      msg.customerReply.trim() === inputText
    )

    if (negotiatedFollowUp) {
      console.log('🎯 检测到协商后的追问，直接发送给用户端，跳过AI转译处理')
      
      // 直接发送到问题端，不经过AI转译
      const directMessage = {
        type: 'ai_response',
        text: inputText,
        timestamp: new Date().toISOString(),
        isNegotiated: true // 标记为协商后的消息
      }
      addMessage('problem', directMessage)

      // 添加处理过程到中介面板（显示跳过转译）
      const skipMessage = {
        type: 'processing',
        title: '协商后追问直达用户端',
        steps: [{
          name: '处理说明',
          content: '协商完成的追问直接发送给用户端，无需AI二次转译'
        }],
        output: inputText,
        timestamp: new Date().toISOString()
      }
      addMessage('llm', skipMessage)
      
      return // 直接返回，不进行后续的AI处理
    }

    if (customerReplyMatch) {
      console.log('🎯 检测到客户回复内容，直接发送给用户端，跳过AI转译处理')
      
      // 直接发送到问题端，不经过AI转译
      const directMessage = {
        type: 'ai_response',
        text: inputText,
        timestamp: new Date().toISOString(),
        isCustomerReply: true // 标记为客户回复消息
      }
      addMessage('problem', directMessage)

      // 添加处理过程到中介面板（显示跳过转译）
      const skipMessage = {
        type: 'processing',
        title: '客户回复直达用户端',
        steps: [{
          name: '处理说明',
          content: '生成的客户回复直接发送给用户端，无需AI二次转译'
        }],
        output: inputText,
        timestamp: new Date().toISOString()
      }
      addMessage('llm', skipMessage)
      
      return // 直接返回，不进行后续的AI处理
    }

    // 开始LLM处理（非协商后的追问）
    setLlmProcessing(true)

    try {
      // 构建完整的聊天历史 - 包含所有真实的对话内容
      const chatHistory = [
        // 问题端的所有消息：用户输入 + AI优化后的回复
        ...messages.problem
          .filter(msg => msg.type === 'user' || msg.type === 'ai_response')
          .map(msg => ({ ...msg, panel: 'problem' })),
        // 方案端的所有消息：AI转译的请求 + 企业用户输入 + AI回复
        ...messages.solution
          .filter(msg => msg.type === 'llm_request' || msg.type === 'user' || msg.type === 'ai_response')
          .map(msg => ({ ...msg, panel: 'solution' })),
        userMessage // 包含当前消息（企业方输入）
      ].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))

      // 处理方案端响应
      const llmResult = await processWithLLM({
        type: 'solution_response',
        content: messageData.text,
        context: 'solution_to_problem',
        scenario: currentScenario,
        chatHistory: chatHistory
      })

      // 添加LLM处理过程到中介面板
      const llmMessage = {
        type: 'processing',
        title: '处理方案端响应',
        steps: llmResult.steps,
        output: llmResult.optimizedMessage,
        timestamp: new Date().toISOString()
      }
      addMessage('llm', llmMessage)

      // 添加优化后的响应到问题端
      const optimizedMessage = {
        type: 'ai_response',
        text: llmResult.optimizedMessage,
        timestamp: new Date().toISOString()
      }
      addMessage('problem', optimizedMessage)

    } catch (error) {
      console.error('LLM处理错误:', error)
      // 添加错误消息
      const errorMessage = {
        type: 'processing',
        title: '处理出错',
        steps: [{
          name: '错误信息',
          content: '抱歉，处理过程中出现了错误，请稍后重试。'
        }],
        timestamp: new Date().toISOString()
      }
      addMessage('llm', errorMessage)
    } finally {
      setLlmProcessing(false)
    }
  }, [addMessage, currentScenario, messages.problem, messages.solution, showMissingInfoPanel])

  // 新增：生成企业端建议
  const generateSuggestion = useCallback(async () => {
    if (iterationProcessing) return

    setIterationProcessing(true)

    try {
      // 获取最新的对话内容
      const recentMessages = [
        ...messages.problem.filter(m => m.type === 'user' || m.type === 'ai_response').slice(-2),
        ...messages.solution.filter(m => m.type === 'user' || m.type === 'ai_response').slice(-2)
      ].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))

      const currentContent = recentMessages.map(msg => msg.text).join('\n')

      // 构建完整的聊天历史 - 包含所有真实的对话内容
      const chatHistory = [
        // 问题端的所有消息：用户输入 + AI优化后的回复
        ...messages.problem
          .filter(msg => msg.type === 'user' || msg.type === 'ai_response')
          .map(msg => ({ ...msg, panel: 'problem' })),
        // 方案端的所有消息：AI转译的请求 + 企业用户输入 + AI回复
        ...messages.solution
          .filter(msg => msg.type === 'llm_request' || msg.type === 'user' || msg.type === 'ai_response')
          .map(msg => ({ ...msg, panel: 'solution' }))
      ].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))

      // 生成建议
      const llmResult = await processWithLLM({
        type: 'generate_suggestion',
        content: currentContent,
        scenario: currentScenario,
        chatHistory: chatHistory
      })

      // 添加LLM处理过程到中介面板
      const llmMessage = {
        type: 'processing',
        title: '生成企业端建议',
        steps: llmResult.steps,
        output: llmResult.suggestionMessage,
        timestamp: new Date().toISOString()
      }
      addMessage('llm', llmMessage)

      // 将建议添加到方案端（作为迭代内容）
      const suggestionMessage = {
        type: 'suggestion',
        text: llmResult.suggestionMessage,
        timestamp: new Date().toISOString(),
        id: `suggestion_${Date.now()}`,
        feedbackGiven: false
      }
      addMessage('solution', suggestionMessage)

      // 进入迭代模式
      setIterationMode(true)
      setPendingResponse(llmResult.suggestionMessage)

    } catch (error) {
      console.error('生成建议错误:', error)
      const errorMessage = {
        type: 'processing',
        title: '生成建议出错',
        steps: [{
          name: '错误信息',
          content: '抱歉，生成建议时出现了错误，请稍后重试。'
        }],
        timestamp: new Date().toISOString()
      }
      addMessage('llm', errorMessage)
    } finally {
      setIterationProcessing(false)
    }
  }, [addMessage, currentScenario, messages.problem, messages.solution, iterationProcessing])

  // 新增：生成企业端追问
  const generateFollowUp = useCallback(async () => {
    if (iterationProcessing) return

    setIterationProcessing(true)

    try {
      // 获取最新的对话内容
      const recentMessages = [
        ...messages.problem.filter(m => m.type === 'user' || m.type === 'ai_response').slice(-2),
        ...messages.solution.filter(m => m.type === 'user' || m.type === 'ai_response').slice(-2)
      ].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))

      const currentContent = recentMessages.map(msg => msg.text).join('\n')

      // 构建完整的聊天历史 - 包含所有真实的对话内容
      const chatHistory = [
        // 问题端的所有消息：用户输入 + AI优化后的回复
        ...messages.problem
          .filter(msg => msg.type === 'user' || msg.type === 'ai_response')
          .map(msg => ({ ...msg, panel: 'problem' })),
        // 方案端的所有消息：AI转译的请求 + 企业用户输入 + AI回复
        ...messages.solution
          .filter(msg => msg.type === 'llm_request' || msg.type === 'user' || msg.type === 'ai_response')
          .map(msg => ({ ...msg, panel: 'solution' }))
      ].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))

      // 生成追问
      const llmResult = await processWithLLM({
        type: 'generate_followup',
        content: currentContent,
        scenario: currentScenario,
        chatHistory: chatHistory
      })

      // 添加LLM处理过程到中介面板
      const llmMessage = {
        type: 'processing',
        title: '生成企业端追问',
        steps: llmResult.steps,
        output: llmResult.followUpMessage,
        timestamp: new Date().toISOString()
      }
      addMessage('llm', llmMessage)

      // 将追问添加到方案端（作为迭代内容）
      const followUpMessage = {
        type: 'followup',
        text: llmResult.followUpMessage,
        timestamp: new Date().toISOString(),
        id: `followup_${Date.now()}`,
        feedbackGiven: false
      }
      addMessage('solution', followUpMessage)

      // 进入迭代模式
      setIterationMode(true)
      setPendingResponse(llmResult.followUpMessage)

    } catch (error) {
      console.error('生成追问错误:', error)
      const errorMessage = {
        type: 'processing',
        title: '生成追问出错',
        steps: [{
          name: '错误信息',
          content: '抱歉，生成追问时出现了错误，请稍后重试。'
        }],
        timestamp: new Date().toISOString()
      }
      addMessage('llm', errorMessage)
    } finally {
      setIterationProcessing(false)
    }
  }, [addMessage, currentScenario, messages.problem, messages.solution, iterationProcessing])

  // 新增：确认发送最终响应
  const confirmSendResponse = useCallback(async (finalResponse) => {
    if (llmProcessing) return

    // 首先添加用户的最终响应消息到方案端
    const userFinalMessage = {
      type: 'user',
      text: finalResponse,
      timestamp: new Date().toISOString()
    }
    addMessage('solution', userFinalMessage)

    setLlmProcessing(true)

    try {
      // 构建完整的聊天历史 - 包含所有真实的对话内容
      const chatHistory = [
        // 问题端的所有消息：用户输入 + AI优化后的回复
        ...messages.problem
          .filter(msg => msg.type === 'user' || msg.type === 'ai_response')
          .map(msg => ({ ...msg, panel: 'problem' })),
        // 方案端的所有消息：AI转译的请求 + 企业用户输入 + AI回复
        ...messages.solution
          .filter(msg => msg.type === 'llm_request' || msg.type === 'user' || msg.type === 'ai_response')
          .map(msg => ({ ...msg, panel: 'solution' })),
        userFinalMessage // 包含用户的最终响应
      ].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))

      // 处理最终响应
      const llmResult = await processWithLLM({
        type: 'solution_response',
        content: finalResponse,
        context: 'solution_to_problem',
        scenario: currentScenario,
        chatHistory: chatHistory
      })

      // 添加LLM处理过程到中介面板
      const llmMessage = {
        type: 'processing',
        title: '处理最终响应',
        steps: llmResult.steps,
        output: llmResult.optimizedMessage,
        timestamp: new Date().toISOString()
      }
      addMessage('llm', llmMessage)

      // 添加优化后的响应到问题端
      const optimizedMessage = {
        type: 'ai_response',
        text: llmResult.optimizedMessage,
        timestamp: new Date().toISOString()
      }
      addMessage('problem', optimizedMessage)

      // 退出迭代模式
      setIterationMode(false)
      setPendingResponse(null)

    } catch (error) {
      console.error('确认发送错误:', error)
      const errorMessage = {
        type: 'processing',
        title: '处理最终响应出错',
        steps: [{
          name: '错误信息',
          content: '抱歉，处理最终响应时出现了错误，请稍后重试。'
        }],
        timestamp: new Date().toISOString()
      }
      addMessage('llm', errorMessage)
    } finally {
      setLlmProcessing(false)
    }
  }, [addMessage, currentScenario, messages.problem, messages.solution, llmProcessing])

  // 新增：取消迭代模式
  const cancelIteration = useCallback(() => {
    setIterationMode(false)
    setPendingResponse(null)
  }, [])

  // 新增：处理信息选项勾选
  const toggleMissingInfoOption = useCallback((index) => {
    setMissingInfoOptions(prev => 
      prev.map((option, i) => 
        i === index ? { ...option, selected: !option.selected } : option
      )
    )
  }, [])

  // 新增：生成基于选中信息的追问
  const generateFollowUpBySelectedInfo = useCallback(async () => {
    if (!currentNeedsAnalysis || iterationProcessing) return
    
    const selectedOptions = missingInfoOptions.filter(option => option.selected)
    if (selectedOptions.length === 0) return

    setIterationProcessing(true)

    try {
      // 生成追问
      const llmResult = await processWithLLM({
        type: 'generate_questions_by_selected_info',
        content: {
          originalContent: currentNeedsAnalysis.originalContent,
          selectedInfoItems: selectedOptions
        },
        scenario: currentScenario,
        chatHistory: currentNeedsAnalysis.chatHistory
      })

      // 添加LLM处理过程到中介面板
      const llmMessage = {
        type: 'processing',
        title: '生成智能追问',
        steps: [
          {
            name: '选中信息',
            content: selectedOptions.map(opt => `${opt.name}：${opt.description}`).join('\n')
          },
          {
            name: '生成追问',
            content: llmResult
          }
        ],
        output: llmResult,
        timestamp: new Date().toISOString()
      }
      addMessage('llm', llmMessage)

      // 将智能生成的追问添加到方案端，支持协商、拒绝、采纳
      const intelligentFollowUpMessage = {
        id: Date.now() + Math.random(),
        type: 'intelligent_followup',
        text: llmResult,
        timestamp: new Date().toISOString(),
        selectedInfo: selectedOptions,
        feedbackGiven: false,
        accepted: false,
        negotiating: false,
        negotiated: false
      }
      addMessage('solution', intelligentFollowUpMessage)
      setShowMissingInfoPanel(false)

    } catch (error) {
      console.error('生成追问错误:', error)
      const errorMessage = {
        type: 'processing',
        title: '生成追问出错',
        steps: [{
          name: '错误信息',
          content: '抱歉，生成追问时出现了错误，请稍后重试。'
        }],
        timestamp: new Date().toISOString()
      }
      addMessage('llm', errorMessage)
    } finally {
      setIterationProcessing(false)
    }
  }, [currentNeedsAnalysis, missingInfoOptions, currentScenario, iterationProcessing, addMessage])

  // 新增：跳过信息收集，直接回复
  const skipInfoCollection = useCallback(() => {
    setShowMissingInfoPanel(false)
    setMissingInfoOptions([])
    setCurrentNeedsAnalysis(null)
  }, [])

  // 新增：接受建议
  const acceptSuggestion = useCallback((suggestionId) => {
    setMessages(prev => ({
      ...prev,
      solution: prev.solution.map(msg => 
        msg.id === suggestionId 
          ? { ...msg, feedbackGiven: true, accepted: true }
          : msg
      )
    }))
  }, [])

  // 新增：与AI协商建议
  const negotiateSuggestion = useCallback((suggestionId) => {
    // 标记建议进入协商模式
    setMessages(prev => ({
      ...prev,
      solution: prev.solution.map(msg => 
        msg.id === suggestionId 
          ? { ...msg, negotiating: true }
          : msg
      )
    }))
  }, [])

  // 新增：取消协商模式
  const cancelNegotiation = useCallback((suggestionId) => {
    setMessages(prev => ({
      ...prev,
      solution: prev.solution.map(msg => 
        msg.id === suggestionId 
          ? { ...msg, negotiating: false }
          : msg
      )
    }))
  }, [])

  // 新增：发送协商请求
  const sendNegotiationRequest = useCallback(async (suggestionId, negotiationText) => {
    if (!negotiationText.trim()) return

    try {
      // 获取原始建议
      const originalSuggestion = messages.solution.find(msg => msg.id === suggestionId)
      if (!originalSuggestion) return

      // 构建协商上下文
      const chatHistory = [
        ...messages.problem
          .filter(msg => msg.type === 'user' || msg.type === 'ai_response')
          .map(msg => ({ ...msg, panel: 'problem' })),
        ...messages.solution
          .filter(msg => msg.type === 'llm_request' || msg.type === 'user' || msg.type === 'ai_response')
          .map(msg => ({ ...msg, panel: 'solution' }))
      ].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))

      // 生成协商后的建议
      const llmResult = await processWithLLM({
        type: 'negotiate_suggestion',
        content: {
          originalSuggestion: originalSuggestion.text,
          negotiationRequest: negotiationText,
          negotiationHistory: originalSuggestion.negotiationHistory || []
        },
        scenario: currentScenario,
        chatHistory: chatHistory
      })

      // 添加LLM处理过程到中介面板
      const llmMessage = {
        type: 'processing',
        title: '协商修改建议',
        steps: llmResult.steps,
        output: llmResult.suggestionMessage,
        timestamp: new Date().toISOString()
      }
      addMessage('llm', llmMessage)

      // 更新原建议为协商后的版本，保留协商历史
      setMessages(prev => ({
        ...prev,
        solution: prev.solution.map(msg => 
          msg.id === suggestionId 
            ? { 
                ...msg, 
                text: llmResult.suggestionMessage,
                negotiating: false,
                negotiated: true,
                negotiationHistory: [
                  ...(msg.negotiationHistory || []),
                  {
                    previousText: msg.negotiationHistory?.length > 0 ? msg.text : (msg.originalText || msg.text),
                    negotiationRequest: negotiationText,
                    timestamp: new Date().toISOString()
                  }
                ],
                originalText: msg.originalText || originalSuggestion.text
              }
            : msg
        )
      }))

    } catch (error) {
      console.error('协商建议错误:', error)
      // 协商失败，退出协商模式
      cancelNegotiation(suggestionId)
    }
  }, [messages.problem, messages.solution, currentScenario, addMessage, cancelNegotiation])

  // 新增：拒绝建议并重新生成
  const rejectSuggestion = useCallback(async (suggestionId) => {
    // 标记建议为已拒绝
    setMessages(prev => ({
      ...prev,
      solution: prev.solution.map(msg => 
        msg.id === suggestionId 
          ? { ...msg, feedbackGiven: true, accepted: false }
          : msg
      )
    }))

    // 重新生成建议
    await generateSuggestion()
  }, [generateSuggestion])

  // 新增：接受追问
  const acceptFollowUp = useCallback((followUpId, onSetInput) => {
    const followUpMessage = messages.solution.find(msg => msg.id === followUpId)
    if (!followUpMessage) return

    // 标记为已接受
    setMessages(prev => ({
      ...prev,
      solution: prev.solution.map(msg => 
        msg.id === followUpId 
          ? { ...msg, feedbackGiven: true, accepted: true }
          : msg
      )
    }))

    // 将追问内容填入输入框
    if (onSetInput && typeof onSetInput === 'function') {
      onSetInput(followUpMessage.text)
    }
  }, [messages.solution])

  // 新增：与AI协商追问
  const negotiateFollowUp = useCallback((followUpId) => {
    // 标记追问进入协商模式
    setMessages(prev => ({
      ...prev,
      solution: prev.solution.map(msg => 
        msg.id === followUpId 
          ? { ...msg, negotiating: true }
          : msg
      )
    }))
  }, [])

  // 新增：取消追问协商模式
  const cancelFollowUpNegotiation = useCallback((followUpId) => {
    setMessages(prev => ({
      ...prev,
      solution: prev.solution.map(msg => 
        msg.id === followUpId 
          ? { ...msg, negotiating: false }
          : msg
      )
    }))
  }, [])

  // 新增：发送追问协商请求
  const sendFollowUpNegotiationRequest = useCallback(async (followUpId, negotiationText, onSetInput) => {
    if (!negotiationText.trim()) return

    try {
      // 获取原始追问
      const originalFollowUp = messages.solution.find(msg => msg.id === followUpId)
      if (!originalFollowUp) return

      // 构建协商上下文
      const chatHistory = [
        ...messages.problem
          .filter(msg => msg.type === 'user' || msg.type === 'ai_response')
          .map(msg => ({ ...msg, panel: 'problem' })),
        ...messages.solution
          .filter(msg => msg.type === 'llm_request' || msg.type === 'user' || msg.type === 'ai_response')
          .map(msg => ({ ...msg, panel: 'solution' }))
      ].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))

      // 生成协商后的追问
      const llmResult = await processWithLLM({
        type: 'negotiate_followup',
        content: {
          originalFollowUp: originalFollowUp.text,
          negotiationRequest: negotiationText,
          negotiationHistory: originalFollowUp.negotiationHistory || []
        },
        scenario: currentScenario,
        chatHistory: chatHistory
      })

      // 添加LLM处理过程到中介面板
      const llmMessage = {
        type: 'processing',
        title: '协商修改追问',
        steps: llmResult.steps,
        output: llmResult.followUpMessage,
        timestamp: new Date().toISOString()
      }
      addMessage('llm', llmMessage)

      // 更新原追问为协商后的版本，保留协商历史
      setMessages(prev => ({
        ...prev,
        solution: prev.solution.map(msg => 
          msg.id === followUpId 
            ? { 
                ...msg, 
                text: llmResult.followUpMessage,
                negotiating: false,
                negotiated: true,
                negotiationHistory: [
                  ...(msg.negotiationHistory || []),
                  {
                    previousText: msg.negotiationHistory?.length > 0 ? msg.text : (msg.originalText || msg.text),
                    negotiationRequest: negotiationText,
                    timestamp: new Date().toISOString()
                  }
                ],
                originalText: msg.originalText || originalFollowUp.text
              }
            : msg
        )
      }))

      // 协商完成后，将协商后的追问自动填入输入框
      if (onSetInput && typeof onSetInput === 'function') {
        onSetInput(llmResult.followUpMessage)
      }

    } catch (error) {
      console.error('协商追问错误:', error)
      // 协商失败，退出协商模式
      cancelFollowUpNegotiation(followUpId)
    }
  }, [messages.problem, messages.solution, currentScenario, addMessage, cancelFollowUpNegotiation])

  // 新增：拒绝追问并重新生成
  const rejectFollowUp = useCallback(async (followUpId) => {
    // 标记追问为已拒绝
    setMessages(prev => ({
      ...prev,
      solution: prev.solution.map(msg => 
        msg.id === followUpId 
          ? { ...msg, feedbackGiven: true, accepted: false }
          : msg
      )
    }))

    // 重新生成追问
    await generateFollowUp()
  }, [generateFollowUp])

  // 新增：接受智能追问
  const acceptIntelligentFollowUp = useCallback((followUpId, onSetInput) => {
    const followUpMessage = messages.solution.find(msg => msg.id === followUpId)
    if (!followUpMessage) return

    // 标记为已接受
    setMessages(prev => ({
      ...prev,
      solution: prev.solution.map(msg => 
        msg.id === followUpId 
          ? { ...msg, feedbackGiven: true, accepted: true }
          : msg
      )
    }))

    // 将追问内容填入输入框
    if (onSetInput && typeof onSetInput === 'function') {
      onSetInput(followUpMessage.text)
    }
  }, [messages.solution])

  // 新增：拒绝智能追问
  const rejectIntelligentFollowUp = useCallback(async (followUpId) => {
    // 标记追问为已拒绝
    setMessages(prev => ({
      ...prev,
      solution: prev.solution.map(msg => 
        msg.id === followUpId 
          ? { ...msg, feedbackGiven: true, accepted: false }
          : msg
      )
    }))

    // 可以选择重新生成或者回到信息选择界面
    setShowMissingInfoPanel(true)
  }, [])

  // 新增：协商智能追问
  const negotiateIntelligentFollowUp = useCallback((followUpId) => {
    setMessages(prev => ({
      ...prev,
      solution: prev.solution.map(msg => 
        msg.id === followUpId 
          ? { ...msg, negotiating: true }
          : msg
      )
    }))
  }, [])

  // 新增：取消智能追问协商
  const cancelIntelligentFollowUpNegotiation = useCallback((followUpId) => {
    setMessages(prev => ({
      ...prev,
      solution: prev.solution.map(msg => 
        msg.id === followUpId 
          ? { ...msg, negotiating: false }
          : msg
      )
    }))
  }, [])

  // 新增：发送智能追问协商请求
  const sendIntelligentFollowUpNegotiationRequest = useCallback(async (followUpId, negotiationText, onSetInput) => {
    if (!negotiationText.trim()) return

    try {
      // 获取原始追问
      const originalFollowUp = messages.solution.find(msg => msg.id === followUpId)
      if (!originalFollowUp) return

      // 构建协商上下文
      const chatHistory = [
        ...messages.problem
          .filter(msg => msg.type === 'user' || msg.type === 'ai_response')
          .map(msg => ({ ...msg, panel: 'problem' })),
        ...messages.solution
          .filter(msg => msg.type === 'llm_request' || msg.type === 'user' || msg.type === 'ai_response')
          .map(msg => ({ ...msg, panel: 'solution' }))
      ].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))

      // 生成协商后的追问
      const llmResult = await processWithLLM({
        type: 'negotiate_followup',
        content: {
          originalFollowUp: originalFollowUp.text,
          negotiationRequest: negotiationText,
          negotiationHistory: originalFollowUp.negotiationHistory || []
        },
        scenario: currentScenario,
        chatHistory: chatHistory
      })

      // 添加LLM处理过程到中介面板
      const llmMessage = {
        type: 'processing',
        title: '协商修改智能追问',
        steps: llmResult.steps,
        output: llmResult.followUpMessage,
        timestamp: new Date().toISOString()
      }
      addMessage('llm', llmMessage)

      // 更新原追问为协商后的版本，保留协商历史
      setMessages(prev => ({
        ...prev,
        solution: prev.solution.map(msg => 
          msg.id === followUpId 
            ? { 
                ...msg, 
                text: llmResult.followUpMessage,
                negotiating: false,
                negotiated: true,
                negotiationHistory: [
                  ...(msg.negotiationHistory || []),
                  {
                    previousText: msg.negotiationHistory?.length > 0 ? msg.text : (msg.originalText || msg.text),
                    negotiationRequest: negotiationText,
                    timestamp: new Date().toISOString()
                  }
                ],
                originalText: msg.originalText || originalFollowUp.text
              }
            : msg
        )
      }))

      // 协商完成后，将协商后的追问自动填入输入框
      if (onSetInput && typeof onSetInput === 'function') {
        onSetInput(llmResult.followUpMessage)
      }

    } catch (error) {
      console.error('协商智能追问错误:', error)
      // 协商失败，退出协商模式
      cancelIntelligentFollowUpNegotiation(followUpId)
    }
  }, [messages.problem, messages.solution, currentScenario, addMessage, cancelIntelligentFollowUpNegotiation])

  // 生成部门联络指令
  const generateDepartmentContact = useCallback(async (suggestion) => {
    if (iterationProcessing) return

    setIterationProcessing(true)

    try {
      // 构建完整的聊天历史
      const chatHistory = [
        // 问题端的所有消息：用户输入 + AI优化后的回复
        ...messages.problem
          .filter(msg => msg.type === 'user' || msg.type === 'ai_response')
          .map(msg => ({ ...msg, panel: 'problem' })),
        // 方案端的所有消息：AI转译的请求 + 企业用户输入 + AI回复
        ...messages.solution
          .filter(msg => msg.type === 'llm_request' || msg.type === 'user' || msg.type === 'ai_response')
          .map(msg => ({ ...msg, panel: 'solution' }))
      ].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))

      // 生成部门联络指令
      const llmResult = await processWithLLM({
        type: 'generate_department_contact',
        content: suggestion,
        scenario: currentScenario,
        chatHistory: chatHistory
      })

      // 添加LLM处理过程到中介面板
      const llmMessage = {
        type: 'processing',
        title: '生成部门联络指令',
        steps: llmResult.steps,
        output: `客户回复：${llmResult.customerReply}\n\n联络指令：${llmResult.contactInstruction}`,
        timestamp: new Date().toISOString()
      }
      addMessage('llm', llmMessage)

      // 将联络指令添加到方案端（作为特殊消息类型）
      const contactMessage = {
        type: 'department_contact',
        customerReply: llmResult.customerReply,
        contactInstruction: llmResult.contactInstruction,
        timestamp: new Date().toISOString(),
        id: `contact_${Date.now()}`,
        instructionSent: false, // 初始化为未发送状态
        sentTimestamp: null
      }
      addMessage('solution', contactMessage)

    } catch (error) {
      console.error('生成部门联络指令时出错:', error)
      // 添加错误消息
      const errorMessage = {
        type: 'processing',
        title: '生成部门联络指令出错',
        steps: [{
          name: '错误信息',
          content: '抱歉，生成部门联络指令时出现了错误，请稍后重试。'
        }],
        timestamp: new Date().toISOString()
      }
      addMessage('llm', errorMessage)
    } finally {
      setIterationProcessing(false)
    }
  }, [addMessage, currentScenario, messages.problem, messages.solution, iterationProcessing])

  // 标记联络指令为已发送
  const markContactInstructionSent = useCallback((contactId) => {
    setMessages(prev => ({
      ...prev,
      solution: prev.solution.map(msg => 
        msg.id === contactId && msg.type === 'department_contact' ? {
          ...msg,
          instructionSent: true,
          sentTimestamp: new Date().toISOString()
        } : msg
      )
    }))
  }, [])

  // 新增：清空所有状态
  const clearAllStates = useCallback(() => {
    setMessages({
      problem: [],
      llm: [],
      solution: []
    })
    setIterationMode(false)
    setPendingResponse(null)
    setMissingInfoOptions([])
    setShowMissingInfoPanel(false)
    setCurrentNeedsAnalysis(null)
  }, [])

  return {
    messages,
    llmProcessing,
    iterationProcessing,
    iterationMode,
    pendingResponse,
    // 新增的状态和方法
    missingInfoOptions,
    showMissingInfoPanel,
    currentNeedsAnalysis,
    toggleMissingInfoOption,
    generateFollowUpBySelectedInfo,
    skipInfoCollection,
    // 建议反馈相关方法
    acceptSuggestion,
    negotiateSuggestion,
    cancelNegotiation,
    sendNegotiationRequest,
    rejectSuggestion,
    // 追问反馈相关方法
    acceptFollowUp,
    negotiateFollowUp,
    cancelFollowUpNegotiation,
    sendFollowUpNegotiationRequest,
    rejectFollowUp,
    // 智能追问反馈相关方法
    acceptIntelligentFollowUp,
    negotiateIntelligentFollowUp,
    cancelIntelligentFollowUpNegotiation,
    sendIntelligentFollowUpNegotiationRequest,
    rejectIntelligentFollowUp,
    // 原有方法
    sendProblemMessage,
    sendSolutionMessage,
    generateSuggestion,
    generateFollowUp,
    generateDepartmentContact,
    markContactInstructionSent,
    confirmSendResponse,
    cancelIteration,
    clearMessages: clearAllStates
  }
}