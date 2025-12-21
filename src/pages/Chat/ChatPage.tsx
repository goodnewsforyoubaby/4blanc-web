import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Send, Paperclip, X, File } from 'lucide-react';
import { Body, BodySmall, Caption } from '../../components/common';
import { mockChatHistory, supportInfo, quickReplies } from '../../data';
import { ChatMessage } from '../../types';
import './ChatPage.css';

interface ProductContext {
  title: string;
  price: string;
  image?: string;
}

export const ChatPage: React.FC = () => {
  const location = useLocation();
  const [messages, setMessages] = useState<ChatMessage[]>(mockChatHistory);
  const [inputValue, setInputValue] = useState('');
  const [productContext, setProductContext] = useState<ProductContext | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Check for product context from navigation state
  useEffect(() => {
    const state = location.state as { productContext?: ProductContext } | null;
    if (state?.productContext) {
      setProductContext(state.productContext);
      // Clear the state to prevent showing context on refresh
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Include product context in message if present
    const messageContent = productContext
      ? `[Question about ${productContext.title}]\n\n${inputValue.trim()}`
      : inputValue.trim();

    const newMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      type: 'user',
      content: messageContent,
      timestamp: new Date(),
      status: 'sent',
    };

    setMessages([...messages, newMessage]);
    setInputValue('');
    setProductContext(null); // Clear context after sending

    // Simulate support response
    setTimeout(() => {
      const response: ChatMessage = {
        id: `msg-${Date.now() + 1}`,
        type: 'support',
        content: productContext
          ? `Thank you for your question about ${productContext.title}! Our product specialist will assist you shortly.`
          : 'Thank you for your message! Our team will get back to you shortly.',
        timestamp: new Date(),
        status: 'delivered',
      };
      setMessages((prev) => [...prev, response]);
    }, 1000);
  };

  const handleClearProductContext = () => {
    setProductContext(null);
  };

  const handleQuickReply = (reply: string) => {
    setInputValue(reply);
  };

  const formatTime = (date: Date) => {
    return new Date(date).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  return (
    <div className="chat-page">
      {/* Support Header */}
      <div className="chat-support-header">
        <img src={supportInfo.avatar} alt={supportInfo.name} className="chat-support-avatar" />
        <div className="chat-support-info">
          <Body>{supportInfo.name}</Body>
          <div className="chat-support-status">
            <span className="chat-status-dot" />
            <Caption>{supportInfo.status}</Caption>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="chat-messages hide-scrollbar">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`chat-bubble-wrapper ${message.type === 'user' ? 'user' : 'support'}`}
          >
            <div className={`chat-bubble ${message.type}`}>
              <Body>{message.content}</Body>

              {message.attachment && (
                <div className="chat-attachment">
                  {message.attachment.type === 'image' ? (
                    <div className="chat-attachment-image">
                      <img src={message.attachment.url} alt={message.attachment.name} />
                    </div>
                  ) : (
                    <div className="chat-attachment-file">
                      <File size={20} />
                      <span>{message.attachment.name}</span>
                    </div>
                  )}
                  {message.attachment.size && (
                    <Caption className="chat-attachment-size">{message.attachment.size}</Caption>
                  )}
                </div>
              )}
            </div>
            <Caption className="chat-time">{formatTime(message.timestamp)}</Caption>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Product Context Card */}
      {productContext && (
        <div className="chat-product-context">
          <div className="chat-product-context-info">
            {productContext.image && (
              <img
                src={productContext.image}
                alt={productContext.title}
                className="chat-product-context-image"
              />
            )}
            <div className="chat-product-context-details">
              <BodySmall>Asking about:</BodySmall>
              <Body>{productContext.title}</Body>
              <Caption color="secondary">{productContext.price}</Caption>
            </div>
          </div>
          <button
            className="chat-product-context-close"
            onClick={handleClearProductContext}
            aria-label="Remove product context"
          >
            <X size={18} />
          </button>
        </div>
      )}

      {/* Quick Replies */}
      <div className="chat-quick-replies hide-scrollbar">
        {quickReplies.map((reply) => (
          <button
            key={reply}
            className="chat-quick-reply"
            onClick={() => handleQuickReply(reply)}
          >
            {reply}
          </button>
        ))}
      </div>

      {/* Input */}
      <div className="chat-input-container">
        <button className="chat-attach-btn">
          <Paperclip size={20} />
        </button>
        <input
          type="text"
          className="chat-input"
          placeholder="Type a message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          className="chat-send-btn"
          onClick={handleSend}
          disabled={!inputValue.trim()}
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};
