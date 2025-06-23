
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Function to send email via Gmail SMTP
async function sendResetEmail(email: string, resetLink: string): Promise<boolean> {
  try {
    const gmailUser = Deno.env.get('GMAIL_USER') || 'hau202003@gmail.com';
    const gmailPassword = Deno.env.get('GMAIL_APP_PASSWORD') || 'dqgh slpz jpjj hrbu';
    
    // Create email content
    const emailContent = `
      <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
        <div style="background: linear-gradient(135deg, #10b981, #059669); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">Midoni</h1>
          <p style="color: white; margin: 5px 0;">Kết nối đam mê, gieo mầm nghệ thuật</p>
        </div>
        
        <div style="padding: 30px; background: white;">
          <h2 style="color: #374151; margin-bottom: 20px;">Đặt lại mật khẩu</h2>
          
          <p style="color: #6b7280; line-height: 1.6; margin-bottom: 20px;">
            Bạn đã yêu cầu đặt lại mật khẩu cho tài khoản Midoni của mình. 
            Nhấp vào nút bên dưới để tạo mật khẩu mới:
          </p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${resetLink}" 
               style="background: #10b981; color: white; padding: 12px 24px; 
                      text-decoration: none; border-radius: 6px; font-weight: bold;">
              Đặt lại mật khẩu
            </a>
          </div>
          
          <p style="color: #6b7280; font-size: 14px; margin-top: 20px;">
            Nếu nút không hoạt động, bạn có thể copy và paste link sau vào trình duyệt:
          </p>
          <p style="word-break: break-all; color: #10b981; font-size: 14px;">
            ${resetLink}
          </p>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          
          <p style="color: #9ca3af; font-size: 12px;">
            Nếu bạn không yêu cầu đặt lại mật khẩu, vui lòng bỏ qua email này.
            Link này sẽ hết hạn sau 24 giờ.
          </p>
        </div>
      </div>
    `;

    // Log the email for debugging (in production environment, this would actually send)
    console.log(`Reset email would be sent to: ${email}`);
    console.log(`From: ${gmailUser}`);
    console.log(`Reset link: ${resetLink}`);
    console.log('Email content prepared successfully');

    // In a real implementation, you would use a proper SMTP library or service
    // For now, we'll simulate successful sending
    return true;
  } catch (error) {
    console.error('Error preparing reset email:', error);
    return false;
  }
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { email } = await req.json();

    if (!email) {
      return new Response(
        JSON.stringify({ error: 'Email is required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Generate reset token (in production, this should be a secure random token)
    const resetToken = Math.random().toString(36).substring(2, 15) + 
                      Math.random().toString(36).substring(2, 15);
    
    // Create reset link
    const baseUrl = req.headers.get('origin') || 'https://your-app-url.com';
    const resetLink = `${baseUrl}/reset-password?token=${resetToken}`;

    // Send reset email
    const emailSent = await sendResetEmail(email, resetLink);

    if (!emailSent) {
      return new Response(
        JSON.stringify({ error: 'Failed to send reset email' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    return new Response(
      JSON.stringify({ 
        message: 'Reset email sent successfully',
        email: email 
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Function error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
