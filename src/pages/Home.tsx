import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Shield, Clock, Zap, Award, CheckCircle } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import AnimatedSection from '../components/AnimatedSection';
import { mockProducts, mockPromotions } from '../data/mockData';

const Home: React.FC = () => {
  const featuredProducts = mockProducts.filter(p => p.featured).slice(0, 3);
  const activePromotions = mockPromotions.filter(p => p.active).slice(0, 2);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with parallax effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-red-800 to-red-700">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center bg-fixed opacity-20"></div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/5 rounded-full animate-bounce delay-500"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <AnimatedSection animation="fadeInUp" className="text-white">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent">
                Honda Chính Hãng
              </span>
              <span className="block text-2xl md:text-4xl font-normal mt-4 text-red-200">
                Tại Head Kim Châu
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={200} className="text-white">
            <p className="text-xl md:text-2xl mb-8 text-red-100 max-w-3xl mx-auto leading-relaxed">
              Đại lý Honda uy tín với hơn 10 năm kinh nghiệm. Chuyên cung cấp các dòng xe Honda chính hãng với chất lượng tốt nhất và dịch vụ hoàn hảo.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={400}>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/products"
                className="group bg-white text-red-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-red-50 transition-all duration-300 inline-flex items-center justify-center shadow-2xl hover:shadow-3xl transform hover:scale-105"
              >
                Xem sản phẩm
                <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/contact"
                className="group border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-red-600 transition-all duration-300 inline-flex items-center justify-center backdrop-blur-sm transform hover:scale-105"
              >
                <Zap className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Đặt lịch lái thử
              </Link>
            </div>
          </AnimatedSection>

          {/* Floating stats */}
          <AnimatedSection animation="fadeInUp" delay={600}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
              {[
                { number: '10+', label: 'Năm kinh nghiệm' },
                { number: '5000+', label: 'Khách hàng hài lòng' },
                { number: '50+', label: 'Mẫu xe đa dạng' },
                { number: '24/7', label: 'Hỗ trợ khách hàng' }
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-red-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23f3f4f6%22%20fill-opacity=%220.4%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tại sao chọn 
              <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent"> Head Kim Châu?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Chúng tôi cam kết mang đến cho bạn trải nghiệm tốt nhất với dịch vụ chuyên nghiệp và sản phẩm chất lượng.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Chính hãng 100%',
                description: 'Tất cả sản phẩm đều là Honda chính hãng với đầy đủ giấy tờ và bảo hành.',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: Users,
                title: 'Đội ngũ chuyên nghiệp',
                description: 'Đội ngũ tư vấn và kỹ thuật giàu kinh nghiệm, tận tâm phục vụ khách hàng.',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: Clock,
                title: 'Dịch vụ nhanh chóng',
                description: 'Cam kết thời gian giao xe và dịch vụ bảo trì nhanh chóng, đúng hẹn.',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: Award,
                title: 'Hỗ trợ trọn đời',
                description: 'Hỗ trợ khách hàng 24/7 với dịch vụ chăm sóc khách hàng tận tình.',
                color: 'from-red-500 to-red-600'
              }
            ].map((feature, index) => (
              <AnimatedSection 
                key={index} 
                animation="fadeInUp" 
                delay={index * 100}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sản phẩm 
              <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent"> nổi bật</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Khám phá những mẫu xe Honda được yêu thích nhất
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <AnimatedSection key={product.id} animation="fadeInUp" delay={index * 100}>
                <ProductCard product={product} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center">
            <Link
              to="/products"
              className="group inline-flex items-center bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Xem tất cả sản phẩm
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Khuyến mãi 
              <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">hot</span>
            </h2>
            <p className="text-xl text-gray-600">
              Đừng bỏ lỡ những ưu đãi hấp dẫn
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {activePromotions.map((promotion, index) => (
              <AnimatedSection key={promotion.id} animation="fadeInUp" delay={index * 200}>
                <div className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={promotion.image}
                      alt={promotion.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                      -{promotion.discount.toLocaleString('vi-VN')}đ
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                      {promotion.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{promotion.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        Đến {new Date(promotion.endDate).toLocaleDateString('vi-VN')}
                      </span>
                      <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 font-medium transform hover:scale-105">
                        Xem chi tiết
                      </button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center">
            <Link
              to="/promotions"
              className="group inline-flex items-center bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Xem tất cả khuyến mãi
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Khách hàng nói gì về 
              <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">chúng tôi</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Nguyễn Văn A',
                role: 'Khách hàng thân thiết',
                content: 'Dịch vụ tuyệt vời, nhân viên nhiệt tình. Xe Honda SH mình mua rất ưng ý, chất lượng tốt và giá cả hợp lý.',
                avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100'
              },
              {
                name: 'Trần Thị B',
                role: 'Khách hàng VIP',
                content: 'Showroom đẹp, xe đa dạng. Đặc biệt là dịch vụ sau bán hàng rất tốt, bảo trì định kỳ chu đáo.',
                avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100'
              },
              {
                name: 'Lê Văn C',
                role: 'Khách hàng mới',
                content: 'Mua xe Honda Winner X tại đây rất hài lòng. Giá tốt, hỗ trợ trả góp nhanh chóng và thuận tiện.',
                avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100'
              }
            ].map((testimonial, index) => (
              <AnimatedSection key={index} animation="fadeInUp" delay={index * 100}>
                <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  <div className="flex items-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 border-2 border-red-100"
                    />
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.1%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sẵn sàng sở hữu chiếc Honda mơ ước?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-red-100 max-w-3xl mx-auto leading-relaxed">
              Liên hệ ngay với chúng tôi để được tư vấn và lái thử miễn phí
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/contact"
                className="group bg-white text-red-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-red-50 transition-all duration-300 inline-flex items-center justify-center shadow-2xl transform hover:scale-105"
              >
                <CheckCircle className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Liên hệ ngay
              </Link>
              <Link
                to="/products"
                className="group border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-red-600 transition-all duration-300 inline-flex items-center justify-center backdrop-blur-sm transform hover:scale-105"
              >
                Xem sản phẩm
                <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;