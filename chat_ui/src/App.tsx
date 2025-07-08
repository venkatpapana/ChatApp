import React, { useState } from 'react';
import ChatSidebar from './components/ChatSidebar';
import ChatArea from './components/ChatArea';

interface Contact {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: string;
  isOnline: boolean;
  avatar: string;
  unreadCount?: number;
}

interface Message {
  id: string;
  text: string;
  timestamp: string;
  isSent: boolean;
  isRead?: boolean;
  isDelivered?: boolean;
  avatar?: string;
}

function App() {
  const [selectedContactId, setSelectedContactId] = useState<string>('1');
  
  const contacts: Contact[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      lastMessage: 'Hey! How was your day?',
      timestamp: '2:30 PM',
      isOnline: true,
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100',
      unreadCount: 2
    },
    {
      id: '2',
      name: 'Mike Chen',
      lastMessage: 'The meeting is at 3 PM tomorrow',
      timestamp: '1:15 PM',
      isOnline: false,
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: '3',
      name: 'Emma Wilson',
      lastMessage: 'Thanks for the help!',
      timestamp: '11:45 AM',
      isOnline: true,
      avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: '4',
      name: 'David Rodriguez',
      lastMessage: 'Can you review the document?',
      timestamp: '10:20 AM',
      isOnline: false,
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100',
      unreadCount: 1
    },
    {
      id: '5',
      name: 'Lisa Anderson',
      lastMessage: 'Perfect! See you later',
      timestamp: 'Yesterday',
      isOnline: true,
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hey! How was your day?',
      timestamp: '2:30 PM',
      isSent: false,
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: '2',
      text: 'It was great! Just finished a big project at work. How about you?',
      timestamp: '2:32 PM',
      isSent: true,
      isRead: true
    },
    {
      id: '3',
      text: 'That sounds amazing! I had a pretty good day too. Want to grab coffee tomorrow?',
      timestamp: '2:33 PM',
      isSent: false,
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: '4',
      text: 'Absolutely! How about 10 AM at our usual spot?',
      timestamp: '2:35 PM',
      isSent: true,
      isDelivered: true
    }
  ]);

  const selectedContact = contacts.find(c => c.id === selectedContactId);

  const handleSendMessage = (messageText: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isSent: true,
      isDelivered: true
    };
    
    setMessages(prev => [...prev, newMessage]);
  };

  return (
    <div className="h-screen bg-gray-100 flex">
      <ChatSidebar
        contacts={contacts}
        selectedContactId={selectedContactId}
        onContactSelect={setSelectedContactId}
      />
      
      {selectedContact && (
        <ChatArea
          contact={{
            name: selectedContact.name,
            avatar: selectedContact.avatar,
            isOnline: selectedContact.isOnline,
            lastSeen: selectedContact.isOnline ? undefined : '5 minutes ago'
          }}
          messages={messages}
          onSendMessage={handleSendMessage}
        />
      )}
    </div>
  );
}

export default App;