
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Search, ArrowRight, Sparkles, Leaf, Eye } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { supabase } from '@/integrations/supabase/client';

// Care guide categories and content
const careCategories = [
  { id: 'basics', name: 'Kiến thức cơ bản', icon: '🌱', color: 'from-green-400 to-emerald-600' },
  { id: 'watering', name: 'Tưới nước', icon: '💧', color: 'from-blue-400 to-cyan-600' },
  { id: 'light', name: 'Ánh sáng', icon: '☀️', color: 'from-yellow-400 to-orange-500' },
  { id: 'soil', name: 'Đất trồng', icon: '🥥', color: 'from-amber-400 to-orange-600' },
  { id: 'fertilizer', name: 'Phân bón', icon: '🌿', color: 'from-lime-400 to-green-600' },
  { id: 'pests', name: 'Sâu bệnh hại', icon: '🐛', color: 'from-red-400 to-pink-600' },
];

interface CareGuide {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  image_url: string;
  slug: string;
  featured: boolean;
}

const CareGuide = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [careGuides, setCareGuides] = useState<CareGuide[]>([]);
  const [featuredArticles, setFeaturedArticles] = useState<CareGuide[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCareGuides = async () => {
      try {
        const { data, error } = await supabase
          .from('care_guides')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Error fetching care guides:', error);
          return;
        }

        setCareGuides(data || []);
        setFeaturedArticles(data?.filter(guide => guide.featured) || []);
      } catch (error) {
        console.error('Error fetching care guides:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCareGuides();
  }, []);

  const filteredGuides = activeTab === 'all' 
    ? careGuides.filter(guide => 
        guide.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        guide.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      ) 
    : careGuides.filter(guide => 
        guide.category === activeTab &&
        (guide.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
         guide.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
      );

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-nature-50 via-emerald-50 to-green-100 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-nature-600 mx-auto mb-4"></div>
            <p className="text-nature-600 text-lg">Đang tải hướng dẫn chăm sóc...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      
      {/* Hero Section với Background động */}
      <div className="relative min-h-[70vh] bg-gradient-to-br from-nature-900 via-emerald-800 to-green-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
          
          {/* Floating particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              ></div>
            ))}
          </div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
        </div>

        <div className="relative container mx-auto px-4 flex items-center min-h-[70vh]">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="h-8 w-8 text-yellow-400 mr-3 animate-pulse" />
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-green-200 to-emerald-300 bg-clip-text text-transparent">
                Hướng dẫn chăm sóc cây
              </h1>
              <Sparkles className="h-8 w-8 text-yellow-400 ml-3 animate-pulse" />
            </div>
            
            <p className="text-xl md:text-2xl mb-8 text-green-100 leading-relaxed">
              🌿 Khám phá bí quyết chăm sóc cây cảnh chuyên nghiệp 🌿
              <br />
              <span className="text-lg">Từ cơ bản đến nâng cao, giúp cây phát triển khỏe mạnh và tươi tốt</span>
            </p>
            
            {/* Search với hiệu ứng */}
            <div className="max-w-md mx-auto mb-8 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-1">
                <div className="relative">
                  <Search className="absolute left-4 top-3 h-5 w-5 text-white/70" />
                  <Input
                    type="search"
                    placeholder="Tìm kiếm hướng dẫn..."
                    className="pl-12 bg-white/20 border-white/30 text-white placeholder:text-white/70 rounded-full focus:bg-white/30 transition-all duration-300"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center group cursor-pointer">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                  <div className="text-3xl font-bold text-green-300">{careGuides.length}+</div>
                  <div className="text-white/80">Bài hướng dẫn</div>
                </div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                  <div className="text-3xl font-bold text-blue-300">6</div>
                  <div className="text-white/80">Chủ đề chính</div>
                </div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                  <div className="text-3xl font-bold text-yellow-300">100%</div>
                  <div className="text-white/80">Miễn phí</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-nature-50 via-white to-emerald-50 py-16">
        <div className="container mx-auto px-4">
          
          {/* Featured Articles */}
          {searchTerm === '' && featuredArticles.length > 0 && (
            <div className="mb-16">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-nature-600 mr-2" />
                  <h2 className="text-3xl font-bold text-nature-900">Bài viết nổi bật</h2>
                  <Eye className="h-6 w-6 text-nature-600 ml-2" />
                </div>
                <div className="w-24 h-1 bg-gradient-to-r from-nature-400 to-emerald-500 mx-auto rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredArticles.slice(0, 2).map((article, index) => (
                  <Link to={`/care-guide/${article.slug}`} key={article.id} className="group">
                    <div className="relative h-80 overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
                      <img 
                        src={article.image_url} 
                        alt={article.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      
                      {/* Floating badge */}
                      <div className="absolute top-4 left-4">
                        <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 animate-pulse">
                          <Sparkles className="h-3 w-3" />
                          Nổi bật
                        </div>
                      </div>
                      
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="mb-3">
                          <span className="inline-block px-3 py-1 text-xs bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30">
                            {careCategories.find(cat => cat.id === article.category)?.icon} {" "}
                            {careCategories.find(cat => cat.id === article.category)?.name}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-white/80 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                        <Button 
                          variant="outline" 
                          className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-nature-900 transition-all duration-300"
                        >
                          Đọc ngay <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
          
          {/* Categories Tabs */}
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
            <div className="flex justify-center mb-12">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-white/50">
                <TabsList className="bg-transparent">
                  <TabsTrigger 
                    value="all" 
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-nature-500 data-[state=active]:to-emerald-600 data-[state=active]:text-white rounded-xl px-6 py-3 font-medium transition-all duration-300"
                  >
                    <Leaf className="mr-2 h-4 w-4" />
                    Tất cả
                  </TabsTrigger>
                  {careCategories.map((category) => (
                    <TabsTrigger 
                      key={category.id} 
                      value={category.id}
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:text-white rounded-xl px-4 py-3 font-medium transition-all duration-300 hover:bg-white/50"
                      style={{
                        backgroundImage: activeTab === category.id ? `linear-gradient(to right, var(--tw-gradient-stops))` : undefined
                      }}
                    >
                      <span className="mr-2 text-lg">{category.icon}</span>
                      <span className="hidden md:inline">{category.name}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
            </div>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredGuides.map((guide, index) => (
                  <Card key={guide.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-0 bg-white/80 backdrop-blur-sm">
                    <Link to={`/care-guide/${guide.slug}`}>
                      <div className="h-48 overflow-hidden relative">
                        <img 
                          src={guide.image_url} 
                          alt={guide.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Category badge with gradient */}
                        <div className="absolute top-3 left-3">
                          <div className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${careCategories.find(cat => cat.id === guide.category)?.color || 'from-gray-400 to-gray-600'} shadow-lg`}>
                            {careCategories.find(cat => cat.id === guide.category)?.icon} {" "}
                            {careCategories.find(cat => cat.id === guide.category)?.name}
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold mb-3 group-hover:text-nature-600 transition-colors line-clamp-2">
                          {guide.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                          {guide.excerpt}
                        </p>
                        
                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-xs text-gray-500">
                            {Math.ceil(guide.content.length / 1000)} phút đọc
                          </span>
                          <ArrowRight className="h-4 w-4 text-nature-500 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </CardContent>
                    </Link>
                  </Card>
                ))}
              </div>
              
              {filteredGuides.length === 0 && (
                <div className="text-center py-16">
                  <div className="mb-4">
                    <Leaf className="h-16 w-16 text-gray-300 mx-auto" />
                  </div>
                  <p className="text-gray-500 text-lg">Không tìm thấy bài hướng dẫn phù hợp.</p>
                  <p className="text-gray-400 text-sm mt-2">Hãy thử từ khóa khác hoặc chọn danh mục khác.</p>
                </div>
              )}
            </TabsContent>
            
            {careCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredGuides.map((guide) => (
                    <Card key={guide.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-0 bg-white/80 backdrop-blur-sm">
                      <Link to={`/care-guide/${guide.slug}`}>
                        <div className="h-48 overflow-hidden relative">
                          <img 
                            src={guide.image_url} 
                            alt={guide.title} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          
                          <div className="absolute top-3 left-3">
                            <div className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${category.color} shadow-lg`}>
                              {category.icon} {category.name}
                            </div>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-lg font-bold mb-3 group-hover:text-nature-600 transition-colors line-clamp-2">
                            {guide.title}
                          </h3>
                          <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                            {guide.excerpt}
                          </p>
                          
                          <div className="mt-4 flex items-center justify-between">
                            <span className="text-xs text-gray-500">
                              {Math.ceil(guide.content.length / 1000)} phút đọc
                            </span>
                            <ArrowRight className="h-4 w-4 text-nature-500 group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </CardContent>
                      </Link>
                    </Card>
                  ))}
                </div>
                
                {filteredGuides.length === 0 && (
                  <div className="text-center py-16">
                    <div className="mb-4">
                      <div className={`h-16 w-16 mx-auto rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl`}>
                        {category.icon}
                      </div>
                    </div>
                    <p className="text-gray-500 text-lg">Không tìm thấy bài hướng dẫn phù hợp trong danh mục này.</p>
                    <p className="text-gray-400 text-sm mt-2">Hãy thử từ khóa khác hoặc chọn danh mục khác.</p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
          
          {/* Newsletter với hiệu ứng gradient */}
          <div className="mt-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-nature-400 via-emerald-500 to-green-500 opacity-90"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
            
            <div className="relative rounded-2xl p-12 text-center text-white">
              <div className="max-w-2xl mx-auto">
                <div className="flex items-center justify-center mb-4">
                  <Sparkles className="h-8 w-8 text-yellow-300 mr-3 animate-pulse" />
                  <h2 className="text-3xl font-bold">Nhận thông tin chăm sóc cây</h2>
                  <Sparkles className="h-8 w-8 text-yellow-300 ml-3 animate-pulse" />
                </div>
                <p className="mb-8 text-lg text-green-100">
                  Đăng ký để nhận các mẹo hữu ích và hướng dẫn chăm sóc cây mới nhất từ chuyên gia.
                </p>
                <div className="flex max-w-md mx-auto bg-white/20 backdrop-blur-sm rounded-full p-2">
                  <Input
                    type="email"
                    placeholder="Email của bạn"
                    className="flex-1 bg-transparent border-0 text-white placeholder:text-white/70 rounded-l-full focus:ring-0"
                  />
                  <Button className="bg-white text-nature-600 hover:bg-green-50 rounded-full px-8 font-bold">
                    Đăng ký
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CareGuide;
