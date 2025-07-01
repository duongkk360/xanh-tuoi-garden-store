
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export const useChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Xin chào! Tôi là Midonaka, trợ lý AI của Midoni. Tôi có thể giúp bạn tư vấn về cây cảnh và các sản phẩm của shop. Bạn cần hỗ trợ gì không?',
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (content: string) => {
    console.log('Sending message:', content);
    
    const userMessage: ChatMessage = {
      id: Date.now().toString() + '-user',
      role: 'user',
      content,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const conversationHistory = messages.map(msg => ({
        role: msg.role,
        content: msg.content
      }));

      console.log('Calling edge function with:', { 
        message: content,
        conversationHistory: conversationHistory.slice(-10) 
      });

      const { data, error } = await supabase.functions.invoke('chat-with-ai', {
        body: { 
          message: content,
          conversationHistory: conversationHistory.slice(-10)
        }
      });

      console.log('Edge function response:', { data, error });

      if (error) {
        console.error('Supabase function error:', error);
        throw error;
      }

      if (!data || !data.reply) {
        console.error('Invalid response format:', data);
        throw new Error('Invalid response from AI service');
      }

      const assistantMessage: ChatMessage = {
        id: Date.now().toString() + '-assistant',
        role: 'assistant',
        content: data.reply,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      
      let errorMessage = 'Xin lỗi, tôi đang gặp sự cố. Vui lòng thử lại sau.';
      
      // More specific error messages based on error type
      if (error.message?.includes('429')) {
        errorMessage = 'API đang quá tải, vui lòng thử lại sau ít phút.';
      } else if (error.message?.includes('401')) {
        errorMessage = 'Lỗi xác thực API key, vui lòng kiểm tra cấu hình.';
      } else if (error.message?.includes('network') || error.message?.includes('fetch')) {
        errorMessage = 'Lỗi kết nối mạng, vui lòng kiểm tra internet và thử lại.';
      }
      
      const errorMsg: ChatMessage = {
        id: Date.now().toString() + '-error',
        role: 'assistant',
        content: errorMessage,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    messages,
    isLoading,
    sendMessage
  };
};
