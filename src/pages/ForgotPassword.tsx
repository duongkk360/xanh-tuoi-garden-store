
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, ArrowLeft, AlertCircle } from 'lucide-react';
import { useOTP } from '@/hooks/useOTP';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const { sendOTP, loading } = useOTP();
  const navigate = useNavigate();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset error state
    setError('');
    
    // Validate email
    if (!email) {
      setError('Vui lòng nhập địa chỉ email');
      return;
    }
    
    if (!validateEmail(email)) {
      setError('Địa chỉ email không hợp lệ');
      return;
    }
    
    try {
      console.log('Sending OTP to:', email);
      
      const success = await sendOTP(email, 'reset-password');
      
      if (success) {
        console.log('OTP sent successfully');
        toast.success("Mã OTP đã được gửi đến email của bạn!");
        setIsSubmitted(true);
        
        // Redirect to OTP verification page after 2 seconds
        setTimeout(() => {
          navigate(`/verify-reset-otp?email=${encodeURIComponent(email)}`);
        }, 2000);
      } else {
        setError("Có lỗi xảy ra khi gửi mã OTP. Vui lòng thử lại!");
      }
      
    } catch (error: any) {
      console.error('Error sending OTP:', error);
      
      let errorMessage = "Có lỗi xảy ra khi gửi OTP. Vui lòng thử lại!";
      
      if (error?.message) {
        if (error.message.includes('network') || error.message.includes('fetch')) {
          errorMessage = "Lỗi kết nối mạng. Vui lòng kiểm tra kết nối internet và thử lại.";
        } else if (error.message.includes('timeout')) {
          errorMessage = "Hết thời gian chờ. Vui lòng thử lại.";
        } else {
          errorMessage = error.message;
        }
      }
      
      setError(errorMessage);
      toast.error(errorMessage);
    }
  };

  const handleRetry = () => {
    setIsSubmitted(false);
    setError('');
    setEmail('');
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader className="space-y-1">
              {!isSubmitted && (
                <>
                  <CardTitle className="text-2xl font-bold text-center">Quên mật khẩu</CardTitle>
                  <CardDescription className="text-center">
                    Nhập email của bạn để nhận mã OTP đặt lại mật khẩu
                  </CardDescription>
                </>
              )}
              {isSubmitted && (
                <>
                  <div className="mx-auto bg-green-50 p-3 rounded-full">
                    <Mail className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-center mt-4">Kiểm tra email của bạn</CardTitle>
                  <CardDescription className="text-center">
                    Chúng tôi đã gửi mã OTP đến <strong>{email}</strong>
                  </CardDescription>
                </>
              )}
            </CardHeader>
            <CardContent>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        className={`pl-10 ${error ? 'border-red-500' : ''}`}
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setError(''); // Clear error when typing
                        }}
                        required
                      />
                    </div>
                    {error && (
                      <div className="flex items-center gap-2 text-red-600 text-sm">
                        <AlertCircle className="h-4 w-4" />
                        <span>{error}</span>
                      </div>
                    )}
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-nature-600 hover:bg-nature-700"
                    disabled={loading}
                  >
                    {loading ? "Đang gửi..." : "Gửi mã OTP"}
                  </Button>
                </form>
              ) : (
                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-800 text-center mb-2">
                      <strong>Mã OTP đã được gửi!</strong>
                    </p>
                    <p className="text-sm text-blue-700 text-center">
                      Vui lòng kiểm tra email của bạn và nhập mã OTP để đặt lại mật khẩu.
                      Bạn sẽ được chuyển đến trang nhập mã OTP trong giây lát.
                    </p>
                  </div>
                  
                  <div className="text-center space-y-2">
                    <p className="text-sm text-gray-600">
                      Không nhận được email?
                    </p>
                    <ul className="text-xs text-gray-500 space-y-1">
                      <li>• Kiểm tra thư mục spam/rác</li>
                      <li>• Đợi vài phút để email đến</li>
                      <li>• Kiểm tra địa chỉ email đã nhập</li>
                    </ul>
                  </div>
                  
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={handleRetry}
                  >
                    Thử lại với email khác
                  </Button>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex flex-col items-center">
              <Link 
                to="/login"
                className="flex items-center text-sm text-nature-600 hover:text-nature-700"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Quay lại trang đăng nhập
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ForgotPassword;
