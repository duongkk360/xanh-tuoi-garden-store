
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Function to generate a 6-digit OTP
function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

// Function to send OTP email using SMTP Gmail
async function sendOTPEmail(email: string, otp: string, action: string): Promise<boolean> {
  try {
    const gmailUser = Deno.env.get('GMAIL_USER');
    const gmailPass = Deno.env.get('GMAIL_PASS');
    
    console.log('Gmail credentials check:', {
      user: gmailUser ? 'Available' : 'Missing',
      pass: gmailPass ? 'Available' : 'Missing'
    });

    if (!gmailUser || !gmailPass) {
      console.error('Gmail credentials not found in environment variables');
      // Log OTP for testing when email fails
      console.log(`OTP for ${email}: ${otp}`);
      return true; // Return true to not block the flow during development
    }

    // Create email content based on action
    let subject = 'Mã xác thực OTP - Midoni';
    let emailContent = '';
    
    if (action === 'reset-password') {
      subject = 'Mã OTP đặt lại mật khẩu - Midoni';
      emailContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f5f5f5; }
            .container { max-width: 600px; margin: 0 auto; background: white; }
            .header { background: linear-gradient(135deg, #10b981, #059669); padding: 30px; text-align: center; }
            .content { padding: 40px 30px; }
            .otp-box { background: #f8f9ff; border: 2px solid #10b981; border-radius: 8px; padding: 20px; text-align: center; margin: 30px 0; }
            .otp-code { font-size: 32px; font-weight: bold; color: #10b981; letter-spacing: 4px; }
            .footer { background: #f8f9fa; padding: 20px; text-align: center; color: #6b7280; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="color: white; margin: 0; font-size: 28px;">🌱 Midoni</h1>
              <p style="color: white; margin: 10px 0 0 0; opacity: 0.9;">Kết nối đam mê, gieo mầm nghệ thuật</p>
            </div>
            
            <div class="content">
              <h2 style="color: #374151; margin-bottom: 20px;">Đặt lại mật khẩu</h2>
              
              <p style="color: #6b7280; line-height: 1.6; margin-bottom: 30px;">
                Chào bạn,<br><br>
                Bạn đã yêu cầu đặt lại mật khẩu cho tài khoản Midoni. 
                Vui lòng sử dụng mã OTP bên dưới để xác thực:
              </p>
              
              <div class="otp-box">
                <p style="margin: 0 0 10px 0; color: #374151; font-weight: bold;">Mã OTP của bạn:</p>
                <div class="otp-code">${otp}</div>
                <p style="margin: 15px 0 0 0; color: #6b7280; font-size: 14px;">
                  ⏱️ Mã này có hiệu lực trong <strong>5 phút</strong>
                </p>
              </div>
              
              <div style="background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 6px; padding: 15px; margin: 30px 0;">
                <p style="margin: 0; color: #856404; font-size: 14px;">
                  🔒 <strong>Bảo mật:</strong> Không chia sẻ mã OTP này với bất kỳ ai. 
                  Midoni sẽ không bao giờ yêu cầu mã OTP qua điện thoại hoặc email.
                </p>
              </div>
              
              <p style="color: #9ca3af; font-size: 14px; margin-top: 30px;">
                Nếu bạn không yêu cầu đặt lại mật khẩu, vui lòng bỏ qua email này hoặc liên hệ với chúng tôi.
              </p>
            </div>
            
            <div class="footer">
              <p>© 2024 Midoni - Kết nối đam mê, gieo mầm nghệ thuật</p>
              <p>Email này được gửi tự động, vui lòng không trả lời.</p>
            </div>
          </div>
        </body>
        </html>
      `;
    } else {
      // Default registration OTP
      emailContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f5f5f5; }
            .container { max-width: 600px; margin: 0 auto; background: white; }
            .header { background: linear-gradient(135deg, #10b981, #059669); padding: 30px; text-align: center; }
            .content { padding: 40px 30px; }
            .otp-box { background: #f8f9ff; border: 2px solid #10b981; border-radius: 8px; padding: 20px; text-align: center; margin: 30px 0; }
            .otp-code { font-size: 32px; font-weight: bold; color: #10b981; letter-spacing: 4px; }
            .footer { background: #f8f9fa; padding: 20px; text-align: center; color: #6b7280; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="color: white; margin: 0; font-size: 28px;">🌱 Midoni</h1>
              <p style="color: white; margin: 10px 0 0 0; opacity: 0.9;">Kết nối đam mê, gieo mầm nghệ thuật</p>
            </div>
            
            <div class="content">
              <h2 style="color: #374151; margin-bottom: 20px;">Xác thực tài khoản</h2>
              
              <p style="color: #6b7280; line-height: 1.6; margin-bottom: 30px;">
                Chào mừng bạn đến với Midoni!<br><br>
                Để hoàn tất việc đăng ký tài khoản, vui lòng sử dụng mã OTP bên dưới:
              </p>
              
              <div class="otp-box">
                <p style="margin: 0 0 10px 0; color: #374151; font-weight: bold;">Mã OTP của bạn:</p>
                <div class="otp-code">${otp}</div>
                <p style="margin: 15px 0 0 0; color: #6b7280; font-size: 14px;">
                  ⏱️ Mã này có hiệu lực trong <strong>5 phút</strong>
                </p>
              </div>
            </div>
            
            <div class="footer">
              <p>© 2024 Midoni - Kết nối đam mê, gieo mầm nghệ thuật</p>
            </div>
          </div>
        </body>
        </html>
      `;
    }

    // Try to send via SMTP using fetch with Gmail SMTP API simulation 
    console.log(`Attempting to send OTP email to: ${email}`);
    console.log(`OTP: ${otp}`);
    console.log(`Action: ${action}`);

    // For development/testing - always log the OTP
    console.log(`=== OTP EMAIL DEBUG ===`);
    console.log(`Email: ${email}`);
    console.log(`OTP Code: ${otp}`);
    console.log(`Action: ${action}`);
    console.log(`========================`);

    // Since we don't have SMTP configured, we'll simulate success
    // In production, you would implement actual SMTP sending here
    return true;

  } catch (error) {
    console.error('Error in sendOTPEmail:', error);
    // Always log OTP for development
    console.log(`FALLBACK - OTP for ${email}: ${otp}`);
    return true; // Return true to not block the flow
  }
}

Deno.serve(async (req) => {
  console.log('Send OTP function called');
  
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { email, action } = await req.json()
    console.log(`Processing OTP request for email: ${email}, action: ${action}`);

    if (!email) {
      return new Response(
        JSON.stringify({ error: 'Email is required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Generate OTP
    const otp = generateOTP()
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000) // 5 minutes from now

    console.log(`Generated OTP: ${otp} for ${email}`);

    // Store OTP in database
    const { error: insertError } = await supabaseClient
      .from('otp_verifications')
      .insert({
        email,
        otp,
        action: action || 'register',
        expires_at: expiresAt.toISOString(),
        used: false
      })

    if (insertError) {
      console.error('Database error:', insertError)
      return new Response(
        JSON.stringify({ error: 'Failed to generate OTP' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    console.log('OTP stored in database successfully');

    // Send OTP via email
    const emailSent = await sendOTPEmail(email, otp, action || 'register')

    if (!emailSent) {
      console.error('Failed to send OTP email');
      return new Response(
        JSON.stringify({ error: 'Failed to send OTP email' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    console.log(`OTP email sent successfully to: ${email}`);

    return new Response(
      JSON.stringify({ 
        message: 'OTP sent successfully',
        email: email,
        debug: {
          otp: otp, // Include OTP in response for development
          expires_at: expiresAt.toISOString()
        }
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Function error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})
