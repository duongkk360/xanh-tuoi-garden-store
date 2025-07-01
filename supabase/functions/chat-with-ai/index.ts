
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const huggingFaceApiKey = Deno.env.get('HUGGING_FACE_ACCESS_TOKEN');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Tạo hệ thống trả lời thông minh dựa trên từ khóa
const generateSmartResponse = (message: string, conversationHistory: any[]): string => {
  const lowerMessage = message.toLowerCase();
  
  // Phân tích loại câu hỏi và trả lời phù hợp
  if (lowerMessage.includes('chào') || lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
    return "Xin chào! Tôi là Midonaka, trợ lý AI chuyên về cây cảnh của shop Midoni. Tôi có thể giúp bạn tư vấn về các loại cây, cách chăm sóc, và sản phẩm của shop. Bạn muốn hỏi gì về cây cảnh nhé? 🌱";
  }
  
  if (lowerMessage.includes('sen đá') || lowerMessage.includes('succulent')) {
    if (lowerMessage.includes('tưới') || lowerMessage.includes('nước')) {
      return "Sen đá cần tưới nước ít và không thường xuyên:\n\n🌵 **Mùa hè**: 1-2 lần/tuần\n🍂 **Mùa đông**: 2-3 tuần/lần\n\n**Cách tưới đúng**:\n- Tưới khi đất khô hoàn toàn\n- Tưới thấm đều rồi để ráo\n- Tránh để nước đọng ở gốc\n- Tưới vào buổi sáng sớm\n\nBạn có muốn biết thêm về cách chăm sóc sen đá không?";
    }
    
    if (lowerMessage.includes('ánh sáng') || lowerMessage.includes('nắng')) {
      return "Sen đá rất thích ánh sáng! ☀️\n\n**Yêu cầu ánh sáng**:\n- Cần 6-8 tiếng ánh sáng/ngày\n- Ánh sáng gián tiếp, tránh nắng trực tiếp\n- Đặt gần cửa sổ hướng Đông hoặc Tây\n- Nếu thiếu sáng, cây sẽ vươn dài và yếu\n\n**Dấu hiệu thiếu sáng**: Cây vươn cao, lá nhạt màu\n**Dấu hiệu quá nắng**: Lá bị cháy, nâu đỏ\n\nBạn cần tư vấn thêm về vị trí đặt cây không?";
    }
    
    return "Sen đá là loại cây rất dễ chăm! 🌵\n\n**Đặc điểm**:\n- Tích trữ nước trong lá\n- Chịu hạn tốt\n- Phù hợp để bàn làm việc\n\n**Cách chăm sóc cơ bản**:\n✅ Tưới ít, khoảng 1-2 lần/tuần\n✅ Đặt nơi có ánh sáng gián tiếp\n✅ Đất thoát nước tốt\n✅ Nhiệt độ 18-24°C\n\nBạn muốn biết cụ thể về tưới nước, ánh sáng hay các vấn đề khác?";
  }
  
  if (lowerMessage.includes('cây trong nhà') || lowerMessage.includes('cây nội thất')) {
    return "Tuyệt! Cây trong nhà giúp không gian sống tươi mát hơn 🏠🌿\n\n**Top cây dễ chăm cho người mới**:\n🌱 **Cây lưỡi hổ**: Chịu thiếu sáng, tưới ít\n🌱 **Cây kim tiền**: May mắn, dễ sống\n🌱 **Cây trầu bà**: Lọc không khí tốt\n🌱 **Sen đá mini**: Xinh xắn, ít chăm sóc\n\n**Lợi ích**:\n✨ Lọc không khí\n✨ Tăng độ ẩm\n✨ Giảm stress\n✨ Trang trí đẹp\n\nBạn muốn tư vấn loại cây nào phù hợp với không gian nhà bạn?";
  }
  
  if (lowerMessage.includes('tưới nước') || lowerMessage.includes('tưới cây')) {
    return "Tưới nước đúng cách rất quan trọng! 💧\n\n**Nguyên tắc chung**:\n🌱 **Kiểm tra đất**: Đút ngón tay xuống đất 2-3cm\n🌱 **Tưới khi khô**: Đất khô mới tưới\n🌱 **Tưới thấm**: Cho đến khi nước chảy ra lỗ thoát\n🌱 **Thời gian**: Sáng sớm hoặc chiều mát\n\n**Dấu hiệu tưới sai**:\n❌ Lá vàng, rụng: Tưới quá nhiều\n❌ Lá héo, khô: Tưới quá ít\n❌ Rễ thối: Đọng nước\n\nBạn đang gặp vấn đề gì với việc tưới cây?";
  }
  
  if (lowerMessage.includes('phân bón') || lowerMessage.includes('bón phân')) {
    return "Bón phân giúp cây phát triển khỏe mạnh! 🌿\n\n**Loại phân**:\n🟢 **Phân hữu cơ**: An toàn, từ từ\n🔵 **Phân NPK**: Hiệu quả nhanh\n🟡 **Phân lá**: Bổ sung vi lượng\n\n**Tần suất bón**:\n- **Mùa sinh trưởng** (3-9): 2 tuần/lần\n- **Mùa nghỉ** (10-2): 1 tháng/lần hoặc không bón\n\n**Lưu ý**:\n⚠️ Không bón khi cây ốm\n⚠️ Pha loãng theo hướng dẫn\n⚠️ Bón sau khi tưới nước\n\nBạn muốn biết cách bón phân cho loại cây nào?";
  }
  
  if (lowerMessage.includes('sâu bệnh') || lowerMessage.includes('côn trùng') || lowerMessage.includes('rệp')) {
    return "Phòng chống sâu bệnh quan trọng lắm! 🐛\n\n**Sâu bệnh thường gặp**:\n🔴 **Rệp xanh**: Hút nhựa cây\n🔴 **Nhện đỏ**: Lá có đốm vàng\n🔴 **Bọ trĩ**: Ăn lá\n🔴 **Nấm**: Đốm đen trên lá\n\n**Cách phòng ngừa**:\n✅ Giữ cây sạch sẽ\n✅ Thông gió tốt\n✅ Không tưới lên lá\n✅ Cách ly cây mới\n\n**Xử lý tự nhiên**:\n🌿 Xà phòng + nước\n🌿 Dầu neem\n🌿 Cắt bỏ phần bị bệnh\n\nBạn thấy dấu hiệu gì trên cây?";
  }
  
  if (lowerMessage.includes('giá') || lowerMessage.includes('mua') || lowerMessage.includes('bán')) {
    return "Shop Midoni có nhiều loại cây với giá phù hợp! 💰\n\n**Tầm giá tham khảo**:\n🌱 **Cây mini**: 50.000 - 150.000đ\n🌿 **Cây trung**: 200.000 - 500.000đ\n🌳 **Cây lớn**: 600.000 - 2.000.000đ\n\n**Ưu đãi hiện tại**:\n🎁 Miễn phí giao hàng từ 500.000đ\n🎁 Tư vấn chăm sóc miễn phí\n🎁 Đổi cây trong 7 ngày nếu có vấn đề\n\n**Xem sản phẩm**: Bạn có thể xem chi tiết trên trang Products\n\nBạn quan tâm loại cây nào để tôi tư vấn cụ thể?";
  }
  
  // Phản hồi chung cho các câu hỏi khác
  const responses = [
    `Câu hỏi hay quá! Về "${message}", tôi nghĩ bạn nên biết rằng mỗi loại cây có đặc điểm riêng. Bạn có thể chia sẻ thêm chi tiết để tôi tư vấn chính xác hơn không?`,
    
    `Tôi hiểu bạn đang quan tâm đến "${message}". Với kinh nghiệm tư vấn cây cảnh, tôi thấy điều quan trọng nhất là hiểu rõ nhu cầu của từng loại cây. Bạn có muốn tôi giải thích cụ thể hơn không?`,
    
    `Về vấn đề "${message}" mà bạn hỏi, đây là một chủ đề thú vị trong chăm sóc cây cảnh! Mỗi loại cây có yêu cầu khác nhau. Bạn đang chăm sóc loại cây nào vậy?`,
    
    `Cảm ơn bạn đã hỏi về "${message}". Tôi rất vui được chia sẻ kiến thức về cây cảnh! Để tư vấn chính xác nhất, bạn có thể cho tôi biết thêm về điều kiện môi trường ở nhà bạn không?`
  ];
  
  // Chọn phản hồi dựa trên độ dài tin nhắn
  const responseIndex = message.length % responses.length;
  return responses[responseIndex];
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

    let reply = '';

    if (huggingFaceApiKey) {
      console.log('Using Hugging Face API with token...');
      
      // Tạo context chuyên sâu về cây cảnh
      let context = `Bạn là Midonaka, chuyên gia tư vấn cây cảnh của shop Midoni. 
Bạn có kiến thức sâu rộng về:
- Các loại cây cảnh trong nhà và ngoài trời
- Cách chăm sóc, tưới nước, bón phân
- Xử lý sâu bệnh, vấn đề cây cối
- Tư vấn chọn cây phù hợp với từng không gian
- Sản phẩm và dịch vụ của shop Midoni

Luôn trả lời bằng tiếng Việt thân thiện, chuyên nghiệp và hữu ích.
Sử dụng emoji phù hợp để làm câu trả lời sinh động.

Lịch sử hội thoại:\n`;

      conversationHistory.forEach((msg: any) => {
        context += `${msg.role === 'user' ? 'Khách hàng' : 'Midonaka'}: ${msg.content}\n`;
      });
      
      context += `Khách hàng: ${message}\nMidonaka:`;

      const response = await fetch('https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${huggingFaceApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inputs: context,
          parameters: {
            max_length: 500,
            temperature: 0.8,
            do_sample: true,
            top_p: 0.9,
            return_full_text: false
          }
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data) && data[0] && data[0].generated_text) {
          reply = data[0].generated_text.trim();
        }
      } else {
        console.log('Hugging Face API failed, using smart fallback');
        reply = generateSmartResponse(message, conversationHistory);
      }
    } else {
      console.log('No API key, using smart response system');
      reply = generateSmartResponse(message, conversationHistory);
    }

    // Đảm bảo reply không quá dài
    if (reply.length > 800) {
      reply = reply.substring(0, 800) + "...";
    }

    // Nếu reply trống hoặc không phù hợp, dùng fallback
    if (!reply || reply.length < 10) {
      reply = generateSmartResponse(message, conversationHistory);
    }

    console.log('AI reply generated successfully');

    return new Response(JSON.stringify({ reply }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in chat-with-ai function:', error);
    
    // Fallback thông minh khi có lỗi
    const { message } = await req.json();
    const fallbackReply = generateSmartResponse(message || "xin chào", []);
    
    return new Response(JSON.stringify({ reply: fallbackReply }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
