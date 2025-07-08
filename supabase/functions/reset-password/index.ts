
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  console.log('Reset password function called');
  
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { email, password } = await req.json()
    
    console.log(`Processing reset password request for email: ${email}`);

    if (!email || !password) {
      return new Response(
        JSON.stringify({ error: 'Email và mật khẩu không được để trống' }),
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
        JSON.stringify({ error: 'Email không hợp lệ' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Validate password format
    if (password.length < 8) {
      return new Response(
        JSON.stringify({ error: 'Mật khẩu phải có ít nhất 8 ký tự' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // First, get user by email
    const { data: userData, error: userError } = await supabaseClient
      .from('accounts')
      .select('account_id')
      .eq('email', email)
      .single();
    
    if (userError || !userData) {
      console.error('User not found:', userError);
      return new Response(
        JSON.stringify({ error: 'Không tìm thấy tài khoản với email này' }),
        { 
          status: 404, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Update password in accounts table directly
    const { error: updateError } = await supabaseClient
      .from('accounts')
      .update({ password_hash: password })
      .eq('email', email);

    if (updateError) {
      console.error('Error updating password:', updateError);
      return new Response(
        JSON.stringify({ error: 'Có lỗi xảy ra khi cập nhật mật khẩu' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Mark all OTPs for this email as used
    await supabaseClient
      .from('otp_verifications')
      .update({ used: true })
      .eq('email', email)
      .eq('action', 'reset-password');
      
    console.log(`Password reset successfully for: ${email}`);

    return new Response(
      JSON.stringify({ message: 'Đặt lại mật khẩu thành công' }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Function error:', error);
    return new Response(
      JSON.stringify({ error: 'Lỗi máy chủ nội bộ' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})
