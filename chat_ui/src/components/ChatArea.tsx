import React from 'react';
import ChatHeader from './ChatHeader';
import Message from './Message';
import MessageInput from './MessageInput';

interface MessageType {
  id: string;
  text: string;
  timestamp: string;
  isSent: boolean;
  isRead?: boolean;
  isDelivered?: boolean;
  avatar?: string;
}

interface ChatAreaProps {
  contact: {
    name: string;
    avatar: string;
    isOnline: boolean;
    lastSeen?: string;
  };
  messages: MessageType[];
  onSendMessage: (message: string) => void;
}

export default function ChatArea({ contact, messages, onSendMessage }: ChatAreaProps) {
  return (
    <div className="flex-1 flex flex-col h-full bg-gray-50">
      <ChatHeader contact={contact} />
      
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      
      <MessageInput onSendMessage={onSendMessage} />
    </div>
  );
}