import React, { useState, useRef, useEffect } from 'react'
import { Send, Users, User, Bot, FileText, Lightbulb, MessageSquare, CheckCircle, XCircle, AlertCircle, ArrowRight, Check, MessageCircle } from 'lucide-react'
import AnimatedTransition from './AnimatedTransition'
import { TypingLoader } from './LoadingStates'

const SolutionPanel = ({ 
  scenario, 
  messages, 
  onSendMessage, 
  isProcessing,
  iterationProcessing, // 新增：迭代处理状态
  iterationMode,
  pendingResponse,
  directSendCandidate,
  onConfirmDirectSend,
  onCancelDirectSend,
  onGenerateSuggestion,
  onGenerateFollowUp,
  onGenerateDepartmentContact,
  onMarkContactInstructionSent,
  onMarkCustomerReplyApplied,
  onSendToProblem,
  onPrepareDirectSendCandidate,
  onConfirmSend,
  onCancelIteration,
  onSetInput, // 新增：设置输入框内容的回调
  // 新增：勾选框相关props
  missingInfoOptions,
  showMissingInfoPanel,
  onToggleMissingInfoOption,
  onGenerateFollowUpBySelectedInfo,
  onSkipInfoCollection,
  // 新增：建议反馈相关props
  onAcceptSuggestion,
  onRejectSuggestion,
  onNegotiateSuggestion,
  onCancelNegotiation,
  onSendNegotiationRequest,
  // 新增：追问反馈相关props
  onAcceptFollowUp,
  onRejectFollowUp,
  onNegotiateFollowUp,
  onCancelFollowUpNegotiation,
  onSendFollowUpNegotiationRequest,
  // 新增：智能追问反馈相关props
  onAcceptIntelligentFollowUp,
  onRejectIntelligentFollowUp,
  onNegotiateIntelligentFollowUp,
  onCancelIntelligentFollowUpNegotiation,
  onSendIntelligentFollowUpNegotiationRequest
}) => {
  const [input, setInput] = useState('')

  // 调试输入框状态变化
  useEffect(() => {
    console.log('📝 输入框内容更新:', input)
    console.log('🔍 当前状态:', { 
      iterationMode, 
      isProcessing, 
      iterationProcessing,
      inputReadOnly: isProcessing || iterationProcessing 
    })
  }, [input, iterationMode, isProcessing, iterationProcessing])

  // 暴露setInput函数给父组件
  useEffect(() => {
    console.log('🔗 SolutionPanel: 设置setInput引用', { onSetInput: !!onSetInput })
    if (onSetInput) {
      onSetInput(setInput)
      console.log('✅ setInput函数已传递给父组件')
    }
  }, [onSetInput])

  // 调试部门联络指令消息
  useEffect(() => {
    const departmentContactMessages = messages.filter(msg => msg.type === 'department_contact')
    if (departmentContactMessages.length > 0) {
      console.log('🏢 当前部门联络指令消息:', departmentContactMessages.map(msg => ({
        id: msg.id,
        customerReply: msg.customerReply,
        contactInstruction: msg.contactInstruction,
        instructionSent: msg.instructionSent
      })))
    }
  }, [messages])

  // 协商面板组件
  const NegotiationPanel = ({ messageId, onSendNegotiation, onCancel }) => {
    const [negotiationText, setNegotiationText] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSendNegotiation = async () => {
      if (!negotiationText.trim() || isSubmitting) return
      
      setIsSubmitting(true)
      try {
        await onSendNegotiation(messageId, negotiationText)
        setNegotiationText('')
      } catch (error) {
        console.error('发送协商请求失败:', error)
      } finally {
        setIsSubmitting(false)
      }
    }

    return (
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
        <div className="flex items-center space-x-2 mb-2">
          <MessageCircle className="w-4 h-4 text-blue-600" />
          <span className="text-sm font-medium text-blue-800 dark:text-blue-200">协商模式</span>
        </div>
        <div className="space-y-2">
          <textarea
            value={negotiationText}
            onChange={(e) => setNegotiationText(e.target.value)}
            placeholder="请描述您希望如何修改这个建议..."
            className="w-full p-2 text-sm border border-blue-200 dark:border-blue-700 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-900/30 dark:text-blue-100"
            rows={3}
            disabled={isSubmitting}
          />
          <div className="flex space-x-2">
            <button
              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleSendNegotiation}
              disabled={!negotiationText.trim() || isSubmitting}
            >
              {isSubmitting ? '发送中...' : '发送协商'}
            </button>
            <button
              className="px-3 py-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors text-sm"
              onClick={() => onCancel(messageId)}
              disabled={isSubmitting}
            >
              取消
            </button>
          </div>
        </div>
      </div>
    )
  }
  const [finalResponse, setFinalResponse] = useState('')
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  // 智能滚动：只在用户接近底部时才自动滚动
  useEffect(() => {
    const container = messagesEndRef.current?.parentElement
    if (!container) return

    // 检查用户是否接近底部（距离底部小于100px）
    const isNearBottom = container.scrollHeight - container.scrollTop - container.clientHeight < 100
    
    // 只有在用户接近底部时才自动滚动
    if (isNearBottom) {
      setTimeout(() => scrollToBottom(), 100) // 短暂延迟确保内容已渲染
    }
  }, [messages])

  // [REMOVED] 不再自动填入建议到最终回复输入框
  // useEffect(() => {
  //   if (iterationMode && pendingResponse) {
  //     setFinalResponse(pendingResponse)
  //   }
  // }, [iterationMode, pendingResponse])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return

    onSendMessage({
      text: input.trim(),
      timestamp: new Date().toISOString()
    })

    setInput('')
  }

  // 新增：直接发送到问题端（不经AI转译）
  const handleDirectSend = () => {
    if (!input.trim()) return
    if (onSendToProblem) {
      onSendToProblem({ text: input.trim(), timestamp: new Date().toISOString() })
      setInput('')
    }
  }

  // 新增：确认直发处理
  const handleConfirmDirectSend = () => {
    if (!input.trim()) return
    if (onConfirmDirectSend) {
      onConfirmDirectSend(input.trim())
      setInput('')
    }
  }

  const handleConfirmSend = () => {
    if (!finalResponse.trim()) return
    onConfirmSend(finalResponse.trim())
    setFinalResponse('')
  }

  const insertSampleResponse = () => {
    const sampleResponses = {
      retail: '为您推荐三款商务西装：1）海军蓝修身款A123，售价1280元，意大利进口面料，免费修改，适合演讲场合；2）深灰经典款B456，售价1150元，舒适透气，商务首选；3）炭黑现代款C789，售价1350元，时尚剪裁。175cm身高建议选L码，提供3天内修改服务，可预约试穿。',
      enterprise: '推荐开发AI驱动的个性化推荐系统：第一阶段（1个月）用户行为数据收集分析，第二阶段（1.5个月）算法开发测试，第三阶段（0.5个月）部署优化。预计投入3名算法工程师、2名前端开发，总预算45万元，预期提升留存率至48%。',
      education: '波粒二象性可以通过双缝实验理解：当光通过两个缝时表现为波（产生干涉条纹），当我们观测光子通过哪个缝时表现为粒子（条纹消失）。建议做法：1）观看双缝实验视频，2）学习光电效应原理，3）练习相关计算题，4）参加实验课亲自操作。'
    }
    setInput(sampleResponses[scenario.id] || '')
  }

  return (
    <>
      <div className="p-4 border-b border-white/20 dark:border-white/10 glass-effect rounded-t-2xl" style={{background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(16, 185, 129, 0.12) 100%)', backdropFilter: 'blur(20px) saturate(1.3)'}}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-100/70 dark:bg-emerald-900/50 rounded-2xl backdrop-blur-sm">
              <Users className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">解决方案</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{scenario.solutionRole}</p>
            </div>
          </div>
          {/* <button
            onClick={insertSampleResponse}
            className="btn-ghost text-xs"
          >
            插入示例
          </button> */}
        </div>
      </div>

      {/* 迭代模式提示 */}
      {iterationMode && (
        <AnimatedTransition type="slide-down" show={true}>
          <div className="p-3" style={{
            background: 'linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(147,197,253,0.06) 100%)',
            backdropFilter: 'blur(14px) saturate(1.2)',
            WebkitBackdropFilter: 'blur(14px) saturate(1.2)',
            border: '1px solid rgba(147,197,253,0.25)',
            borderRadius: '12px'
          }}>
            <div className="flex items-center space-x-2 text-blue-800 dark:text-blue-200">
              <Lightbulb className="w-4 h-4" />
              <span className="text-sm font-medium">迭代模式 - 请确认最终回复内容</span>
            </div>
            <p className="text-xs text-blue-600 dark:text-blue-300 mt-1">
              您可以继续编辑内容，确认无误后点击"确认发送"将回复发送给客户
            </p>
          </div>
        </AnimatedTransition>
      )}

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto space-y-3 mb-4 p-4">
        {(!messages || messages.length === 0) && (
          <div className="flex flex-col items-center justify-center h-full text-center text-gray-500 dark:text-gray-400 space-y-4">
            <AnimatedTransition type="fade" show={true}>
              <div className="p-4 bg-gradient-to-r from-green-100/80 to-emerald-100/80 dark:from-green-900/30 dark:to-emerald-900/30 rounded-full shadow-inner backdrop-blur-sm">
                <Users className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
            </AnimatedTransition>
            <p className="text-lg">等待接收LLM翻译的需求</p>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              在此基础上提供定制化解决方案
            </p>
          </div>
        )}
        
        {messages && messages.map((message, index) => (
          <AnimatedTransition 
            key={index} 
            type={message.type === 'user' ? 'slide-right' : 'slide-left'} 
            show={true}
          >
            <div className="space-y-2">
              {message.type === 'llm_request' && (
                <div className="message-bubble text-blue-900 shadow-sm hover:shadow-md transition-all duration-200" style={{
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(147, 197, 253, 0.06) 100%)',
                  backdropFilter: 'blur(20px) saturate(1.3)',
                  WebkitBackdropFilter: 'blur(20px) saturate(1.3)',
                  border: '1px solid rgba(147, 197, 253, 0.2)',
                  borderRadius: '12px'
                }}>
                  <div className="flex items-start space-x-2">
                    <Bot className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-xs font-semibold text-white mb-1" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                        来自LLM的需求转译
                      </div>
                      {/* 需求理解 - 已移至AI中介面板，此处不再显示 */}
                      {/* 需求转译内容 */}
                      <div className="message-content">
                        <p className="whitespace-pre-wrap text-gray-800 dark:text-gray-200 select-text">{message.text}</p>
                      </div>
                      {/* 缺失信息提示 - 已移至AI中介面板，此处不再显示 */}
                      <div className="text-xs text-gray-300 mt-1 opacity-90" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                        {new Date(message.timestamp).toLocaleTimeString()}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {message.type === 'user' && (
                <div className="message-bubble text-green-900 ml-auto shadow-sm hover:shadow-md transition-all duration-200" style={{
                  background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(134, 239, 172, 0.06) 100%)',
                  backdropFilter: 'blur(20px) saturate(1.3)',
                  WebkitBackdropFilter: 'blur(20px) saturate(1.3)',
                  border: '1px solid rgba(34, 197, 94, 0.2)',
                  borderRadius: '12px'
                }}>
                  <div className="flex items-start space-x-2">
                    <User className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      {/* [MODIFIED] 单条消息滚动容器 */}
                      <div className="message-content">
                        <p className="whitespace-pre-wrap text-gray-800 dark:text-gray-200 select-text">{message.text}</p>
                      </div>
                      <div className="text-xs text-gray-300 mt-1 opacity-90" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                        {new Date(message.timestamp).toLocaleTimeString()}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {message.type === 'ai_response' && (
                <div className="message-bubble message-ai shadow-sm hover:shadow-md transition-all duration-200">
                  <div className="flex items-start space-x-2">
                    <Bot className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-xs font-medium text-gray-700 mb-1">
                        LLM优化后的响应
                      </div>
                      {/* [MODIFIED] 单条消息滚动容器 */}
                      <div className="message-content">
                        <p className="whitespace-pre-wrap text-gray-800 dark:text-gray-200 select-text">{message.text}</p>
                      </div>
                      <div className="text-xs text-gray-300 mt-1 opacity-90" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                        {new Date(message.timestamp).toLocaleTimeString()}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 新增：建议消息 - 简化显示，主要内容在AI中介面板 */}
              {message.type === 'suggestion' && false && (
                <div className="message-bubble text-purple-900 shadow-sm hover:shadow-md transition-all duration-200" style={{
                  background: 'linear-gradient(135deg, rgba(168,85,247,0.08) 0%, rgba(221,214,254,0.06) 100%)',
                  backdropFilter: 'blur(14px) saturate(1.2)',
                  WebkitBackdropFilter: 'blur(14px) saturate(1.2)',
                  border: '1px solid rgba(168,85,247,0.25)',
                  borderRadius: '12px'
                }}>
                  <div className="flex items-start space-x-2">
                    <Lightbulb className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-xs font-semibold text-white mb-1" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                        AI生成的建议
                      </div>
                      {/* [MODIFIED] 建议内容显示容器 - 移除点击填入功能 */}
                      <div 
                        className="rounded p-2"
                        style={{
                          background: 'linear-gradient(135deg, rgba(168,85,247,0.06) 0%, rgba(221,214,254,0.05) 100%)',
                          border: '1px solid rgba(168,85,247,0.2)',
                          maxHeight: 'none',
                          overflowY: 'visible',
                          width: '100%',
                          wordWrap: 'break-word',
                          whiteSpace: 'pre-wrap'
                        }}
                      >
                        <p className="whitespace-pre-wrap text-gray-800 dark:text-gray-200 select-text" style={{
                          margin: 0,
                          padding: 0,
                          lineHeight: '1.5',
                          wordBreak: 'break-word',
                          overflowWrap: 'break-word',
                          maxWidth: '100%'
                        }}>{message.text}</p>
                      </div>
                      
                      {/* 建议反馈按钮 */}
              <div className="mt-3">
                {message.feedbackGiven ? (
                  message.accepted ? (
                    <div className="space-y-2">
                      <div className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-sm px-3 py-1 rounded">
                        ✓ 已接受建议
                      </div>
                      {/* 接受建议后的部门联络指令按钮 */}
                      <button
                        onClick={() => onGenerateDepartmentContact && onGenerateDepartmentContact(message.text)}
                        className="w-full px-4 py-3 text-white rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 text-sm font-medium hover:scale-105"
                        style={{
                          background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(16, 185, 129, 0.15) 100%)',
                          backdropFilter: 'blur(10px) saturate(1.3)',
                          WebkitBackdropFilter: 'blur(10px) saturate(1.3)',
                          border: '1px solid rgba(34, 197, 94, 0.3)',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                        }}
                        title="生成客户回复和部门联络指令"
                        disabled={iterationProcessing}
                      >
                        <Users className="w-4 h-4" />
                        <span>生成客户回复和部门联络指令</span>
                        {iterationProcessing && <div className="w-4 h-4 border-2 border-green-400 border-t-transparent rounded-full animate-spin ml-1"></div>}
                      </button>
                    </div>
                  ) : (
                    <div className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 text-sm px-3 py-1 rounded">
                      ↻ 已拒绝，重新生成中...
                    </div>
                  )
                ) : message.negotiating ? (
                   <NegotiationPanel 
                     messageId={message.id}
                     onSendNegotiation={onSendNegotiationRequest}
                     onCancel={onCancelNegotiation}
                   />
                 ) : message.negotiated ? (
                   <div className="space-y-2">
                     <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-2">
                       <div className="text-sm text-blue-800 dark:text-blue-200">
                         ✓ 已协商修改 ({message.negotiationHistory?.length || 1} 次)
                         <details className="mt-1">
                           <summary className="cursor-pointer text-xs text-blue-600 hover:text-blue-800">查看协商历史</summary>
                           <div className="mt-2 text-xs text-gray-600 dark:text-gray-400 space-y-2">
                             <div><strong>最初建议:</strong> {message.originalText}</div>
                             {message.negotiationHistory?.map((nego, index) => (
                               <div key={index} className="border-l-2 border-blue-200 pl-2">
                                 <div><strong>第{index + 1}次协商要求:</strong> {nego.negotiationRequest}</div>
                                 <div className="text-xs text-gray-500">{new Date(nego.timestamp).toLocaleString()}</div>
                               </div>
                             ))}
                           </div>
                         </details>
                       </div>
                     </div>
                     {/* 继续提供协商选项 */}
                     <div className="space-y-2">
                       <div className="flex space-x-2">
                         <button
                           onClick={() => onAcceptSuggestion && onAcceptSuggestion(message.id)}
                           className="flex-1 px-3 py-2 text-white rounded-lg transition-colors flex items-center justify-center space-x-1 text-sm"
                           style={{
                             background: 'rgba(255, 255, 255, 0.15)',
                             backdropFilter: 'blur(8px) saturate(1.2)',
                             WebkitBackdropFilter: 'blur(8px) saturate(1.2)',
                             border: '1px solid rgba(255, 255, 255, 0.25)'
                           }}
                           title="接受当前版本"
                         >
                           <Check className="w-4 h-4" />
                           <span>接受建议</span>
                         </button>
                         <button
                           onClick={() => onNegotiateSuggestion && onNegotiateSuggestion(message.id)}
                           className="flex-1 px-3 py-2 text-white rounded-lg transition-colors flex items-center justify-center space-x-1 text-sm"
                           style={{
                             background: 'rgba(255, 255, 255, 0.15)',
                             backdropFilter: 'blur(8px) saturate(1.2)',
                             WebkitBackdropFilter: 'blur(8px) saturate(1.2)',
                             border: '1px solid rgba(255, 255, 255, 0.25)'
                           }}
                           title="继续协商修改"
                         >
                           <MessageCircle className="w-4 h-4" />
                           <span>继续协商</span>
                         </button>
                         <button
                           onClick={() => onRejectSuggestion && onRejectSuggestion(message.id)}
                           className="flex-1 px-3 py-2 text-white rounded-lg transition-colors flex items-center justify-center space-x-1 text-sm"
                           style={{
                             background: 'rgba(255, 255, 255, 0.15)',
                             backdropFilter: 'blur(8px) saturate(1.2)',
                             WebkitBackdropFilter: 'blur(8px) saturate(1.2)',
                             border: '1px solid rgba(255, 255, 255, 0.25)'
                           }}
                           title="重新生成"
                         >
                           <XCircle className="w-4 h-4" />
                           <span>重新生成</span>
                         </button>
                       </div>
                       {/* 部门联系按钮 - 单独一行 */}
                       <button
                         onClick={() => onGenerateDepartmentContact && onGenerateDepartmentContact(message.text)}
                         className="w-full px-4 py-3 text-white rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 text-sm font-medium hover:scale-105"
                         style={{
                           background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(16, 185, 129, 0.15) 100%)',
                           backdropFilter: 'blur(10px) saturate(1.3)',
                           WebkitBackdropFilter: 'blur(10px) saturate(1.3)',
                           border: '1px solid rgba(34, 197, 94, 0.3)',
                           boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                         }}
                         title="生成客户回复和部门联络指令"
                         disabled={iterationProcessing}
                       >
                         <Users className="w-4 h-4" />
                         <span>生成客户回复和部门联络指令</span>
                         {iterationProcessing && <div className="w-4 h-4 border-2 border-green-400 border-t-transparent rounded-full animate-spin ml-1"></div>}
                       </button>
                     </div>
                   </div>
                ) : (
                   <div className="flex space-x-2">
                     <button
                       onClick={() => onAcceptSuggestion && onAcceptSuggestion(message.id)}
                       className="flex-1 px-3 py-2 text-white rounded-lg transition-colors flex items-center justify-center space-x-1 text-sm"
                       style={{
                         background: 'rgba(255, 255, 255, 0.15)',
                         backdropFilter: 'blur(8px) saturate(1.2)',
                         WebkitBackdropFilter: 'blur(8px) saturate(1.2)',
                         border: '1px solid rgba(255, 255, 255, 0.25)'
                       }}
                       title="接受这个建议"
                     >
                       <CheckCircle className="w-4 h-4" />
                       <span>接受建议</span>
                     </button>
                     <button
                       onClick={() => onNegotiateSuggestion && onNegotiateSuggestion(message.id)}
                       className="flex-1 px-3 py-2 text-white rounded-lg transition-colors flex items-center justify-center space-x-1 text-sm"
                       style={{
                         background: 'rgba(255, 255, 255, 0.15)',
                         backdropFilter: 'blur(8px) saturate(1.2)',
                         WebkitBackdropFilter: 'blur(8px) saturate(1.2)',
                         border: '1px solid rgba(255, 255, 255, 0.25)'
                       }}
                       title="与AI协商修改建议"
                     >
                       <MessageCircle className="w-4 h-4" />
                       <span>协商</span>
                     </button>
                     <button
                       onClick={() => onRejectSuggestion && onRejectSuggestion(message.id)}
                       className="flex-1 px-3 py-2 text-white rounded-lg transition-colors flex items-center justify-center space-x-1 text-sm"
                       style={{
                         background: 'rgba(255, 255, 255, 0.15)',
                         backdropFilter: 'blur(8px) saturate(1.2)',
                         WebkitBackdropFilter: 'blur(8px) saturate(1.2)',
                         border: '1px solid rgba(255, 255, 255, 0.25)'
                       }}
                       title="要求重新生成"
                     >
                       <XCircle className="w-4 h-4" />
                       <span>重新生成</span>
                     </button>
                   </div>
                 )}
              </div>
                      
                      <div className="text-xs text-gray-300 mt-1 opacity-90" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                        {new Date(message.timestamp).toLocaleTimeString()}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 新增：追问消息 - 简化显示，主要内容在AI中介面板 */}
              {message.type === 'followup' && false && (
                <div className="message-bubble text-orange-900 shadow-sm hover:shadow-md transition-all duration-200" style={{
                  background: 'linear-gradient(135deg, rgba(251, 146, 60, 0.08) 0%, rgba(254, 215, 170, 0.06) 100%)',
                  backdropFilter: 'blur(14px) saturate(1.2)',
                  WebkitBackdropFilter: 'blur(14px) saturate(1.2)',
                  border: '1px solid rgba(251, 146, 60, 0.25)',
                  borderRadius: '12px'
                }}>
                  <div className="flex items-start space-x-2">
                    <MessageSquare className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-xs font-semibold text-white mb-1" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                        AI生成的追问
                      </div>
                      {/* [MODIFIED] 单条消息滚动容器 - 移除点击事件 */}
                      <div 
                        className="rounded p-2"
                        style={{
                          background: 'linear-gradient(135deg, rgba(251, 146, 60, 0.06) 0%, rgba(254, 215, 170, 0.05) 100%)',
                          border: '1px solid rgba(251, 146, 60, 0.2)',
                          maxHeight: 'none',
                          overflowY: 'visible',
                          width: '100%',
                          wordWrap: 'break-word',
                          whiteSpace: 'pre-wrap'
                        }}
                      >
                        <p className="whitespace-pre-wrap text-gray-800 dark:text-gray-200 select-text" style={{
                          margin: 0,
                          padding: 0,
                          lineHeight: '1.5',
                          wordBreak: 'break-word',
                          overflowWrap: 'break-word',
                          maxWidth: '100%'
                        }}>{message.text}</p>
                      </div>
                      
                      {/* 追问反馈按钮 */}
              <div className="mt-3">
                {message.feedbackGiven ? (
                  <div className={`text-sm px-3 py-1 rounded ${
                    message.accepted 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                      : 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
                  }`}>
                    {message.accepted ? '✓ 已接受追问' : '↻ 已拒绝，重新生成中...'}
                  </div>
                ) : message.negotiating ? (
                   <NegotiationPanel 
                     messageId={message.id}
                     onSendNegotiation={(id, text) => onSendFollowUpNegotiationRequest(id, text, setInput)}
                     onCancel={onCancelFollowUpNegotiation}
                   />
                 ) : message.negotiated ? (
                   <div className="space-y-2">
                     <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-2">
                       <div className="text-sm text-blue-800 dark:text-blue-200">
                         ✓ 已协商修改 ({message.negotiationHistory?.length || 1} 次)
                         <details className="mt-1">
                           <summary className="cursor-pointer text-xs text-blue-600 hover:text-blue-800">查看协商历史</summary>
                           <div className="mt-2 text-xs text-gray-600 dark:text-gray-400 space-y-2">
                             <div><strong>最初追问:</strong> {message.originalText}</div>
                             {message.negotiationHistory?.map((nego, index) => (
                               <div key={index} className="border-l-2 border-blue-200 pl-2">
                                 <div><strong>第{index + 1}次协商要求:</strong> {nego.negotiationRequest}</div>
                                 <div className="text-xs text-gray-500">{new Date(nego.timestamp).toLocaleString()}</div>
                               </div>
                             ))}
                           </div>
                         </details>
                       </div>
                     </div>
                     {/* 继续提供协商选项 */}
                     <div className="flex space-x-2">
                       <button
                         onClick={() => onAcceptFollowUp && onAcceptFollowUp(message.id, setInput)}
                         className="flex-1 px-3 py-2 text-green-700 rounded-lg transition-colors flex items-center justify-center space-x-1 text-sm"
                         style={{
                           background: 'linear-gradient(135deg, rgba(16,185,129,0.12) 0%, rgba(52,211,153,0.1) 100%)',
                           backdropFilter: 'blur(8px) saturate(1.2)',
                           WebkitBackdropFilter: 'blur(8px) saturate(1.2)',
                           border: '1px solid rgba(16,185,129,0.25)'
                         }}
                         title="接受当前追问"
                       >
                         <Check className="w-4 h-4" />
                         <span>接受追问</span>
                       </button>
                       <button
                         onClick={() => onNegotiateFollowUp && onNegotiateFollowUp(message.id)}
                         className="flex-1 px-3 py-2 text-blue-700 rounded-lg transition-colors flex items-center justify-center space-x-1 text-sm"
                         style={{
                           background: 'linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(147,197,253,0.1) 100%)',
                           backdropFilter: 'blur(8px) saturate(1.2)',
                           WebkitBackdropFilter: 'blur(8px) saturate(1.2)',
                           border: '1px solid rgba(59,130,246,0.25)'
                         }}
                         title="继续协商修改追问"
                       >
                         <MessageCircle className="w-4 h-4" />
                         <span>继续协商</span>
                       </button>
                       <button
                         onClick={() => onRejectFollowUp && onRejectFollowUp(message.id)}
                         className="flex-1 px-3 py-2 text-red-700 rounded-lg transition-colors flex items-center justify-center space-x-1 text-sm"
                         style={{
                           background: 'linear-gradient(135deg, rgba(248,113,113,0.12) 0%, rgba(252,165,165,0.1) 100%)',
                           backdropFilter: 'blur(8px) saturate(1.2)',
                           WebkitBackdropFilter: 'blur(8px) saturate(1.2)',
                           border: '1px solid rgba(248,113,113,0.25)'
                         }}
                         title="重新生成"
                       >
                         <XCircle className="w-4 h-4" />
                         <span>重新生成</span>
                       </button>
                     </div>
                   </div>
                ) : (
                   <div className="flex space-x-2">
                     <button
                       onClick={() => onAcceptFollowUp && onAcceptFollowUp(message.id, setInput)}
                       className="flex-1 px-3 py-2 text-green-700 rounded-lg transition-colors flex items-center justify-center space-x-1 text-sm"
                       style={{
                         background: 'linear-gradient(135deg, rgba(16,185,129,0.12) 0%, rgba(52,211,153,0.1) 100%)',
                         backdropFilter: 'blur(8px) saturate(1.2)',
                         WebkitBackdropFilter: 'blur(8px) saturate(1.2)',
                         border: '1px solid rgba(16,185,129,0.25)'
                       }}
                       title="接受这个追问"
                     >
                       <CheckCircle className="w-4 h-4" />
                       <span>接受追问</span>
                     </button>
                     <button
                       onClick={() => onNegotiateFollowUp && onNegotiateFollowUp(message.id)}
                       className="flex-1 px-3 py-2 text-blue-700 rounded-lg transition-colors flex items-center justify-center space-x-1 text-sm"
                       style={{
                         background: 'linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(147,197,253,0.1) 100%)',
                         backdropFilter: 'blur(8px) saturate(1.2)',
                         WebkitBackdropFilter: 'blur(8px) saturate(1.2)',
                         border: '1px solid rgba(59,130,246,0.25)'
                       }}
                       title="与AI协商修改追问"
                     >
                       <MessageCircle className="w-4 h-4" />
                       <span>协商</span>
                     </button>
                     <button
                       onClick={() => onRejectFollowUp && onRejectFollowUp(message.id)}
                       className="flex-1 px-3 py-2 text-red-700 rounded-lg transition-colors flex items-center justify-center space-x-1 text-sm"
                       style={{
                         background: 'linear-gradient(135deg, rgba(248,113,113,0.12) 0%, rgba(252,165,165,0.1) 100%)',
                         backdropFilter: 'blur(8px) saturate(1.2)',
                         WebkitBackdropFilter: 'blur(8px) saturate(1.2)',
                         border: '1px solid rgba(248,113,113,0.25)'
                       }}
                       title="要求重新生成"
                     >
                       <XCircle className="w-4 h-4" />
                       <span>重新生成</span>
                     </button>
                   </div>
                 )}
              </div>
                      
                      <div className="text-xs text-gray-300 mt-1 opacity-90" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                        {new Date(message.timestamp).toLocaleTimeString()}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 新增：智能追问消息 - 简化显示，主要内容在AI中介面板 */}
              {message.type === 'intelligent_followup' && false && (
                <div className="message-bubble text-indigo-900 shadow-sm hover:shadow-md transition-all duration-200" style={{
                  background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(165, 180, 252, 0.06) 100%)',
                  backdropFilter: 'blur(14px) saturate(1.2)',
                  WebkitBackdropFilter: 'blur(14px) saturate(1.2)',
                  border: '1px solid rgba(99, 102, 241, 0.25)',
                  borderRadius: '12px'
                }}>
                  <div className="flex items-start space-x-2">
                    <MessageSquare className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-xs font-semibold text-white mb-1" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                        智能分析生成的追问
                      </div>
                      {/* 显示选中的信息点 */}
                      {message.selectedInfo && message.selectedInfo.length > 0 && (
                        <div className="mb-2 p-2 rounded text-xs" style={{
                          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.12) 0%, rgba(165, 180, 252, 0.08) 100%)',
                          backdropFilter: 'blur(10px) saturate(1.2)',
                          WebkitBackdropFilter: 'blur(10px) saturate(1.2)',
                          border: '1px solid rgba(165, 180, 252, 0.25)',
                          borderRadius: '8px'
                        }}>
                          <strong>基于信息点：</strong>
                          {message.selectedInfo.map(info => info.name).join('、')}
                        </div>
                      )}
                      {/* 智能追问内容显示容器 */}
                      <div 
                        className="rounded p-2"
                        style={{
                          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.06) 0%, rgba(165, 180, 252, 0.05) 100%)',
                          border: '1px solid rgba(99, 102, 241, 0.2)',
                          maxHeight: 'none',
                          overflowY: 'visible',
                          width: '100%',
                          wordWrap: 'break-word',
                          whiteSpace: 'pre-wrap'
                        }}
                      >
                        <p className="whitespace-pre-wrap text-gray-800 dark:text-gray-200 select-text" style={{
                          margin: 0,
                          padding: 0,
                          lineHeight: '1.5',
                          wordBreak: 'break-word',
                          overflowWrap: 'break-word',
                          maxWidth: '100%'
                        }}>{message.text}</p>
                      </div>
                      
                      {/* 智能追问反馈按钮 */}
              <div className="mt-3">
                {message.feedbackGiven ? (
                  <div className={`text-sm px-3 py-1 rounded ${
                    message.accepted 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                      : 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
                  }`}>
                    {message.accepted ? '✓ 已接受智能追问' : '↻ 已拒绝，回到信息选择...'}
                  </div>
                ) : message.negotiating ? (
                   <NegotiationPanel 
                     messageId={message.id}
                     onSendNegotiation={(id, text) => onSendIntelligentFollowUpNegotiationRequest(id, text, setInput)}
                     onCancel={onCancelIntelligentFollowUpNegotiation}
                   />
                 ) : message.negotiated ? (
                   <div className="space-y-2">
                     <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-2">
                       <div className="text-sm text-blue-800 dark:text-blue-200">
                         ✓ 已协商修改 ({message.negotiationHistory?.length || 1} 次)
                         <details className="mt-1">
                           <summary className="cursor-pointer text-xs text-blue-600 hover:text-blue-800">查看协商历史</summary>
                           <div className="mt-2 text-xs text-gray-600 dark:text-gray-400 space-y-2">
                             <div><strong>最初智能追问:</strong> {message.originalText}</div>
                             {message.negotiationHistory?.map((nego, index) => (
                               <div key={index} className="border-l-2 border-blue-200 pl-2">
                                 <div><strong>第{index + 1}次协商要求:</strong> {nego.negotiationRequest}</div>
                                 <div className="text-xs text-gray-500">{new Date(nego.timestamp).toLocaleString()}</div>
                               </div>
                             ))}
                           </div>
                         </details>
                       </div>
                     </div>
                     {/* 继续提供协商选项 */}
                     <div className="flex space-x-2">
                       <button
                         onClick={() => onAcceptIntelligentFollowUp && onAcceptIntelligentFollowUp(message.id, setInput)}
                         className="flex-1 px-3 py-2 text-green-700 rounded-lg transition-colors flex items-center justify-center space-x-1 text-sm"
                         style={{
                           background: 'linear-gradient(135deg, rgba(16,185,129,0.12) 0%, rgba(52,211,153,0.1) 100%)',
                           backdropFilter: 'blur(8px) saturate(1.2)',
                           WebkitBackdropFilter: 'blur(8px) saturate(1.2)',
                           border: '1px solid rgba(16,185,129,0.25)'
                         }}
                         title="接受当前智能追问"
                       >
                         <Check className="w-4 h-4" />
                         <span>接受追问</span>
                       </button>
                       <button
                         onClick={() => onNegotiateIntelligentFollowUp && onNegotiateIntelligentFollowUp(message.id)}
                         className="flex-1 px-3 py-2 text-blue-700 rounded-lg transition-colors flex items-center justify-center space-x-1 text-sm"
                         style={{
                           background: 'linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(147,197,253,0.1) 100%)',
                           backdropFilter: 'blur(8px) saturate(1.2)',
                           WebkitBackdropFilter: 'blur(8px) saturate(1.2)',
                           border: '1px solid rgba(59,130,246,0.25)'
                         }}
                         title="继续协商修改智能追问"
                       >
                         <MessageCircle className="w-4 h-4" />
                         <span>继续协商</span>
                       </button>
                       <button
                         onClick={() => onRejectIntelligentFollowUp && onRejectIntelligentFollowUp(message.id)}
                         className="flex-1 px-3 py-2 text-red-700 rounded-lg transition-colors flex items-center justify-center space-x-1 text-sm"
                         style={{
                           background: 'linear-gradient(135deg, rgba(248,113,113,0.12) 0%, rgba(252,165,165,0.1) 100%)',
                           backdropFilter: 'blur(8px) saturate(1.2)',
                           WebkitBackdropFilter: 'blur(8px) saturate(1.2)',
                           border: '1px solid rgba(248,113,113,0.25)'
                         }}
                         title="拒绝并重新选择信息"
                       >
                         <XCircle className="w-4 h-4" />
                         <span>重新选择</span>
                       </button>
                     </div>
                   </div>
                ) : (
                   <div className="flex space-x-2">
                     <button
                       onClick={() => onAcceptIntelligentFollowUp && onAcceptIntelligentFollowUp(message.id, setInput)}
                       className="flex-1 px-3 py-2 text-green-700 rounded-lg transition-colors flex items-center justify-center space-x-1 text-sm"
                       style={{
                         background: 'linear-gradient(135deg, rgba(16,185,129,0.12) 0%, rgba(52,211,153,0.1) 100%)',
                         backdropFilter: 'blur(8px) saturate(1.2)',
                         WebkitBackdropFilter: 'blur(8px) saturate(1.2)',
                         border: '1px solid rgba(16,185,129,0.25)'
                       }}
                       title="接受这个智能追问"
                     >
                       <CheckCircle className="w-4 h-4" />
                       <span>接受追问</span>
                     </button>
                     <button
                       onClick={() => onNegotiateIntelligentFollowUp && onNegotiateIntelligentFollowUp(message.id)}
                       className="flex-1 px-3 py-2 text-blue-700 rounded-lg transition-colors flex items-center justify-center space-x-1 text-sm"
                       style={{
                         background: 'linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(147,197,253,0.1) 100%)',
                         backdropFilter: 'blur(8px) saturate(1.2)',
                         WebkitBackdropFilter: 'blur(8px) saturate(1.2)',
                         border: '1px solid rgba(59,130,246,0.25)'
                       }}
                       title="与AI协商修改智能追问"
                     >
                       <MessageCircle className="w-4 h-4" />
                       <span>协商</span>
                     </button>
                     <button
                       onClick={() => onRejectIntelligentFollowUp && onRejectIntelligentFollowUp(message.id)}
                       className="flex-1 px-3 py-2 text-red-700 rounded-lg transition-colors flex items-center justify-center space-x-1 text-sm"
                       style={{
                         background: 'linear-gradient(135deg, rgba(248,113,113,0.12) 0%, rgba(252,165,165,0.1) 100%)',
                         backdropFilter: 'blur(8px) saturate(1.2)',
                         WebkitBackdropFilter: 'blur(8px) saturate(1.2)',
                         border: '1px solid rgba(248,113,113,0.25)'
                       }}
                       title="拒绝并重新选择信息点"
                     >
                       <XCircle className="w-4 h-4" />
                       <span>重新选择</span>
                     </button>
                   </div>
                 )}
              </div>
                      
                      <div className="text-xs text-gray-300 mt-1 opacity-90" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                        {new Date(message.timestamp).toLocaleTimeString()}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* AI生成内容不再在此显示，所有AI处理都集中在中央LLM面板 */}

              {/* 新增：部门联络指令消息 - 简化显示，主要内容在AI中介面板 */}
              {message.type === 'department_contact' && false && (
                <div className="message-bubble text-green-900 shadow-sm hover:shadow-md transition-all duration-200" style={{
                  background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(16, 185, 129, 0.06) 100%)',
                  backdropFilter: 'blur(14px) saturate(1.2)',
                  WebkitBackdropFilter: 'blur(14px) saturate(1.2)',
                  border: '1px solid rgba(34, 197, 94, 0.25)',
                  borderRadius: '12px'
                }}>
                  <div className="flex items-start space-x-2">
                    <Users className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-xs font-semibold text-white mb-2" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                        部门联络指令已生成
                      </div>
                      
                      {/* 客户回复显示 */}
                      <div className="mb-3">
                        <div className="text-xs font-medium text-green-800 dark:text-green-200 mb-1 flex items-center space-x-1">
                          <MessageSquare className="w-3 h-3" />
                          <span>给客户的回复</span>
                        </div>
                        <div 
                          className="rounded p-3"
                          style={{
                            background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.06) 0%, rgba(16, 185, 129, 0.05) 100%)',
                            border: '1px solid rgba(34, 197, 94, 0.2)',
                            wordWrap: 'break-word',
                            whiteSpace: 'pre-wrap'
                          }}
                        >
                          <p className="whitespace-pre-wrap text-gray-800 dark:text-gray-200 select-text text-sm" style={{
                            margin: 0,
                            padding: 0,
                            lineHeight: '1.5',
                            wordBreak: 'break-word',
                            overflowWrap: 'break-word'
                          }}>{message.customerReply}</p>
                        </div>
                        
                        {/* 客户回复应用状态/按钮 - 直接放在客户回复下方 */}
                        <div className="mt-2">
                          {message.customerReplyApplied ? (
                            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-2">
                              <div className="text-sm text-blue-800 dark:text-blue-200 flex items-center space-x-2">
                                <CheckCircle className="w-4 h-4" />
                                <span>✓ 客户回复已应用到输入框</span>
                              </div>
                              <div className="text-xs text-blue-600 dark:text-blue-300 mt-1">
                                应用时间: {new Date(message.appliedTimestamp).toLocaleString()}
                              </div>
                            </div>
                          ) : (
                            <button
                              onClick={(e) => {
                                console.log('🔘 应用客户回复按钮被点击', {
                                  customerReply: message.customerReply,
                                  customerReplyLength: message.customerReply?.length,
                                  messageId: message.id,
                                  event: e
                                })
                                if (message.customerReply) {
                                  console.log('🎯 准备设置输入框内容:', message.customerReply)
                                  console.log('🎯 当前输入框内容:', input)
                                  
                                  // 立即设置输入框内容
                                  setInput(message.customerReply)
                                  
                                  // 延迟验证状态是否正确更新
                                  setTimeout(() => {
                                    console.log('🔍 验证设置后的输入框内容:', input)
                                  }, 100)
                                  
                                  // 标记为已应用
                                  onMarkCustomerReplyApplied && onMarkCustomerReplyApplied(message.id)
                                  // 设置直发候选，走与“接受追问”一致的确认机制
                                  onPrepareDirectSendCandidate && onPrepareDirectSendCandidate({
                                    type: 'customer_reply',
                                    sourceMessageId: message.id,
                                    sourceText: message.customerReply
                                  })
                                  console.log('✅ 设置输入框内容并标记为已应用:', message.customerReply)
                                } else {
                                  console.error('❌ customerReply为空或未定义')
                                }
                              }}
                              className="w-full px-3 py-2 text-white rounded-lg transition-colors flex items-center justify-center space-x-1 text-sm"
                              style={{
                                background: 'rgba(255, 255, 255, 0.15)',
                                backdropFilter: 'blur(8px) saturate(1.2)',
                                WebkitBackdropFilter: 'blur(8px) saturate(1.2)',
                                border: '1px solid rgba(255, 255, 255, 0.25)'
                              }}
                              title="将客户回复应用到输入框"
                            >
                              <ArrowRight className="w-4 h-4" />
                              <span>应用客户回复</span>
                            </button>
                          )}
                        </div>
                      </div>
                      
                      {/* 联络指令显示 */}
                      <div className="mb-3">
                        <div className="text-xs font-medium text-green-800 dark:text-green-200 mb-1 flex items-center space-x-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>内部联络指令</span>
                        </div>
                        <div 
                          className="rounded p-3"
                          style={{
                            background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.08) 0%, rgba(255, 167, 38, 0.06) 100%)',
                            border: '1px solid rgba(255, 193, 7, 0.3)',
                            wordWrap: 'break-word',
                            whiteSpace: 'pre-wrap'
                          }}
                        >
                          <p className="whitespace-pre-wrap text-gray-800 dark:text-gray-200 select-text text-sm font-medium" style={{
                            margin: 0,
                            padding: 0,
                            lineHeight: '1.5',
                            wordBreak: 'break-word',
                            overflowWrap: 'break-word'
                          }}>{message.contactInstruction}</p>
                        </div>
                      </div>
                      
                      {/* 联络指令发送状态/按钮 */}
                      <div className="mt-2">
                        {message.instructionSent ? (
                          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-2">
                            <div className="text-sm text-green-800 dark:text-green-200 flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4" />
                              <span>✓ 联络指令已发送给相关部门</span>
                            </div>
                            <div className="text-xs text-green-600 dark:text-green-300 mt-1">
                              发送时间: {new Date(message.sentTimestamp).toLocaleString()}
                            </div>
                          </div>
                        ) : (
                          <button
                            onClick={() => onMarkContactInstructionSent && onMarkContactInstructionSent(message.id)}
                            className="w-full px-3 py-2 text-white rounded-lg transition-colors flex items-center justify-center space-x-1 text-sm"
                            style={{
                              background: 'rgba(255, 255, 255, 0.15)',
                              backdropFilter: 'blur(8px) saturate(1.2)',
                              WebkitBackdropFilter: 'blur(8px) saturate(1.2)',
                              border: '1px solid rgba(255, 255, 255, 0.25)'
                            }}
                            title="发送联络指令到对应部门"
                          >
                            <Users className="w-4 h-4" />
                            <span>发送指令到对应部门</span>
                          </button>
                        )}
                      </div>
                      
                      <div className="text-xs text-gray-300 mt-2 opacity-90" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                        {new Date(message.timestamp).toLocaleTimeString()}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </AnimatedTransition>
        ))}
        
        {/* 迭代处理状态现在显示在中央LLM面板，此处不再显示 */}
        
        {/* 显示常规处理状态 */}
        {/* 处理状态现在显示在中央LLM面板，此处不再显示 */}
        
        <div ref={messagesEndRef} />
      </div>

      {/* 缺失信息勾选面板 - 已迁移到AI中介面板，此处隐藏 */}
      {showMissingInfoPanel && false && (
        <AnimatedTransition type="slide-up" show={true}>
          <div className="p-4 border-t border-gray-200/50 dark:border-gray-700/50" style={{
            background: 'linear-gradient(135deg, rgba(251, 146, 60, 0.08) 0%, rgba(251, 191, 36, 0.06) 100%)',
            backdropFilter: 'blur(20px) saturate(1.3)',
            WebkitBackdropFilter: 'blur(20px) saturate(1.3)',
            border: '1px solid rgba(251, 146, 60, 0.2)',
            borderRadius: '12px'
          }}>
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-orange-800 dark:text-orange-200">
                <AlertCircle className="w-5 h-5" />
                <span className="text-sm font-semibold">选择希望了解的信息</span>
              </div>
              
              <p className="text-xs text-orange-700 dark:text-orange-300">
                AI分析发现可以了解以下信息以提供更精准的服务，请选择您希望询问的信息点：
              </p>
              
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {missingInfoOptions.map((option, index) => (
                  <div 
                    key={index}
                    className={`p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                      option.selected 
                        ? 'border-orange-300 bg-orange-100 dark:bg-orange-900/30' 
                        : 'border-gray-200 bg-white dark:bg-gray-800 hover:border-orange-200'
                    }`}
                    onClick={() => onToggleMissingInfoOption(index)}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`mt-1 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        option.selected 
                          ? 'border-orange-500 bg-orange-500' 
                          : 'border-gray-300'
                      }`}>
                        {option.selected && (
                          <Check className="w-3 h-3 text-white" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 dark:text-gray-100">
                          {option.name}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                          {option.description}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex space-x-2">
                <button
                  onClick={onGenerateFollowUpBySelectedInfo}
                  disabled={iterationProcessing || !missingInfoOptions.some(opt => opt.selected)}
                  className="flex-1 btn-primary p-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2"
                  title="直接生成追问"
                >
                  {iterationProcessing ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>生成中...</span>
                    </>
                  ) : (
                    <>
                      <ArrowRight className="w-4 h-4" />
                      <span>直接生成追问 ({missingInfoOptions.filter(opt => opt.selected).length})</span>
                    </>
                  )}
                </button>
                
                <button
                  onClick={onSkipInfoCollection}
                  disabled={iterationProcessing}
                  className="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                  title="跳过，直接回复"
                >
                  <span>跳过</span>
                </button>
              </div>
              
              <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
                选择信息点后，AI将生成自然流畅的追问供您使用
              </div>
            </div>
          </div>
        </AnimatedTransition>
      )}

      {/* 迭代模式下的操作按钮 */}
      {iterationMode && (
        <AnimatedTransition type="slide-up" show={true}>
          <div className="p-4 border-t border-gray-200/50 dark:border-gray-700/50" style={{
            background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.08) 0%, rgba(254, 240, 138, 0.06) 100%)',
            backdropFilter: 'blur(20px) saturate(1.3)',
            WebkitBackdropFilter: 'blur(20px) saturate(1.3)',
            border: '1px solid rgba(251, 191, 36, 0.2)',
            borderRadius: '12px'
          }}>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-yellow-800 dark:text-yellow-200">
                <Lightbulb className="w-4 h-4" />
                <span className="text-sm font-medium">编辑最终回复内容</span>
              </div>
              
              <textarea
                value={finalResponse}
                onChange={(e) => setFinalResponse(e.target.value)}
                placeholder="编辑最终回复内容..."
                className="input-field resize-none transition-all duration-200 focus:shadow-md"
                rows={4}
                readOnly={isProcessing}
              />
              
              <div className="flex space-x-2">
                <button
                  onClick={handleConfirmSend}
                  disabled={!finalResponse.trim() || isProcessing}
                  className="flex-1 btn-primary p-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2"
                  title="确认发送给客户"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>确认发送</span>
                </button>
                
                <button
                  onClick={onCancelIteration}
                  disabled={isProcessing}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                  title="取消迭代"
                >
                  <XCircle className="w-4 h-4" />
                  <span>取消</span>
                </button>
              </div>
            </div>
          </div>
        </AnimatedTransition>
      )}

      {/* 常规输入区域 */}
      {!iterationMode && (
        <div className="p-4 border-t border-white/20 dark:border-white/10 glass-effect rounded-b-2xl">
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="flex space-x-3">
              <div className="flex-1">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={`作为${scenario.solutionRole}，请提供您的专业建议...`}
                  className="input-field resize-none transition-all duration-200 focus:shadow-md"
                  rows={3}
                  readOnly={isProcessing || iterationProcessing}
                />
              </div>
              
              <div className="flex flex-col justify-end space-y-2">
                <button
                  type="button"
                  onClick={handleDirectSend}
                  disabled={!input.trim() || isProcessing || iterationProcessing}
                  className="w-full px-4 py-3 text-white rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 text-sm font-medium hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  title="直接发送至问题端（不经AI转译）"
                  style={{
                    background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(16, 185, 129, 0.15) 100%)',
                    backdropFilter: 'blur(10px) saturate(1.3)',
                    WebkitBackdropFilter: 'blur(10px) saturate(1.3)',
                    border: '1px solid rgba(34, 197, 94, 0.3)',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                  }}
                >
                  <ArrowRight className="w-4 h-4" />
                  <span>直接发送</span>
                </button>
                <button
                  type="submit"
                  disabled={!input.trim() || isProcessing || iterationProcessing}
                  className="btn-primary p-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none transition-all duration-200 hover:scale-105"
                  title="AI转译后发送"
                >
                  <span className="text-sm">AI转译发送</span>
                </button>
              </div>
            </div>

            {/* 方案端：AI转译中的提示 */}
            {isProcessing && (
              <div className="message-bubble message-ai">
                <div className="flex items-center space-x-2">
                  <Bot className="w-4 h-4 text-gray-600" />
                  <TypingLoader message="AI正在转译" />
                </div>
              </div>
            )}

            {/* 直发对比确认条 - 已取消需求，不再显示 */}
            {false && directSendCandidate && (
              <div className="p-3 rounded-xl border border-orange-300/40 bg-orange-50/60 dark:bg-orange-900/20"></div>
            )}
            
            {/* AI功能提示已取消 */}
            
            {/* Footer 辅助信息已移除 */}
          </form>
        </div>
      )}
    </>
  )
}

export default SolutionPanel