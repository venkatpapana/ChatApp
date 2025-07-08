import React from 'react';
import { Check, CheckCheck } from 'lucide-react';

interface MessageProps {
  message: {
    id: string;
    text: string;
    timestamp: string;
    isSent: boolean;
    isRead?: boolean;
    isDelivered?: boolean;
    avatar?: string;
  };
}

export default function Message({ message }: MessageProps) {
  return (
    <div className={`flex ${message.isSent ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`flex items-end space-x-2 max-w-xs lg:max-w-md ${message.isSent ? 'flex-row-reverse space-x-reverse' : ''}`}>
        {!message.isSent && (
          <img
            src={message.avatar || 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100'}
            alt="Avatar"
            className="w-8 h-8 rounded-full object-cover"
          />
        )}
        
        <div className={`px-4 py-2 rounded-2xl ${
          message.isSent
            ? 'bg-blue-500 text-white rounded-br-sm'
            : 'bg-gray-100 text-gray-900 rounded-bl-sm'
        }`}>
          <p className="text-sm">{message.text}</p>
        </div>
      </div>
      
      <div className={`flex items-end ml-2 ${message.isSent ? 'mr-2' : ''}`}>
        <div className="flex flex-col items-end">
          <span className="text-xs text-gray-500 mb-1">{message.timestamp}</span>
          {message.isSent && (
            <div className="text-white opacity-70">
              {message.isRead ? (
                <CheckCheck className="w-4 h-4 text-blue-300" />
              ) : message.isDelivered ? (
                <CheckCheck className="w-4 h-4" />
              ) : (
                <Check className="w-4 h-4" />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}