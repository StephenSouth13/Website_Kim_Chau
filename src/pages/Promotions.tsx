import React from 'react';
import { Calendar, Tag, Gift } from 'lucide-react';
import { mockPromotions } from '../data/mockData';
import { formatDate } from '../utils/format';

const Promotions: React.FC = () => {
  const activePromotions = mockPromotions.filter(p => p.active);
  const expiredPromotions = mockPromotions.filter(p => !p.active);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Khuyến mãi Honda</h1>
          <p className="text-gray-600">Khám phá những ưu đãi hấp dẫn từ Honda</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Active Promotions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Gift className="w-6 h-6 mr-2 text-red-600" />
            Khuyến mãi đang diễn ra
          </h2>
          
          {activePromotions.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">Hiện tại chưa có khuyến mãi nào</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activePromotions.map((promotion) => (
                <div key={promotion.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    <img
                      src={promotion.image}
                      alt={promotion.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {promotion.discount.toLocaleString('vi-VN')}đ
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{promotion.title}</h3>
                    <p className="text-gray-600 mb-4">{promotion.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-gray-500">
                        <Tag className="w-4 h-4 mr-1" />
                        <span className="text-sm">Giảm {promotion.discount.toLocaleString('vi-VN')}đ</span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span className="text-sm">Đến {formatDate(promotion.endDate)}</span>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <button className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium">
                        Áp dụng ngay
                      </button>
                      <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium">
                        Chi tiết
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Promotion Terms */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Điều kiện chung</h2>
          <div className="prose text-gray-600">
            <ul className="space-y-2">
              <li>• Khuyến mãi chỉ áp dụng cho xe Honda chính hãng</li>
              <li>• Không áp dụng đồng thời với các chương trình khuyến mãi khác</li>
              <li>• Khuyến mãi có thể kết thúc sớm nếu hết số lượng xe dự kiến</li>
              <li>• Khách hàng cần xuất trình đầy đủ giấy tờ theo quy định</li>
              <li>• Mọi thắc mắc xin liên hệ showroom để được tư vấn chi tiết</li>
            </ul>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-red-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Muốn biết thêm về khuyến mãi?</h2>
          <p className="text-red-100 mb-6">
            Liên hệ ngay với chúng tôi để được tư vấn chi tiết về các chương trình khuyến mãi đang diễn ra
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Gọi ngay: 0123.456.789
            </button>
            <button className="border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
              Đến showroom
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;