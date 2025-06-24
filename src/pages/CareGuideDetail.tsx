
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Share2, BookmarkPlus, ThumbsUp, Clock, Eye, Sparkles } from 'lucide-react';
import { useCareGuideBySlug, useRelatedCareGuides } from '@/hooks/useCareGuides';

// Care guide categories for displaying
const careCategories = [
  { id: 'basics', name: 'Kiến thức cơ bản', icon: '🌱', color: 'from-green-400 to-emerald-600' },
  { id: 'watering', name: 'Tưới nước', icon: '💧', color: 'from-blue-400 to-cyan-600' },
  { id: 'light', name: 'Ánh sáng', icon: '☀️', color: 'from-yellow-400 to-orange-500' },
  { id: 'soil', name: 'Đất trồng', icon: '🥥', color: 'from-amber-400 to-orange-600' },
  { id: 'fertilizer', name: 'Phân bón', icon: '🌿', color: 'from-lime-400 to-green-600' },
  { id: 'pests', name: 'Sâu bệnh hại', icon: '🐛', color: 'from-red-400 to-pink-600' },
];

const CareGuideDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const { data: article, isLoading, error } = useCareGuideBySlug(slug || '');
  const { data: relatedArticles = [] } = useRelatedCareGuides(
    article?.id || 0, 
    article?.category || '', 
    3
  );
  
  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-nature-50 via-white to-emerald-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-nature-600 mx-auto mb-4"></div>
            <p className="text-nature-600 text-lg">Đang tải bài viết...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  
  if (error || !article) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-nature-50 via-white to-emerald-50 flex items-center justify-center">
          <div className="text-center max-w-md mx-auto p-8">
            <div className="mb-6">
              <div className="h-20 w-20 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full mx-auto flex items-center justify-center">
                <Eye className="h-10 w-10 text-gray-400" />
              </div>
            </div>
            <h1 className="text-2xl font-bold mb-4 text-gray-800">Bài viết không tồn tại</h1>
            <p className="mb-6 text-gray-600">Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
            <Button asChild className="bg-gradient-to-r from-nature-500 to-emerald-600 hover:from-nature-600 hover:to-emerald-700">
              <Link to="/care-guide">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Quay lại trang hướng dẫn
              </Link>
            </Button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const categoryInfo = careCategories.find(cat => cat.id === article.category);
  const readingTime = Math.ceil(article.content.length / 1000);
  
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-nature-50 via-white to-emerald-50 min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-white/80 backdrop-blur-sm py-4 border-b border-white/50">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 text-sm">
              <Link to="/" className="text-nature-600 hover:text-nature-800 transition-colors">Trang chủ</Link>
              <span className="text-gray-400">/</span>
              <Link to="/care-guide" className="text-nature-600 hover:text-nature-800 transition-colors">Chăm sóc</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-800 font-medium line-clamp-1">{article.title}</span>
            </div>
          </div>
        </div>
        
        {/* Hero */}
        <div className="relative overflow-hidden">
          <div className="h-96 md:h-[500px] w-full relative">
            <img
              src={article.image_url}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            
            {/* Floating particles for visual appeal */}
            <div className="absolute inset-0">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 2}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
          
          <div className="container mx-auto px-4 relative -mt-48 md:-mt-56">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl max-w-4xl mx-auto p-8 md:p-12 border border-white/50">
              <div className="mb-6">
                <div className={`inline-block px-4 py-2 text-sm bg-gradient-to-r ${categoryInfo?.color || 'from-gray-400 to-gray-600'} text-white rounded-full font-bold shadow-lg`}>
                  {categoryInfo?.icon} {categoryInfo?.name}
                </div>
                {article.featured && (
                  <div className="inline-block ml-3 px-4 py-2 text-sm bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full font-bold shadow-lg">
                    <Sparkles className="inline h-3 w-3 mr-1" />
                    Nổi bật
                  </div>
                )}
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-nature-800 to-emerald-700 bg-clip-text text-transparent leading-tight">
                {article.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-nature-400 to-emerald-500 flex items-center justify-center text-white font-bold text-sm">
                    🌱
                  </div>
                  <span>Tác giả: <span className="font-medium text-gray-800">Midoni Team</span></span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-nature-500" />
                  <span>Ngày: <span className="font-medium text-gray-800">{new Date(article.created_at).toLocaleDateString('vi-VN')}</span></span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4 text-nature-500" />
                  <span>{readingTime} phút đọc</span>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed italic border-l-4 border-nature-400 pl-6 bg-nature-50/50 py-4 rounded-r-lg">
                {article.excerpt}
              </p>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl p-8 md:p-12 border border-white/50">
            <div className="prose prose-lg max-w-none prose-headings:text-nature-900 prose-a:text-nature-600 hover:prose-a:text-nature-800 prose-img:rounded-xl prose-img:shadow-lg"
                 dangerouslySetInnerHTML={{ __html: article.content }}>
            </div>
            
            {/* Actions */}
            <div className="border-t border-gray-200 mt-12 pt-8 flex flex-wrap justify-between items-center gap-4">
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="flex items-center gap-2 hover:bg-green-50 hover:border-green-300 transition-all duration-300 group">
                  <ThumbsUp className="h-4 w-4 group-hover:text-green-600" />
                  <span>Hữu ích</span>
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 group">
                  <BookmarkPlus className="h-4 w-4 group-hover:text-blue-600" />
                  <span>Lưu lại</span>
                </Button>
              </div>
              <div>
                <Button variant="ghost" size="sm" className="flex items-center gap-2 hover:bg-purple-50 transition-all duration-300 group">
                  <Share2 className="h-4 w-4 group-hover:text-purple-600" />
                  <span>Chia sẻ</span>
                </Button>
              </div>
            </div>
            
            {/* Author */}
            <div className="mt-12 p-8 bg-gradient-to-r from-nature-50 to-emerald-50 rounded-2xl border border-nature-200">
              <div className="flex items-center gap-6">
                <div className="h-20 w-20 rounded-full bg-gradient-to-r from-nature-400 to-emerald-500 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  🌱
                </div>
                <div>
                  <h3 className="font-bold text-xl text-nature-800 mb-2">Midoni Team</h3>
                  <p className="text-nature-600 leading-relaxed">Chuyên gia về cây cảnh và trang trí nội thất với hơn 10 năm kinh nghiệm trong lĩnh vực chăm sóc và phát triển cây xanh.</p>
                </div>
              </div>
            </div>
            
            {/* Related articles */}
            {relatedArticles && relatedArticles.length > 0 && (
              <div className="mt-16">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-nature-800 mb-2">Bài viết liên quan</h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-nature-400 to-emerald-500 mx-auto rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedArticles.map((related) => (
                    <Link key={related.id} to={`/care-guide/${related.slug}`} className="group">
                      <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
                        <div className="h-40 overflow-hidden relative">
                          <img 
                            src={related.image_url} 
                            alt={related.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="p-5">
                          <h3 className="text-lg font-bold group-hover:text-nature-600 transition-colors mb-2 line-clamp-2">
                            {related.title}
                          </h3>
                          <p className="text-gray-600 text-sm line-clamp-2">{related.excerpt}</p>
                          <div className="mt-3 text-xs text-gray-500">
                            {Math.ceil(related.content.length / 1000)} phút đọc
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            
            <div className="mt-16 text-center">
              <Button asChild variant="outline" className="px-8 py-3 rounded-xl border-2 border-nature-300 hover:bg-nature-50 transition-all duration-300">
                <Link to="/care-guide">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Quay lại tất cả bài hướng dẫn
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CareGuideDetail;
