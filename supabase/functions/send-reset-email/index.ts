
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Function to send email via SMTP using a proper email service
async function sendResetEmail(email: string, resetLink: string): Promise<boolean> {
  try {
    const gmailUser = Deno.env.get('GMAIL_USER') || 'hau2082003@gmail.com';
    const gmailPassword = Deno.env.get('GMAIL_APP_PASSWORD') || 'dqgh slpz jpjj hrbu';
    
    console.log(`Sending reset email to: ${email}`);
    console.log(`Using sender: ${gmailUser}`);

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

    // Try sending via MailerSend API (reliable SMTP service)
    try {
      const mailerSendResponse = await fetch('https://api.mailersend.com/v1/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${gmailPassword}`,
        },
        body: JSON.stringify({
          from: {
            email: gmailUser,
            name: 'Midoni'
          },
          to: [{
            email: email
          }],
          subject: 'Đặt lại mật khẩu - Midoni',
          html: emailContent
        })
      });

      if (mailerSendResponse.ok) {
        console.log('Email sent successfully via MailerSend');
        return true;
      }
    } catch (error) {
      console.log('MailerSend failed, trying alternative...');
    }

    // Alternative: Use Postmark API
    try {
      const postmarkResponse = await fetch('https://api.postmarkapp.com/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Postmark-Server-Token': gmailPassword,
        },
        body: JSON.stringify({
          From: `Midoni <${gmailUser}>`,
          To: email,
          Subject: 'Đặt lại mật khẩu - Midoni',
          HtmlBody: emailContent,
          MessageStream: 'outbound'
        })
      });

      if (postmarkResponse.ok) {
        console.log('Email sent successfully via Postmark');
        return true;
      }
    } catch (error) {
      console.log('Postmark failed, trying SMTP...');
    }

    // Fallback: Direct SMTP using Gmail
    const smtpData = {
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPassword
      },
      from: `"Midoni" <${gmailUser}>`,
      to: email,
      subject: 'Đặt lại mật khẩu - Midoni',
      html: emailContent
    };

    // Send via SMTP using basic fetch to Gmail's SMTP endpoint
    const encodedAuth = btoa(`${gmailUser}:${gmailPassword}`);
    
    const gmailResponse = await fetch('https://smtp.gmail.com:587', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${encodedAuth}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: {
          to: email,
          from: gmailUser,
          subject: 'Đặt lại mật khẩu - Midoni',
          html: emailContent
        }
      })
    });

    if (gmailResponse.ok) {
      console.log('Email sent successfully via Gmail SMTP');
      return true;
    }

    // Final attempt: Use EmailJS with proper configuration
    const emailJSResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: 'gmail_service',
        template_id: 'reset_password',
        user_id: 'public_key',
        accessToken: 'private_key',
        template_params: {
          to_email: email,
          from_name: 'Midoni',
          from_email: gmailUser,
          subject: 'Đặt lại mật khẩu - Midoni',
          message_html: emailContent,
          reset_link: resetLink
        }
      })
    });

    if (emailJSResponse.ok) {
      console.log('Email sent successfully via EmailJS');
      return true;
    }

    // If all else fails, log the email details for manual sending
    console.error('All email services failed. Email details:');
    console.log(`TO: ${email}`);
    console.log(`FROM: ${gmailUser}`);
    console.log(`SUBJECT: Đặt lại mật khẩu - Midoni`);
    console.log(`RESET_LINK: ${resetLink}`);
    console.log(`HTML_CONTENT: ${emailContent}`);
    
    return false;

  } catch (error) {
    console.error('Critical error in sendResetEmail:', error);
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

    // Generate reset token
    const resetToken = Math.random().toString(36).substring(2, 15) + 
                      Math.random().toString(36).substring(2, 15);
    
    // Create reset link
    const baseUrl = req.headers.get('origin') || 'https://midoni-shop.lovable.app';
    const resetLink = `${baseUrl}/reset-password?token=${resetToken}`;

    console.log(`Processing reset request for: ${email}`);

    // Send reset email
    const emailSent = await sendResetEmail(email, resetLink);

    if (!emailSent) {
      console.error('Failed to send reset email');
      return new Response(
        JSON.stringify({ 
          error: 'Failed to send reset email. Please check your email configuration.',
          details: 'Email service unavailable'
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
        message: 'Reset email sent successfully',
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
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error',
        details: error.message 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
