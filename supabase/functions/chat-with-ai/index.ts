
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const huggingFaceApiKey = Deno.env.get('HUGGING_FACE_ACCESS_TOKEN');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Chat function called');
    
    const { message, conversationHistory = [] } = await req.json();
    console.log('Request data:', { message, historyLength: conversationHistory.length });

    if (!message) {
      throw new Error('Message is required');
    }

    // Tạo context từ lịch sử hội thoại
    let context = `Bạn là Midonaka, một trợ lý AI thông minh và thân thiện của shop cây cảnh Midoni. 
Bạn có kiến thức sâu rộng về cây cảnh, cách chăm sóc, và các sản phẩm của shop.
Luôn trả lời bằng tiếng Việt một cách tự nhiên, thân thiện và hữu ích.
Nếu khách hàng hỏi về sản phẩm cụ thể, hãy gợi ý họ xem trang sản phẩm.
Nếu họ cần tư vấn cây cảnh, hãy đưa ra lời khuyên chuyên nghiệp.\n\n`;

    // Thêm lịch sử hội thoại vào context
    conversationHistory.forEach((msg: any) => {
      context += `${msg.role === 'user' ? 'Khách hàng' : 'Midonaka'}: ${msg.content}\n`;
    });
    
    context += `Khách hàng: ${message}\nMidonaka:`;

    console.log('Calling Hugging Face API...');
    
    // Sử dụng model miễn phí từ Hugging Face
    const response = await fetch('https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium', {
      method: 'POST',
      headers: {
        'Authorization': huggingFaceApiKey ? `Bearer ${huggingFaceApiKey}` : '',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: context,
        parameters: {
          max_length: 500,
          temperature: 0.7,
          return_full_text: false
        }
      }),
    });

    console.log('Hugging Face response status:', response.status);

    if (!response.ok) {
      // Nếu không có API key hoặc gặp lỗi, sử dụng response mặc định
      if (response.status === 401 || response.status === 403) {
        console.log('Using fallback response due to API auth issues');
        const fallbackResponses = [
          "Xin chào! Tôi là Midonaka, trợ lý AI của shop cây cảnh Midoni. Hiện tại tôi đang hoạt động ở chế độ cơ bản. Bạn có thể hỏi tôi về cách chăm sóc cây cảnh nhé!",
          "Cảm ơn bạn đã quan tâm đến shop Midoni! Để được tư vấn chi tiết hơn về cây cảnh, bạn có thể liên hệ trực tiếp với chúng tôi.",
          "Tôi có thể giúp bạn một số thông tin cơ bản về cây cảnh. Cây cảnh cần được tưới nước đều đặn, có ánh sáng phù hợp và đất tơi xốp để phát triển tốt.",
          "Shop Midoni có nhiều loại cây cảnh đẹp. Bạn có thể xem thêm trên trang sản phẩm của chúng tôi để chọn cây phù hợp!"
        ];
        
        const randomResponse = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
        
        return new Response(JSON.stringify({ reply: randomResponse }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      
      const errorText = await response.text();
      console.error('Hugging Face API error:', response.status, errorText);
      throw new Error(`Hugging Face API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    console.log('Hugging Face response data:', data);
    
    let reply = '';
    if (Array.isArray(data) && data[0] && data[0].generated_text) {
      reply = data[0].generated_text.trim();
    } else if (data.generated_text) {
      reply = data.generated_text.trim();
    } else {
      // Fallback nếu không parse được response
      reply = "Xin chào! Tôi là Midonaka từ shop cây cảnh Midoni. Tôi có thể giúp bạn tư vấn về cây cảnh. Bạn cần hỗ trợ gì không?";
    }

    // Đảm bảo reply không quá dài
    if (reply.length > 500) {
      reply = reply.substring(0, 500) + "...";
    }

    console.log('AI reply generated successfully');

    return new Response(JSON.stringify({ reply }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in chat-with-ai function:', error);
    
    // Fallback response khi có lỗi
    const fallbackReply = "Xin chào! Tôi là Midonaka từ shop cây cảnh Midoni. Hiện tại tôi đang gặp một chút sự cố nhỏ, nhưng tôi vẫn có thể giúp bạn một số thông tin cơ bản về cây cảnh. Bạn có thể liên hệ trực tiếp với shop để được tư vấn chi tiết hơn nhé!";
    
    return new Response(JSON.stringify({ reply: fallbackReply }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
