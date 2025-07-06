import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Share2, Calendar } from 'lucide-react';
import { mockProducts } from '../data/mockData';
import { formatPrice } from '../utils/format';
import TestDriveModal from '../components/TestDriveModal';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [showTestDriveModal, setShowTestDriveModal] = useState(false);

  const product = mockProducts.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 text-lg mb-4">Không tìm thấy sản phẩm</p>
          <Link
            to="/products"
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Quay lại danh sách sản phẩm
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/products"
            className="inline-flex items-center text-gray-600 hover:text-red-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Quay lại danh sách sản phẩm
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative">
              <img
                src={product.gallery[selectedImage] || product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-xl"
              />
              {product.featured && (
                <span className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Nổi bật
                </span>
              )}
            </div>

            {/* Gallery Thumbnails */}
            {product.gallery.length > 1 && (
              <div className="flex space-x-2">
                {product.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? 'border-red-600' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {product.category === 'tay-ga' ? 'Tay ga' : 'Số'}
                </span>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  Màu {product.color}
                </span>
              </div>
            </div>

            <div className="text-3xl font-bold text-red-600">
              {formatPrice(product.price)}
            </div>

            <div className="prose max-w-none">
              <p className="text-gray-600">{product.description}</p>
            </div>

            {/* Specifications */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Thông số kỹ thuật</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="text-sm font-medium text-gray-500">Động cơ</span>
                  <p className="text-gray-900">{product.specs.engine}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Công suất</span>
                  <p className="text-gray-900">{product.specs.power}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Nhiên liệu</span>
                  <p className="text-gray-900">{product.specs.fuel}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Trọng lượng</span>
                  <p className="text-gray-900">{product.specs.weight}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => setShowTestDriveModal(true)}
                className="flex-1 bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors font-semibold flex items-center justify-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Đặt lịch lái thử
              </button>
              <button className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors font-semibold">
                Liên hệ tư vấn
              </button>
            </div>

            {/* Additional Actions */}
            <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors">
                <Heart className="w-5 h-5" />
                <span>Yêu thích</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors">
                <Share2 className="w-5 h-5" />
                <span>Chia sẻ</span>
              </button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Sản phẩm liên quan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProducts
              .filter(p => p.id !== product.id && p.category === product.category)
              .slice(0, 3)
              .map((relatedProduct) => (
                <div key={relatedProduct.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{relatedProduct.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{relatedProduct.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-red-600">{formatPrice(relatedProduct.price)}</span>
                    </div>
                    <Link
                      to={`/products/${relatedProduct.id}`}
                      className="block w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors text-center text-sm font-medium"
                    >
                      Xem chi tiết
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Test Drive Modal */}
      <TestDriveModal
        product={product}
        isOpen={showTestDriveModal}
        onClose={() => setShowTestDriveModal(false)}
      />
    </div>
  );
};

export default ProductDetail;