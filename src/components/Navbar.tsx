
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search, User, Settings, BarChart3, Package, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/use-cart';
import { useAuth } from '@/hooks/useAuth';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { items } = useCart();
  const { user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`border-b backdrop-blur-md sticky top-0 z-40 transition-all duration-200 ${
      isScrolled ? 'bg-white/90 shadow-sm' : 'bg-white/80'
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/ac7adbf9-5903-4df1-bba3-3f652aee1c6c.png" 
            alt="Midoni Logo" 
            className="w-8 h-8"
          />
          <span className="font-bold text-xl">Midoni</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="hover:text-nature-600">Trang chủ</Link>
          <Link to="/products" className="hover:text-nature-600">Sản phẩm</Link>
          <Link to="/collections" className="hover:text-nature-600">Bộ sưu tập</Link>
          <Link to="/care-guide" className="hover:text-nature-600">Chăm sóc</Link>
          <Link to="/about" className="hover:text-nature-600">Về chúng tôi</Link>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-gray-700 hover:text-nature-600">
            <Search className="w-5 h-5" />
          </Button>
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative text-gray-700 hover:text-nature-600">
              <ShoppingCart className="w-5 h-5" />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-nature-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </Button>
          </Link>
          
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-nature-500 text-nature-700 hover:bg-nature-50">
                  <User className="w-4 h-4 mr-2" />
                  {user.full_name}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>
                  <Link to="/profile" className="w-full flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    Thông tin tài khoản
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/wishlist" className="w-full flex items-center">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Sản phẩm yêu thích
                  </Link>
                </DropdownMenuItem>
                
                {isAdmin() && (
                  <>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link to="/admin/dashboard" className="w-full flex items-center">
                        <BarChart3 className="w-4 h-4 mr-2" />
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link to="/admin/products" className="w-full flex items-center">
                        <Package className="w-4 h-4 mr-2" />
                        Quản lý sản phẩm
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link to="/admin/orders" className="w-full flex items-center">
                        <Settings className="w-4 h-4 mr-2" />
                        Quản lý đơn hàng
                      </Link>
                    </DropdownMenuItem>
                  </>
                )}
                
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-red-600 cursor-pointer">
                  Đăng xuất
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link to="/login">
              <Button variant="outline" className="border-nature-500 text-nature-700 hover:bg-nature-50">
                Đăng nhập
              </Button>
            </Link>
          )}
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative text-gray-700">
              <ShoppingCart className="w-5 h-5" />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-nature-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </Button>
          </Link>
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pb-4 px-4 border-t">
          <div className="flex flex-col space-y-3 pt-3">
            <Link to="/" className="px-3 py-2 hover:bg-nature-50 rounded-md" onClick={toggleMenu}>Trang chủ</Link>
            <Link to="/products" className="px-3 py-2 hover:bg-nature-50 rounded-md" onClick={toggleMenu}>Sản phẩm</Link>
            <Link to="/collections" className="px-3 py-2 hover:bg-nature-50 rounded-md" onClick={toggleMenu}>Bộ sưu tập</Link>
            <Link to="/care-guide" className="px-3 py-2 hover:bg-nature-50 rounded-md" onClick={toggleMenu}>Chăm sóc</Link>
            <Link to="/about" className="px-3 py-2 hover:bg-nature-50 rounded-md" onClick={toggleMenu}>Về chúng tôi</Link>
            
            {user ? (
              <>
                <div className="h-px bg-gray-200 my-1"></div>
                <Link to="/profile" className="px-3 py-2 hover:bg-nature-50 rounded-md" onClick={toggleMenu}>Thông tin tài khoản</Link>
                <Link to="/wishlist" className="px-3 py-2 hover:bg-nature-50 rounded-md" onClick={toggleMenu}>Sản phẩm yêu thích</Link>
                
                {isAdmin() && (
                  <>
                    <Link to="/admin/dashboard" className="px-3 py-2 hover:bg-nature-50 rounded-md" onClick={toggleMenu}>Dashboard</Link>
                    <Link to="/admin/products" className="px-3 py-2 hover:bg-nature-50 rounded-md" onClick={toggleMenu}>Quản lý sản phẩm</Link>
                    <Link to="/admin/orders" className="px-3 py-2 hover:bg-nature-50 rounded-md" onClick={toggleMenu}>Quản lý đơn hàng</Link>
                  </>
                )}
                
                <button 
                  className="px-3 py-2 text-left text-red-600 hover:bg-red-50 rounded-md" 
                  onClick={() => {
                    handleLogout();
                    toggleMenu();
                  }}
                >
                  Đăng xuất
                </button>
              </>
            ) : (
              <Link to="/login" className="px-3 py-2 bg-nature-50 text-nature-700 rounded-md text-center font-medium" onClick={toggleMenu}>Đăng nhập</Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
