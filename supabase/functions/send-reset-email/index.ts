
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Function to send email via SMTP (Gmail)
async function sendResetEmail(email: string, resetLink: string): Promise<boolean> {
  try {
    const gmailUser = Deno.env.get('GMAIL_USER');
    const gmailPass = Deno.env.get('GMAIL_PASS');
    
    console.log('GMAIL_USER:', gmailUser ? 'Set' : 'Not set');
    console.log('GMAIL_PASS:', gmailPass ? 'Set' : 'Not set');
    
    if (!gmailUser || !gmailPass) {
      console.error('GMAIL_USER or GMAIL_PASS not found in environment variables');
      return false;
    }

    console.log(`Attempting to send reset email to: ${email}`);

    // Create SMTP client with better error handling
    const client = new SMTPClient({
      connection: {
        hostname: "smtp.gmail.com",
        port: 587,
        tls: true,
        auth: {
          username: gmailUser,
          password: gmailPass,
        },
      },
    });

    // Create improved email content
    const emailContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 0 auto; }
          .header { background: linear-gradient(135deg, #10b981, #059669); padding: 20px; text-align: center; }
          .content { padding: 30px; background: white; }
          .button { display: inline-block; background: #10b981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; }
          .footer { color: #9ca3af; font-size: 12px; padding: 20px; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="color: white; margin: 0;">Midoni</h1>
            <p style="color: white; margin: 5px 0;">Kết nối đam mê, gieo mầm nghệ thuật</p>
          </div>
          
          <div class="content">
            <h2 style="color: #374151; margin-bottom: 20px;">Đặt lại mật khẩu</h2>
            
            <p style="color: #6b7280; line-height: 1.6; margin-bottom: 20px;">
              Chào bạn,<br><br>
              Chúng tôi đã nhận được yêu cầu đặt lại mật khẩu cho tài khoản Midoni của bạn. 
              Nhấp vào nút bên dưới để tạo mật khẩu mới:
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="${resetLink}" class="button">
                Đặt lại mật khẩu
              </a>
            </div>
            
            <p style="color: #6b7280; font-size: 14px; margin-top: 20px;">
              Nếu nút không hoạt động, bạn có thể copy và paste link sau vào trình duyệt:
            </p>
            <p style="word-break: break-all; color: #10b981; font-size: 14px; background: #f3f4f6; padding: 10px; border-radius: 4px;">
              ${resetLink}
            </p>
            
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
            
            <p style="color: #9ca3af; font-size: 12px;">
              Nếu bạn không yêu cầu đặt lại mật khẩu, vui lòng bỏ qua email này.
              Link này sẽ hết hạn sau 24 giờ vì lý do bảo mật.
            </p>
          </div>
          
          <div class="footer">
            <p>© 2024 Midoni - Kết nối đam mê, gieo mầm nghệ thuật</p>
          </div>
        </div>
      </body>
      </html>
    `;

    console.log('Sending email with SMTP client...');

    // Send email via SMTP
    await client.send({
      from: `"Midoni" <${gmailUser}>`,
      to: email,
      subject: "🔑 Đặt lại mật khẩu - Midoni",
      content: emailContent,
      html: emailContent,
    });

    await client.close();
    console.log('Email sent successfully via SMTP');
    return true;

  } catch (error) {
    console.error('Error in sendResetEmail:', error);
    console.error('Error details:', {
      name: error.name,
      message: error.message,
      stack: error.stack
    });
    return false;
  }
}

serve(async (req) => {
  console.log('Reset password function called');
  console.log('Request method:', req.method);
  console.log('Request headers:', Object.fromEntries(req.headers.entries()));
  
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    console.log('Handling CORS preflight request');
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const body = await req.text();
    console.log('Request body:', body);
    
    let parsedBody;
    try {
      parsedBody = JSON.parse(body);
    } catch (parseError) {
      console.error('JSON parse error:', parseError);
      return new Response(
        JSON.stringify({ error: 'Invalid JSON in request body' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    const { email } = parsedBody;
    console.log('Extracted email:', email);

    if (!email) {
      console.error('Email is missing from request');
      return new Response(
        JSON.stringify({ error: 'Email is required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error('Invalid email format:', email);
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Generate reset token
    const resetToken = crypto.randomUUID();
    console.log('Generated reset token:', resetToken);
    
    // Create reset link
    const baseUrl = req.headers.get('origin') || 'https://midoni-shop.lovable.app';
    const resetLink = `${baseUrl}/reset-password?token=${resetToken}&email=${encodeURIComponent(email)}`;
    console.log('Reset link:', resetLink);

    console.log(`Processing reset request for: ${email}`);

    // Send reset email
    const emailSent = await sendResetEmail(email, resetLink);

    if (!emailSent) {
      console.error('Failed to send reset email');
      return new Response(
        JSON.stringify({ 
          error: 'Không thể gửi email đặt lại mật khẩu. Vui lòng thử lại sau.',
          details: 'Email service temporarily unavailable'
        }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    console.log(`Reset email sent successfully to: ${email}`);

    return new Response(
      JSON.stringify({ 
        message: 'Email đặt lại mật khẩu đã được gửi thành công',
        email: email,
        success: true
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Function error:', error);
    console.error('Error details:', {
      name: error.name,
      message: error.message,
      stack: error.stack
    });
    
    return new Response(
      JSON.stringify({ 
        error: 'Đã xảy ra lỗi khi xử lý yêu cầu',
        details: error.message 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
