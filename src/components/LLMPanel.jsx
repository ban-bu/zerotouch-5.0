import React, { useRef, useEffect, useState, useCallback } from 'react'
import { Bot, Sparkles, Lightbulb, Zap, Layers, Filter, ArrowRight, MessageSquare, CheckCircle, XCircle, AlertCircle, MessageCircle, Send, Users, Check } from 'lucide-react'
import { LLMProcessingLoader, TypingLoader } from './LoadingStates'
import AnimatedTransition from './AnimatedTransition'

const LLMPanel = ({ 
  processing, 
  messages, 
  onGenerateSuggestion,
  onGenerateFollowUp,
  onGenerateIntelligentFollowUp,
  onGenerateNeedsAnalysis,
  onGenerateDepartmentContact,
  onGenerateDepartmentContactOnly,
  onChatWithAI,
  onAcceptSuggestion,
  onNegotiateSuggestion,
  onRejectSuggestion,
  onAcceptFollowUp,
  onNegotiateFollowUp,
  onRejectFollowUp,
  onSendToSolution,
  onSendToProblem,
  onSetSolutionInput,
  onCancelIteration,
  currentScenario,
  // 新增协商相关功能
  onCancelNegotiation,
  onSendNegotiationRequest,
  onCancelFollowUpNegotiation,
  onSendFollowUpNegotiationRequest,
  // 新增：直发候选准备（用于应用客户回复走确认机制）
  onPrepareDirectSendCandidate,
  // 新增：缺失信息选择与基于选择生成追问，迁移到中间面板
  missingInfoOptions = [],
  showMissingInfoPanel = false,
  onToggleMissingInfoOption,
  onGenerateFollowUpBySelectedInfo,
  onSkipInfoCollection
}) => {
  const messagesEndRef = useRef(null)
  const [currentMode, setCurrentMode] = useState('analysis') // 'analysis', 'suggestion', 'followup', 'response'
  const [messageStates, setMessageStates] = useState({}) // 跟踪每个消息的状态

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  // 关闭自动滚动：生成内容后保持视图位置不变
  useEffect(() => {
    // no-op to prevent auto scroll on messages update
  }, [messages])



  // 协商面板组件
  const NegotiationPanel = ({ messageId, messageType, onSendNegotiation, onCancel }) => {
    const [negotiationText, setNegotiationText] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSendNegotiation = async () => {
      if (!negotiationText.trim() || isSubmitting) return
      
      console.log('🔄 发送协商请求:', { messageId, negotiationText, messageType })
      setIsSubmitting(true)
      try {
        await onSendNegotiation(messageId, negotiationText)
        setNegotiationText('')
        console.log('✅ 协商请求发送成功')
      } catch (error) {
        console.error('❌ 发送协商请求失败:', error)
      } finally {
        setIsSubmitting(false)
      }
    }

    return (
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3 mt-3">
        <div className="flex items-center space-x-2 mb-2">
          <MessageCircle className="w-4 h-4 text-blue-600" />
          <span className="text-sm font-medium text-blue-800 dark:text-blue-200">协商模式</span>
        </div>
        <div className="space-y-2">
          <textarea
            value={negotiationText}
            onChange={(e) => setNegotiationText(e.target.value)}
            placeholder={`请描述您希望如何修改这个${messageType === 'suggestion' ? '建议' : '追问'}...`}
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

  // AI控制面板组件
  const AIControlPanel = () => {
    const [showControls, setShowControls] = useState(false)
    const [aiInput, setAiInput] = useState('')
    const [aiChatProcessing, setAiChatProcessing] = useState(false)
    const aiInputRef = useRef(null)

    // 当AI控制台展开时，聚焦到输入框
    useEffect(() => {
      if (showControls && aiInputRef.current) {
        setTimeout(() => {
          aiInputRef.current.focus()
        }, 150)
      }
    }, [showControls])

    const handleGenerateAction = (actionType) => {
      setCurrentMode(actionType)
      switch(actionType) {
        case 'suggestion':
          onGenerateSuggestion && onGenerateSuggestion()
          break
        case 'followup':
          onGenerateFollowUp && onGenerateFollowUp()
          break
        case 'intelligent_followup':
          onGenerateIntelligentFollowUp && onGenerateIntelligentFollowUp()
          break
        case 'needs_analysis':
          onGenerateNeedsAnalysis && onGenerateNeedsAnalysis()
          break
        case 'department':
          // 部门联络需要基于最近的建议或对话内容
          const recentContent = messages.find(msg => msg.title.includes('建议'))?.output || 
                               messages.slice(-1)[0]?.output || 
                               '基于当前对话生成联络指令'
          onGenerateDepartmentContactOnly && onGenerateDepartmentContactOnly(recentContent)
          break
        default:
          break
      }
    }

    const handleChatWithAI = useCallback(async () => {
      if (aiInput.trim() && onChatWithAI) {
        setAiChatProcessing(true)
        try {
          await onChatWithAI(aiInput.trim())
          setAiInput('')
        } catch (error) {
          console.error('AI对话出错:', error)
        } finally {
          setAiChatProcessing(false)
        }
      }
    }, [aiInput, onChatWithAI])

    return (
      <div className="space-y-4">
        {/* AI功能选择区域 - 2x2 排列 */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => handleGenerateAction('suggestion')}
            disabled={processing}
            className="p-3 rounded-xl bg-gradient-to-r from-purple-500/20 to-indigo-500/20 hover:from-purple-500/30 hover:to-indigo-500/30 border border-purple-500/30 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="flex items-center space-x-2">
              <Lightbulb className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium text-purple-700 dark:text-purple-300">生成建议</span>
            </div>
          </button>

          <button
            onClick={() => handleGenerateAction('intelligent_followup')}
            disabled={processing}
            className="p-3 rounded-xl bg-gradient-to-r from-orange-500/20 to-red-500/20 hover:from-orange-500/30 hover:to-red-500/30 border border-orange-500/30 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="flex items-center space-x-2">
              <MessageSquare className="w-5 h-5 text-orange-600" />
              <span className="text-sm font-medium text-orange-700 dark:text-orange-300">智能追问</span>
            </div>
          </button>

          <button
            onClick={() => handleGenerateAction('department')}
            disabled={processing}
            className="p-3 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 hover:from-green-500/30 hover:to-emerald-500/30 border border-green-500/30 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-green-700 dark:text-green-300">部门联络</span>
            </div>
          </button>

          {false && (
            <button
              onClick={() => handleGenerateAction('needs_analysis')}
              disabled={processing}
              className="p-3 rounded-xl bg-gradient-to-r from-teal-500/20 to-cyan-500/20 hover:from-teal-500/30 hover:to-cyan-500/30 border border-teal-500/30 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-teal-600" />
                <span className="text-sm font-medium text-teal-700 dark:text-teal-300">需求分析</span>
              </div>
            </button>
          )}

          <button
            onClick={() => setShowControls(!showControls)}
            className="p-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30 border border-blue-500/30 transition-all duration-200 hover:scale-105"
          >
            <div className="flex items-center space-x-2">
              <Bot className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">询问AI</span>
            </div>
          </button>
        </div>

        {/* 展开的AI控制台 */}
        {showControls && (
          <div key="ai-controls-panel" className="p-4 rounded-xl bg-gradient-to-r from-gray-50/80 to-slate-100/80 dark:from-gray-800/80 dark:to-slate-800/80 border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 ease-in-out">
            <div className="space-y-3">
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center space-x-2">
                <Bot className="w-4 h-4" />
                <span>与AI对话询问</span>
              </div>
              
              <div key="ai-input-container" className="relative">
                <textarea
                  ref={aiInputRef}
                  value={aiInput}
                  onChange={(e) => setAiInput(e.target.value)}
                  placeholder="在此输入您想询问AI的问题..."
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                  style={{ minHeight: '80px' }}
                />
              </div>
              
              <div className="flex space-x-2">
                <button
                  onClick={handleChatWithAI}
                  disabled={!aiInput.trim() || aiChatProcessing}
                  className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {aiChatProcessing ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>正在询问...</span>
                    </>
                  ) : (
                    <>
                      <MessageCircle className="w-4 h-4" />
                      <span>询问AI</span>
                    </>
                  )}
                </button>
                
                <button
                  onClick={() => setAiInput('')}
                  className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors"
                >
                  清空
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  const getProcessingIcon = (title) => {
    if (title.includes('问题端')) {
      return <Layers className="w-4 h-4 text-blue-600" />
    } else if (title.includes('方案端')) {
      return <Zap className="w-4 h-4 text-green-600" />
    } else if (title.includes('建议')) {
      return <Lightbulb className="w-4 h-4 text-purple-600" />
    } else if (title.includes('追问')) {
      return <Filter className="w-4 h-4 text-orange-600" />
    } else if (title.includes('需求分析')) {
      return <Zap className="w-4 h-4 text-teal-600" />
    } else if (title.includes('部门联络') || title.includes('联络指令') || title.includes('客户回复和部门联络') || title.includes('生成部门联络')) {
      return <Users className="w-4 h-4 text-green-600" />
    } else if (title.includes('AI对话')) {
      return <MessageCircle className="w-4 h-4 text-blue-600" />
    } else if (title.includes('最终')) {
      return <ArrowRight className="w-4 h-4 text-indigo-600" />
    }
    return <Bot className="w-4 h-4 text-gray-600" />
  }

  const getProcessingStatus = (title) => {
    if (title.includes('问题端')) {
      return '正在分析客户需求...'
    } else if (title.includes('方案端')) {
      return '正在优化企业回复...'
    } else if (title.includes('建议')) {
      return '正在生成专业建议...'
    } else if (title.includes('追问')) {
      return '正在生成追问问题...'
    } else if (title.includes('需求分析')) {
      return '正在分析用户需求...'
    } else if (title.includes('部门联络') || title.includes('联络指令') || title.includes('客户回复和部门联络') || title.includes('生成部门联络')) {
      return '正在生成联络指令...'
    } else if (title.includes('AI对话')) {
      return '正在与AI对话中...'
    } else if (title.includes('最终')) {
      return '正在处理最终回复...'
    }
    return '正在处理...'
  }

  return (
    <>
      {/* Header */}
      <div className="p-4 border-b border-white/20 dark:border-white/10 glass-effect rounded-t-2xl" style={{background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.15) 0%, rgba(99, 102, 241, 0.12) 100%)', backdropFilter: 'blur(20px) saturate(1.3)'}}>
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-br from-purple-500/90 to-indigo-600/90 rounded-2xl backdrop-blur-sm">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">AI 中介处理</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">智能分析和方案生成</p>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto space-y-4 mb-4 p-4">
        {messages.length === 0 && !processing && (
          <div className="flex flex-col items-center justify-center h-full text-center text-gray-500 dark:text-gray-400 space-y-6">
            <AnimatedTransition type="fade" show={true}>
              <div className="p-6 rounded-full shadow-inner div-with-background">
                <Sparkles className="w-12 h-12 text-purple-600 dark:text-purple-400" />
              </div>
            </AnimatedTransition>
            <div className="space-y-2">
              <p className="text-xl font-semibold">AI 中介处理中心</p>
              <p className="text-sm text-gray-400">所有AI智能功能的统一控制台</p>
            </div>
            
            {/* AI功能控制面板 */}
            <div className="w-full max-w-md">
              <AIControlPanel />
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-6 max-w-lg">
              <AnimatedTransition type="slide-up" show={true} delay={100}>
                <div className="p-4 div-with-background rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 flex flex-col items-center text-sm">
                  <Lightbulb className="w-6 h-6 mb-2 text-amber-500" />
                  <span className="text-gray-800 dark:text-gray-200">智能建议</span>
                </div>
              </AnimatedTransition>
              <AnimatedTransition type="slide-up" show={true} delay={200}>
                <div className="p-4 div-with-background rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 flex flex-col items-center text-sm">
                  <MessageSquare className="w-6 h-6 mb-2 text-orange-500" />
                  <span className="text-gray-800 dark:text-gray-200">智能追问</span>
                </div>
              </AnimatedTransition>
              <AnimatedTransition type="slide-up" show={true} delay={300}>
                <div className="p-4 div-with-background rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 flex flex-col items-center text-sm">
                  <Users className="w-6 h-6 mb-2 text-green-500" />
                  <span className="text-gray-800 dark:text-gray-200">部门联络</span>
                </div>
              </AnimatedTransition>
            </div>
          </div>
        )}
        
        {/* 处理中状态或有消息时显示 */}
        {(messages.length > 0 || processing) && (
          <div className="space-y-4">
            {/* AI控制面板 - 始终显示 */}
            <AnimatedTransition type="fade" show={true}>
              <div className="p-4 glass-effect div-with-background rounded-xl">
                <AIControlPanel />
              </div>
            </AnimatedTransition>

            {/* 处理状态显示 */}
          <AnimatedTransition type="fade" show={true}>
              <div className="p-4 glass-effect div-with-background rounded-xl">
              <div className="flex items-center space-x-3">
                <Bot className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    {processing ? (
                      <>
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                        <span className="text-sm text-purple-700 dark:text-purple-300">AI正在处理中...</span>
                      </>
                    ) : (
                      <>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-purple-700 dark:text-purple-300">AI待命中</span>
                      </>
                    )}
                  </div>
                  {messages.length > 0 && (
                    <div className="text-xs text-purple-600 dark:text-purple-400 mt-1">
                      已处理 {messages.length} 个请求
                    </div>
                  )}
                </div>
              </div>
            </div>
          </AnimatedTransition>

            {/* 缺失信息勾选与生成追问 - 暂时隐藏 */}
            {false && showMissingInfoPanel && (
              <AnimatedTransition type="slide-up" show={true}>
                <div className="p-4 glass-effect div-with-background rounded-xl border border-orange-200/40">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-orange-800 dark:text-orange-200">
                      <AlertCircle className="w-5 h-5" />
                      <span className="text-sm font-semibold">选择希望获得的信息</span>
                    </div>
                    <p className="text-xs text-orange-700 dark:text-orange-300">
                      AI分析建议以下信息点可提升沟通效率，请勾选需要补充了解的内容：
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
                          onClick={() => onToggleMissingInfoOption && onToggleMissingInfoOption(index)}
                        >
                          <div className="flex items-start space-x-3">
                            <div className={`mt-1 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                              option.selected ? 'border-orange-500 bg-orange-500' : 'border-gray-300'
                            }`}>
                              {option.selected && <Check className="w-3 h-3 text-white" />}
                            </div>
                            <div className="flex-1">
                              <div className="font-medium text-gray-900 dark:text-gray-100">{option.name}</div>
                              <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">{option.description}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={onGenerateFollowUpBySelectedInfo}
                        disabled={processing || !missingInfoOptions.some(opt => opt.selected)}
                        className="flex-1 btn-primary p-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2"
                        title="直接生成追问"
                      >
                        {processing ? (
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
                        disabled={processing}
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

            {/* 消息历史显示 */}
            <div className="space-y-3">
              {[...messages].reverse().map((message, reverseIndex) => {
                const index = messages.length - 1 - reverseIndex; // 计算原始索引
                return (
                <AnimatedTransition key={`${index}-${message.timestamp}`} type="slide-up" show={true}>
                  <div className="p-4 glass-effect div-with-background rounded-xl">
                    <div className="flex items-start space-x-3">
                      {getProcessingIcon(message.title)}
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">
                          {message.title}
                        </div>
                        {/* 不再显示steps和通用的AI生成内容，只保留具体类型的气泡框显示 */}
                        
                        {/* 如果是建议类型，显示建议内容和操作按钮 */}
                        {message.title.includes('建议') && message.output && (
                          <div className="mt-3">
                            {/* 建议内容显示 */}
                            <div className="p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 mb-3">
                              <div className="text-sm text-purple-800 dark:text-purple-200">
                                {messageStates[`${index}_suggestion`]?.negotiating ? (
                                  <div className="flex items-center space-x-2">
                                    <div className="animate-spin w-4 h-4 border-2 border-purple-600 border-t-transparent rounded-full"></div>
                                    <span>正在协商生成中...</span>
                                  </div>
                                ) : (
                                  messageStates[`${index}_suggestion`]?.negotiatedContent || message.output
                                )}
                              </div>
                            </div>
                            
                            {messageStates[`${index}_suggestion`]?.accepted ? (
                              <div className="space-y-2">
                                <div className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-sm px-3 py-1 rounded">
                                  ✓ 已接受建议
                                </div>
                                {/* 接受建议后的部门联络指令按钮 */}
                                <button
                                  onClick={() => {
                                    const finalContent = messageStates[`${index}_suggestion`]?.negotiatedContent || message.output
                                    onGenerateDepartmentContact && onGenerateDepartmentContact(finalContent)
                                  }}
                                  className="w-full px-4 py-3 text-white rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 text-sm font-medium hover:scale-105"
                                  style={{
                                    background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(16, 185, 129, 0.15) 100%)',
                                    backdropFilter: 'blur(10px) saturate(1.3)',
                                    WebkitBackdropFilter: 'blur(10px) saturate(1.3)',
                                    border: '1px solid rgba(34, 197, 94, 0.3)',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                                  }}
                                  title="生成客户回复和部门联络指令"
                                  disabled={processing}
                                >
                                  <Users className="w-4 h-4" />
                                  <span>生成客户回复和部门联络指令</span>
                                  {processing && <div className="w-4 h-4 border-2 border-green-400 border-t-transparent rounded-full animate-spin ml-1"></div>}
                                </button>
                              </div>
                            ) : messageStates[`${index}_suggestion`]?.showNegotiation ? (
                              <NegotiationPanel 
                                messageId={`${index}_suggestion`}
                                messageType="suggestion"
                                onSendNegotiation={async (messageId, text) => {
                                  // 立即设置协商中状态
                                  setMessageStates(prev => ({
                                    ...prev,
                                    [messageId]: { 
                                      ...prev[messageId], 
                                      negotiating: true 
                                    }
                                  }))
                                  
                                  // 发送协商请求
                                  try {
                                    onSendNegotiationRequest && await onSendNegotiationRequest(messageId, text, (newContent) => {
                                      // 更新协商后的内容，覆盖原来的显示
                                      setMessageStates(prev => ({
                                        ...prev,
                                        [messageId]: { 
                                          ...prev[messageId], 
                                          negotiating: false, 
                                          showNegotiation: false,
                                          negotiated: true,
                                          negotiatedContent: newContent 
                                        }
                                      }))
                                    })
                                  } catch (error) {
                                    console.error('协商请求失败:', error)
                                    // 发生错误时重置协商状态
                                    setMessageStates(prev => ({
                                      ...prev,
                                      [messageId]: { 
                                        ...prev[messageId], 
                                        negotiating: false,
                                        showNegotiation: false
                                      }
                                    }))
                                  }
                                }}
                                onCancel={(messageId) => {
                                  onCancelNegotiation && onCancelNegotiation(messageId)
                                  setMessageStates(prev => ({
                                    ...prev,
                                    [messageId]: { ...prev[messageId], showNegotiation: false }
                                  }))
                                }}
                              />
                            ) : messageStates[`${index}_suggestion`]?.negotiated ? (
                              <div className="space-y-2">
                                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-2">
                                  <div className="text-sm text-blue-800 dark:text-blue-200">
                                    ✓ 已协商修改
                                  </div>
                                </div>
                                <div className="flex space-x-2">
                                  <button
                                    onClick={() => {
                                      const finalContent = messageStates[`${index}_suggestion`]?.negotiatedContent || message.output
                                      onAcceptSuggestion && onAcceptSuggestion(finalContent)
                                      setMessageStates(prev => ({
                                        ...prev,
                                        [`${index}_suggestion`]: { accepted: true, negotiatedContent: finalContent }
                                      }))
                                    }}
                                    className="flex-1 px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-xs transition-colors flex items-center justify-center space-x-1"
                                  >
                                    <CheckCircle className="w-3 h-3" />
                                    <span>接受建议</span>
                                  </button>
                                  <button
                                    onClick={() => {
                                      setMessageStates(prev => ({
                                        ...prev,
                                        [`${index}_suggestion`]: { negotiating: true }
                                      }))
                                    }}
                                    className="flex-1 px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-xs transition-colors flex items-center justify-center space-x-1"
                                  >
                                    <MessageCircle className="w-3 h-3" />
                                    <span>继续协商</span>
                                  </button>
                                  <button
                                    onClick={() => onRejectSuggestion && onRejectSuggestion(message.output)}
                                    className="flex-1 px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-xs transition-colors flex items-center justify-center space-x-1"
                                  >
                                    <XCircle className="w-3 h-3" />
                                    <span>重新生成</span>
                                  </button>
                                </div>
                              </div>
                            ) : (
                              <div className="flex space-x-2">
                                <button
                                  onClick={() => {
                                    const finalContent = messageStates[`${index}_suggestion`]?.negotiatedContent || message.output
                                    onAcceptSuggestion && onAcceptSuggestion(finalContent)
                                    setMessageStates(prev => ({
                                      ...prev,
                                      [`${index}_suggestion`]: { accepted: true, negotiatedContent: finalContent }
                                    }))
                                  }}
                                  className="flex-1 px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-xs transition-colors flex items-center justify-center space-x-1"
                                >
                                  <CheckCircle className="w-3 h-3" />
                                  <span>采纳建议</span>
                                </button>
                                <button
                                  onClick={() => {
                                    setMessageStates(prev => ({
                                      ...prev,
                                      [`${index}_suggestion`]: { 
                                        ...prev[`${index}_suggestion`], 
                                        showNegotiation: true 
                                      }
                                    }))
                                  }}
                                  className="flex-1 px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-xs transition-colors flex items-center justify-center space-x-1"
                                >
                                  <MessageCircle className="w-3 h-3" />
                                  <span>协商修改</span>
                                </button>
                                <button
                                  onClick={() => onRejectSuggestion && onRejectSuggestion(message.output)}
                                  className="flex-1 px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-xs transition-colors flex items-center justify-center space-x-1"
                                >
                                  <XCircle className="w-3 h-3" />
                                  <span>重新生成</span>
                                </button>
                              </div>
                            )}
                          </div>
                        )}
                        
                        {/* 如果是追问类型，显示追问内容和操作按钮 */}
                        {message.title.includes('追问') && message.output && (
                          <div className="mt-3">
                            {/* 追问内容显示 */}
                            <div className="p-3 rounded-lg bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 mb-3">
                              <div className="text-sm text-orange-800 dark:text-orange-200">
                                {messageStates[`${index}_followup`]?.negotiating ? (
                                  <div className="flex items-center space-x-2">
                                    <div className="animate-spin w-4 h-4 border-2 border-orange-600 border-t-transparent rounded-full"></div>
                                    <span>正在协商生成中...</span>
                                  </div>
                                ) : (
                                  messageStates[`${index}_followup`]?.negotiatedContent || message.output
                                )}
                              </div>
                            </div>
                            
                            {messageStates[`${index}_followup`]?.accepted ? (
                              <div className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-sm px-3 py-1 rounded">
                                ✓ 已接受追问（已填入输入框）
                              </div>
                            ) : messageStates[`${index}_followup`]?.showNegotiation ? (
                              <NegotiationPanel 
                                messageId={`${index}_followup`}
                                messageType="followup"
                                onSendNegotiation={async (messageId, text) => {
                                  // 立即设置协商中状态
                                  setMessageStates(prev => ({
                                    ...prev,
                                    [messageId]: { 
                                      ...prev[messageId], 
                                      negotiating: true 
                                    }
                                  }))
                                  
                                  // 发送协商请求
                                  try {
                                    onSendFollowUpNegotiationRequest && await onSendFollowUpNegotiationRequest(messageId, text, (newText) => {
                                      // 更新协商后的内容，覆盖原来的显示
                                      setMessageStates(prev => ({
                                        ...prev,
                                        [messageId]: { 
                                          ...prev[messageId], 
                                          negotiating: false, 
                                          showNegotiation: false,
                                          negotiated: true,
                                          negotiatedContent: newText 
                                        }
                                      }))
                                    })
                                  } catch (error) {
                                    console.error('追问协商请求失败:', error)
                                    // 发生错误时重置协商状态
                                    setMessageStates(prev => ({
                                      ...prev,
                                      [messageId]: { 
                                        ...prev[messageId], 
                                        negotiating: false,
                                        showNegotiation: false
                                      }
                                    }))
                                  }
                                }}
                                onCancel={(messageId) => {
                                  onCancelFollowUpNegotiation && onCancelFollowUpNegotiation(messageId)
                                  setMessageStates(prev => ({
                                    ...prev,
                                    [messageId]: { ...prev[messageId], showNegotiation: false }
                                  }))
                                }}
                              />
                            ) : messageStates[`${index}_followup`]?.negotiated ? (
                              <div className="space-y-2">
                                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-2">
                                  <div className="text-sm text-blue-800 dark:text-blue-200">
                                    ✓ 已协商修改
                                  </div>
                                </div>
                                <div className="flex space-x-2">
                                  <button
                                    onClick={() => {
                                      const finalText = messageStates[`${index}_followup`]?.negotiatedContent || message.output
                                      console.log('🔘 接受追问按钮被点击', { finalText, onSetSolutionInput: !!onSetSolutionInput })
                                      // 调用onSetSolutionInput来填入输入框
                                      if (onSetSolutionInput) {
                                        console.log('📝 调用onSetSolutionInput:', finalText)
                                        onSetSolutionInput(finalText)
                                        // 退出迭代模式以显示输入框
                                        onCancelIteration && onCancelIteration()
                                        console.log('🔄 已退出迭代模式')
                                      } else {
                                        console.error('❌ onSetSolutionInput未定义')
                                      }
                                      setMessageStates(prev => ({
                                        ...prev,
                                        [`${index}_followup`]: { accepted: true, negotiatedContent: finalText }
                                      }))
                                    }}
                                    className="flex-1 px-3 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-xs transition-colors flex items-center justify-center space-x-1"
                                  >
                                    <CheckCircle className="w-3 h-3" />
                                    <span>接受追问</span>
                                  </button>
                                  <button
                                    onClick={() => {
                                      setMessageStates(prev => ({
                                        ...prev,
                                        [`${index}_followup`]: { 
                                          ...prev[`${index}_followup`], 
                                          negotiating: true 
                                        }
                                      }))
                                    }}
                                    className="flex-1 px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-xs transition-colors flex items-center justify-center space-x-1"
                                  >
                                    <MessageCircle className="w-3 h-3" />
                                    <span>继续协商</span>
                                  </button>
                                  <button
                                    onClick={() => onRejectFollowUp && onRejectFollowUp(message.output)}
                                    className="flex-1 px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-xs transition-colors flex items-center justify-center space-x-1"
                                  >
                                    <XCircle className="w-3 h-3" />
                                    <span>重新生成</span>
                                  </button>
                                </div>
                              </div>
                            ) : (
                              <div className="flex space-x-2">
                                <button
                                  onClick={() => {
                                    const finalText = messageStates[`${index}_followup`]?.negotiatedContent || message.output
                                    console.log('🔘 采纳追问按钮被点击', { finalText, onSetSolutionInput: !!onSetSolutionInput })
                                    // 调用onSetSolutionInput来填入输入框
                                    if (onSetSolutionInput) {
                                      console.log('📝 调用onSetSolutionInput:', finalText)
                                      onSetSolutionInput(finalText)
                                      // 退出迭代模式以显示输入框
                                      onCancelIteration && onCancelIteration()
                                      console.log('🔄 已退出迭代模式')
                                    } else {
                                      console.error('❌ onSetSolutionInput未定义')
                                    }
                                    setMessageStates(prev => ({
                                      ...prev,
                                      [`${index}_followup`]: { accepted: true, negotiatedContent: finalText }
                                    }))
                                  }}
                                  className="flex-1 px-3 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-xs transition-colors flex items-center justify-center space-x-1"
                                >
                                  <CheckCircle className="w-3 h-3" />
                                  <span>采纳追问</span>
                                </button>
                                <button
                                  onClick={() => {
                                    setMessageStates(prev => ({
                                      ...prev,
                                      [`${index}_followup`]: { 
                                        ...prev[`${index}_followup`], 
                                        showNegotiation: true 
                                      }
                                    }))
                                  }}
                                  className="flex-1 px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-xs transition-colors flex items-center justify-center space-x-1"
                                >
                                  <MessageCircle className="w-3 h-3" />
                                  <span>协商修改</span>
                                </button>
                                <button
                                  onClick={() => onRejectFollowUp && onRejectFollowUp(message.output)}
                                  className="flex-1 px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-xs transition-colors flex items-center justify-center space-x-1"
                                >
                                  <XCircle className="w-3 h-3" />
                                  <span>重新生成</span>
                                </button>
                              </div>
                            )}
                          </div>
                        )}
                        
                        {/* 如果是仅部门联络，显示联络指令和操作按钮 */}
                        {message.title.includes('生成部门联络') && message.structuredOutput && (
                          <div className="mt-3 space-y-3">
                            {/* 联络指令 */}
                            {message.structuredOutput.contactInstruction && (
                              <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                                <div className="text-xs font-medium text-blue-600 dark:text-blue-400 mb-1">
                                  内部联络指令
                                </div>
                                <div className="text-sm text-blue-800 dark:text-blue-200 mb-2">
                                  {message.structuredOutput.contactInstruction}
                                </div>
                                <button
                                  onClick={() => {
                                    setMessageStates(prev => ({
                                      ...prev,
                                      [`${index}_department_only`]: { sent: true }
                                    }))
                                  }}
                                  className="px-3 py-1 text-xs bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors"
                                >
                                  <span>{messageStates[`${index}_department_only`]?.sent ? '已发送' : '发送给相关部门'}</span>
                                </button>
                              </div>
                            )}
                          </div>
                        )}

                        {/* 如果是部门联络指令，显示详细信息和操作按钮 */}
                        {(message.title.includes('客户回复和部门联络') && !message.title.includes('生成部门联络')) && message.structuredOutput && (
                          <div className="mt-3 space-y-3">
                            {/* 客户回复 */}
                            {message.structuredOutput.customerReply && (
                              <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                                <div className="text-xs font-medium text-green-600 dark:text-green-400 mb-1">
                                  给客户的回复
                                </div>
                                <div className="text-sm text-green-800 dark:text-green-200 mb-2">
                                  {message.structuredOutput.customerReply}
                                </div>
                                <button
                                  onClick={() => {
                                    const reply = message.structuredOutput.customerReply
                                    // 仅填入右侧输入框，不显示直发确认条（已取消需求）
                                    if (onSetSolutionInput) {
                                      onSetSolutionInput(reply)
                                      onCancelIteration && onCancelIteration()
                                    }
                                    setMessageStates(prev => ({
                                      ...prev,
                                      [`${index}_customerReply`]: { applied: true }
                                    }))
                                  }}
                                  className={`px-3 py-1 ${messageStates[`${index}_customerReply`]?.applied ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'} text-white rounded-lg text-xs transition-colors flex items-center space-x-1`}
                                  disabled={messageStates[`${index}_customerReply`]?.applied}
                                >
                                  <Send className="w-3 h-3" />
                                  <span>{messageStates[`${index}_customerReply`]?.applied ? '已应用' : '应用客户回复'}</span>
                                </button>
                              </div>
                            )}
                            
                            {/* 内部联络指令 */}
                            {message.structuredOutput.contactInstruction && (
                              <div className="p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800">
                                <div className="text-xs font-medium text-yellow-600 dark:text-yellow-400 mb-1">
                                  内部联络指令
                                </div>
                                <div className="text-sm text-yellow-800 dark:text-yellow-200">
                                  {message.structuredOutput.contactInstruction}
                                </div>
                                <button
                                  onClick={() => {
                                    // 这里可以添加实际的发送逻辑
                                    setMessageStates(prev => ({
                                      ...prev,
                                      [`${index}_department`]: { sent: true }
                                    }))
                                  }}
                                  className={`mt-2 px-3 py-1 ${messageStates[`${index}_department`]?.sent ? 'bg-gray-500 cursor-not-allowed' : 'bg-yellow-500 hover:bg-yellow-600'} text-white rounded-lg text-xs transition-colors flex items-center space-x-1`}
                                  disabled={messageStates[`${index}_department`]?.sent}
                                >
                                  <Users className="w-3 h-3" />
                                  <span>{messageStates[`${index}_department`]?.sent ? '已发送' : '发送给相关部门'}</span>
                                </button>
                              </div>
                            )}
                          </div>
                        )}

                        {/* 如果是AI对话，显示问答内容 */}
                        {message.type === 'ai_chat' && (
                          <div className="mt-3 space-y-3">
                            {/* 用户问题 */}
                            <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                              <div className="text-xs font-medium text-blue-600 dark:text-blue-400 mb-1">
                                您的问题
                              </div>
                              <div className="text-sm text-blue-800 dark:text-blue-200">
                                {message.question}
                              </div>
                            </div>
                            
                            {/* AI回答 */}
                            <div className="p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
                              <div className="text-xs font-medium text-purple-600 dark:text-purple-400 mb-1 flex items-center space-x-1">
                                <Bot className="w-3 h-3" />
                                <span>AI回答</span>
                                {message.error && <span className="text-red-500">（出错）</span>}
                              </div>
                              <div className="text-sm text-purple-800 dark:text-purple-200">
                                {message.answer}
                              </div>
                            </div>
                          </div>
                        )}
                        
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                          {new Date(message.timestamp).toLocaleTimeString()}
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedTransition>
                );
              })}
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
    </>
  )
}

export default LLMPanel