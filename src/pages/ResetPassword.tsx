
import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Lock, Eye, EyeOff, AlertCircle, CheckCircle } from 'lucide-react';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const email = searchParams.get('email');

  useEffect(() => {
    if (!token) {
      toast.error("Link không hợp lệ hoặc đã hết hạn");
      navigate('/forgot-password');
    }
  }, [token, navigate]);

  const validatePassword = (password: string) => {
    const errors: string[] = [];
    
    if (password.length < 8) {
      errors.push("Mật khẩu phải có ít nhất 8 ký tự");
    }
    
    if (!/(?=.*[a-z])/.test(password)) {
      errors.push("Mật khẩu phải có ít nhất 1 chữ thường");
    }
    
    if (!/(?=.*[A-Z])/.test(password)) {
      errors.push("Mật khẩu phải có ít nhất 1 chữ hoa");
    }
    
    if (!/(?=.*\d)/.test(password)) {
      errors.push("Mật khẩu phải có ít nhất 1 chữ số");
    }
    
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    setErrors({});
    
    // Validate passwords
    const passwordErrors = validatePassword(password);
    const newErrors: {[key: string]: string} = {};
    
    if (passwordErrors.length > 0) {
      newErrors.password = passwordErrors.join(", ");
    }
    
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Mật khẩu không khớp";
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Simulate password reset process
      // In a real application, you would send the token and new password to your backend
      console.log('Resetting password with token:', token);
      console.log('New password for email:', email);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success("Đặt lại mật khẩu thành công!");
      toast.success("Bạn có thể đăng nhập với mật khẩu mới");
      
      // Redirect to login page
      navigate('/login');
      
    } catch (error) {
      console.error('Error resetting password:', error);
      toast.error("Có lỗi xảy ra khi đặt lại mật khẩu. Vui lòng thử lại!");
    } finally {
      setIsLoading(false);
    }
  };

  const getPasswordStrength = (password: string) => {
    const errors = validatePassword(password);
    if (errors.length === 0) return { level: 'strong', text: 'Mạnh', color: 'text-green-600' };
    if (errors.length <= 2) return { level: 'medium', text: 'Trung bình', color: 'text-yellow-600' };
    return { level: 'weak', text: 'Yếu', color: 'text-red-600' };
  };

  if (!token) {
    return null;
  }

  const passwordStrength = password ? getPasswordStrength(password) : null;

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">Đặt lại mật khẩu</CardTitle>
              <CardDescription className="text-center">
                {email ? `Tạo mật khẩu mới cho ${email}` : 'Tạo mật khẩu mới cho tài khoản của bạn'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="password">Mật khẩu mới</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className={`pl-10 pr-10 ${errors.password ? 'border-red-500' : ''}`}
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setErrors(prev => ({ ...prev, password: '' }));
                      }}
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 hover:text-gray-600"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  
                  {password && passwordStrength && (
                    <div className="flex items-center gap-2 text-sm">
                      <div className="flex-1">
                        <div className="flex gap-1">
                          <div className={`h-1 w-full rounded ${
                            passwordStrength.level === 'weak' ? 'bg-red-200' : 
                            passwordStrength.level === 'medium' ? 'bg-yellow-200' : 'bg-green-200'
                          }`}>
                            <div className={`h-full rounded transition-all duration-300 ${
                              passwordStrength.level === 'weak' ? 'w-1/3 bg-red-500' : 
                              passwordStrength.level === 'medium' ? 'w-2/3 bg-yellow-500' : 'w-full bg-green-500'
                            }`}></div>
                          </div>
                        </div>
                      </div>
                      <span className={`text-xs font-medium ${passwordStrength.color}`}>
                        {passwordStrength.text}
                      </span>
                    </div>
                  )}
                  
                  {errors.password && (
                    <div className="flex items-center gap-2 text-red-600 text-sm">
                      <AlertCircle className="h-4 w-4" />
                      <span>{errors.password}</span>
                    </div>
                  )}
                  
                  <div className="text-xs text-gray-500 space-y-1">
                    <p>Mật khẩu phải có:</p>
                    <ul className="ml-4 space-y-1">
                      <li className="flex items-center gap-2">
                        {password.length >= 8 ? 
                          <CheckCircle className="h-3 w-3 text-green-500" /> : 
                          <div className="h-3 w-3 rounded-full border border-gray-300" />
                        }
                        Ít nhất 8 ký tự
                      </li>
                      <li className="flex items-center gap-2">
                        {/(?=.*[a-z])/.test(password) ? 
                          <CheckCircle className="h-3 w-3 text-green-500" /> : 
                          <div className="h-3 w-3 rounded-full border border-gray-300" />
                        }
                        Ít nhất 1 chữ thường
                      </li>
                      <li className="flex items-center gap-2">
                        {/(?=.*[A-Z])/.test(password) ? 
                          <CheckCircle className="h-3 w-3 text-green-500" /> : 
                          <div className="h-3 w-3 rounded-full border border-gray-300" />
                        }
                        Ít nhất 1 chữ hoa
                      </li>
                      <li className="flex items-center gap-2">
                        {/(?=.*\d)/.test(password) ? 
                          <CheckCircle className="h-3 w-3 text-green-500" /> : 
                          <div className="h-3 w-3 rounded-full border border-gray-300" />
                        }
                        Ít nhất 1 chữ số
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Xác nhận mật khẩu mới</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className={`pl-10 pr-10 ${errors.confirmPassword ? 'border-red-500' : ''}`}
                      value={confirmPassword}
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                        setErrors(prev => ({ ...prev, confirmPassword: '' }));
                      }}
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 hover:text-gray-600"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <div className="flex items-center gap-2 text-red-600 text-sm">
                      <AlertCircle className="h-4 w-4" />
                      <span>{errors.confirmPassword}</span>
                    </div>
                  )}
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-nature-600 hover:bg-nature-700 mt-6"
                  disabled={isLoading || !password || !confirmPassword}
                >
                  {isLoading ? "Đang xử lý..." : "Đặt lại mật khẩu"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ResetPassword;
