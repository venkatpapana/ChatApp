import React, { useState } from 'react';
import { Send, Paperclip, Smile, Mic } from 'lucide-react';

interface MessageInputProps {
  onSendMessage: (message: string) => void;
}

export default function MessageInput({ onSendMessage }: MessageInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="bg-white border-t border-gray-200 p-4">
      <form onSubmit={handleSubmit} className="flex items-center space-x-4">
        <button
          type="button"
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Paperclip className="w-5 h-5 text-gray-600" />
        </button>
        
        <div className="flex-1 relative">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="button"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-200 rounded transition-colors"
          >
            <Smile className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        
        {message.trim() ? (
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        ) : (
          <button
            type="button"
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Mic className="w-5 h-5 text-gray-600" />
          </button>
        )}
      </form>
    </div>
  );
}