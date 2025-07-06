import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { formatPrice } from '../utils/format';
import { Heart, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
      <div className="relative overflow-hidden">
        <div className={`w-full h-48 bg-gray-200 transition-all duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-red-300 border-t-red-600 rounded-full animate-spin"></div>
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
            <div className="flex space-x-2">
              <Link
                to={`/products/${product.id}`}
                className="bg-white/90 backdrop-blur-sm text-gray-900 p-2 rounded-full hover:bg-white transition-all duration-300 transform hover:scale-110"
              >
                <Eye className="w-4 h-4" />
              </Link>
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`backdrop-blur-sm p-2 rounded-full transition-all duration-300 transform hover:scale-110 ${
                  isLiked 
                    ? 'bg-red-500 text-white' 
                    : 'bg-white/90 text-gray-900 hover:bg-white'
                }`}
              >
                <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col space-y-2">
          {product.featured && (
            <span className="bg-gradient-to-r from-red-600 to-red-700 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg animate-pulse">
              Nổi bật
            </span>
          )}
          <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-medium shadow-lg">
            {product.category === 'tay-ga' ? 'Tay ga' : 'Số'}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between mb-6">
          <div className="flex flex-col">
            <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
              {formatPrice(product.price)}
            </span>
            <span className="text-xs text-gray-500">Màu {product.color}</span>
          </div>
        </div>

        <div className="flex space-x-2">
          <Link
            to={`/products/${product.id}`}
            className="flex-1 bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-4 rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 text-center text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Xem chi tiết
          </Link>
          <button className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-xl hover:bg-gray-200 transition-all duration-300 text-sm font-medium transform hover:scale-105">
            Lái thử
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;