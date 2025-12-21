import React, { useState, useRef, useEffect } from 'react';
import { Send, Paperclip, Image as ImageIcon, File } from 'lucide-react';
import { Body, BodySmall, Caption } from '../../components/common';
import { mockChatHistory, supportInfo, quickReplies } from '../../data';
import { ChatMessage } from '../../types';
import './ChatPage.css';

export const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>(mockChatHistory);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      type: 'user',
      content: inputValue.trim(),
      timestamp: new Date(),
      status: 'sent',
    };

    setMessages([...messages, newMessage]);
    setInputValue('');

    // Simulate support response
    setTimeout(() => {
      const response: ChatMessage = {
        id: `msg-${Date.now() + 1}`,
        type: 'support',
        content: 'Thank you for your message! Our team will get back to you shortly.',
        timestamp: new Date(),
        status: 'delivered',
      };
      setMessages((prev) => [...prev, response]);
    }, 1000);
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
