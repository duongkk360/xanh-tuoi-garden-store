import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useChat } from '@/hooks/useChat';
import { cn } from '@/lib/utils';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const { messages, isLoading, sendMessage } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    const message = inputMessage.trim();
    setInputMessage('');
    await sendMessage(message);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('vi-VN', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {!isOpen && (
        <div className="flex flex-col space-y-4">
          {/* Facebook Icon - ở trên */}
          <div className="relative">
            <a
              href="https://www.facebook.com/midonivn"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-float"
              aria-label="Theo dõi chúng tôi trên Facebook"
            >
              <svg className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              
              {/* Ripple effect */}
              <div className="absolute inset-0 rounded-full bg-blue-400 opacity-0 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500"></div>
              
              {/* Pulse animation ring */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-300 opacity-50 animate-ping"></div>
            </a>
          </div>

          {/* AI Chatbot Icon - ở dưới */}
          <div className="relative">
            <Button
              onClick={() => setIsOpen(true)}
              className="h-14 w-14 rounded-full bg-nature-600 hover:bg-nature-700 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden animate-bounce"
            >
              <Avatar className="h-10 w-10 group-hover:scale-110 transition-transform duration-300">
                <AvatarImage 
                  src="/lovable-uploads/35ec737a-a544-43ae-9dee-e0a1a481476b.png" 
                  alt="Midonaka" 
                />
                <AvatarFallback className="bg-nature-500 text-white">
                  <Bot className="h-5 w-5" />
                </AvatarFallback>
              </Avatar>
              
              {/* Ripple effect cho AI bot */}
              <div className="absolute inset-0 rounded-full bg-nature-400 opacity-0 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500"></div>
              
              {/* Pulse animation ring cho AI bot */}
              <div className="absolute inset-0 rounded-full border-2 border-nature-300 opacity-50 animate-ping"></div>
            </Button>
            
            {/* Tooltip cho AI bot */}
            <div className="absolute bottom-full left-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-nature-600 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap shadow-lg">
                Mido xin chào 👋
                <div className="absolute top-full left-2 w-0 h-0 border-l-2 border-r-2 border-t-4 border-transparent border-t-nature-600"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {isOpen && (
        <Card className="w-80 h-96 shadow-2xl border-nature-200">
          <CardHeader className="bg-nature-600 text-white p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage 
                    src="/lovable-uploads/35ec737a-a544-43ae-9dee-e0a1a481476b.png" 
                    alt="Midonaka" 
                  />
                  <AvatarFallback className="bg-white/20">
                    <Bot className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">Midonaka</CardTitle>
                  <p className="text-nature-100 text-sm">Trợ lý AI cây cảnh</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="p-0 flex flex-col h-80">
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "flex",
                      message.role === 'user' ? 'justify-end' : 'justify-start'
                    )}
                  >
                    <div
                      className={cn(
                        "max-w-[80%] rounded-lg p-3 text-sm",
                        message.role === 'user'
                          ? 'bg-nature-600 text-white ml-4'
                          : 'bg-gray-100 text-gray-900 mr-4'
                      )}
                    >
                      <p className="whitespace-pre-wrap">{message.content}</p>
                      <p
                        className={cn(
                          "text-xs mt-1 opacity-70",
                          message.role === 'user' ? 'text-nature-100' : 'text-gray-500'
                        )}
                      >
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-lg p-3 mr-4">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            <form onSubmit={handleSendMessage} className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  ref={inputRef}
                  type="text"
                  placeholder="Nhập tin nhắn..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  disabled={isLoading}
                  className="flex-1"
                />
                <Button
                  type="submit"
                  disabled={!inputMessage.trim() || isLoading}
                  className="bg-nature-600 hover:bg-nature-700"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ChatBot;
