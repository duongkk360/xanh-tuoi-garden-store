
import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { toast } from "sonner";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, ArrowLeft, RefreshCw } from 'lucide-react';
import { useOTP } from '@/hooks/useOTP';

const VerifyResetOTP = () => {
  const [otp, setOtp] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(300); // 5 minutes
  const { verifyOTP, sendOTP, loading } = useOTP();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');

  useEffect(() => {
    if (!email) {
      toast.error("Email không hợp lệ");
      navigate('/forgot-password');
      return;
    }

    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [email, navigate]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleVerifyOTP = async () => {
    if (!otp || otp.length !== 6) {
      toast.error("Vui lòng nhập đầy đủ mã OTP");
      return;
    }

    if (!email) {
      toast.error("Email không hợp lệ");
      return;
    }

    try {
      console.log('Verifying OTP:', otp, 'for email:', email);
      
      const success = await verifyOTP(email, otp, 'reset-password');
      
      if (success) {
        console.log('OTP verified successfully');
        toast.success("Xác thực OTP thành công!");
        
        // Redirect to reset password page with email and a token
        navigate(`/reset-password?email=${encodeURIComponent(email)}&verified=true`);
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      toast.error("Có lỗi xảy ra khi xác thực OTP");
    }
  };

  const handleResendOTP = async () => {
    if (!email) return;

    try {
      const success = await sendOTP(email, 'reset-password');
      if (success) {
        toast.success("Mã OTP mới đã được gửi!");
        setTimeRemaining(300); // Reset timer
        setOtp(''); // Clear current OTP
      }
    } catch (error) {
      console.error('Error resending OTP:', error);
      toast.error("Có lỗi xảy ra khi gửi lại mã OTP");
    }
  };

  if (!email) {
    return null;
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader className="space-y-1 text-center">
              <div className="mx-auto bg-blue-50 p-3 rounded-full mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl font-bold">Xác thực OTP</CardTitle>
              <CardDescription>
                Nhập mã OTP đã được gửi đến<br />
                <strong>{email}</strong>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="otp" className="text-center block">
                  Mã OTP (6 chữ số)
                </Label>
                <div className="flex justify-center">
                  <InputOTP
                    maxLength={6}
                    value={otp}
                    onChange={(value) => setOtp(value)}
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
              </div>

              <div className="text-center space-y-2">
                <div className="text-sm text-gray-600">
                  Thời gian còn lại: <span className="font-mono font-bold text-red-600">
                    {formatTime(timeRemaining)}
                  </span>
                </div>
                
                {timeRemaining > 0 ? (
                  <p className="text-xs text-gray-500">
                    Mã OTP sẽ hết hạn sau {formatTime(timeRemaining)}
                  </p>
                ) : (
                  <p className="text-xs text-red-600">
                    Mã OTP đã hết hạn. Vui lòng gửi lại mã mới.
                  </p>
                )}
              </div>

              <div className="space-y-3">
                <Button
                  onClick={handleVerifyOTP}
                  disabled={loading || otp.length !== 6}
                  className="w-full bg-nature-600 hover:bg-nature-700"
                >
                  {loading ? "Đang xác thực..." : "Xác thực OTP"}
                </Button>

                <Button
                  variant="outline"
                  onClick={handleResendOTP}
                  disabled={loading || timeRemaining > 240} // Allow resend only in last 60 seconds or when expired
                  className="w-full"
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  {loading ? "Đang gửi..." : "Gửi lại mã OTP"}
                </Button>
              </div>

              <div className="text-center">
                <Button
                  variant="ghost"
                  onClick={() => navigate('/forgot-password')}
                  className="text-sm text-nature-600 hover:text-nature-700"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Quay lại
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VerifyResetOTP;
