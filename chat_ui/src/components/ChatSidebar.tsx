import React from 'react';
import { MessageCircle, Search, Phone, Video, Settings, Users, Hash } from 'lucide-react';

interface Contact {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: string;
  isOnline: boolean;
  avatar: string;
  unreadCount?: number;
}

interface ChatSidebarProps {
  contacts: Contact[];
  selectedContactId?: string;
  onContactSelect: (contactId: string) => void;
}

export default function ChatSidebar({ contacts, selectedContactId, onContactSelect }: ChatSidebarProps) {
  return (
    <div className="w-80 bg-white border-r border-gray-200 flex flex-col h-full">
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold text-gray-900">Messages</h1>
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Users className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Settings className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search conversations..."
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Contacts List */}
      <div className="flex-1 overflow-y-auto">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            onClick={() => onContactSelect(contact.id)}
            className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors border-l-4 ${
              selectedContactId === contact.id
                ? 'bg-blue-50 border-blue-500'
                : 'border-transparent'
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src={contact.avatar}
                  alt={contact.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                {contact.isOnline && (
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900 truncate">{contact.name}</h3>
                  <span className="text-xs text-gray-500">{contact.timestamp}</span>
                </div>
                <p className="text-sm text-gray-600 truncate mt-1">{contact.lastMessage}</p>
              </div>
              
              {contact.unreadCount && (
                <div className="bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {contact.unreadCount}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}