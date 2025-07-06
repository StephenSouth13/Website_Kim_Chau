import React, { useState } from 'react';
import { Calendar, Clock, Phone } from 'lucide-react';
import { mockServices } from '../data/mockData';
import { formatPrice } from '../utils/format';
import { getCurrentUser } from '../utils/auth';
import { saveBooking } from '../utils/localStorage';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('');
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentUser = getCurrentUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser) {
      alert('Vui lòng đăng nhập để đặt lịch dịch vụ!');
      return;
    }

    if (!selectedService) {
      alert('Vui lòng chọn dịch vụ!');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const booking = {
        id: Date.now().toString(),
        userId: currentUser.id,
        serviceId: selectedService,
        type: 'service' as const,
        date: formData.date,
        time: formData.time,
        status: 'pending' as const,
        notes: formData.notes
      };

      saveBooking(booking);
      alert('Đặt lịch dịch vụ thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.');
      setFormData({ date: '', time: '', notes: '' });
      setSelectedService('');
    } catch (error) {
      alert('Có lỗi xảy ra. Vui lòng thử lại!');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dịch vụ Honda</h1>
          <p className="text-gray-600">Chăm sóc và bảo trì xe Honda chuyên nghiệp</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Services List */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Danh sách dịch vụ</h2>
            
            {mockServices.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <span className="text-2xl font-bold text-red-600">{formatPrice(service.price)}</span>
                        <div className="flex items-center text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          <span className="text-sm">{service.duration}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <button
                        onClick={() => setSelectedService(service.id)}
                        className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                          selectedService === service.id
                            ? 'bg-red-600 text-white'
                            : 'bg-red-100 text-red-700 hover:bg-red-200'
                        }`}
                      >
                        {selectedService === service.id ? 'Đã chọn' : 'Chọn dịch vụ'}
                      </button>
                      <button className="flex items-center space-x-2 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                        <Phone className="w-4 h-4" />
                        <span>Liên hệ</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Đặt lịch dịch vụ
              </h2>

              {!currentUser ? (
                <div className="text-center py-8">
                  <p className="text-gray-500 mb-4">Vui lòng đăng nhập để đặt lịch dịch vụ</p>
                  <a
                    href="/login"
                    className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Đăng nhập
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Dịch vụ đã chọn
                    </label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    >
                      <option value="">Chọn dịch vụ</option>
                      {mockServices.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.name} - {formatPrice(service.price)}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ngày hẹn
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Thời gian
                    </label>
                    <select
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="">Chọn thời gian</option>
                      <option value="08:00">08:00</option>
                      <option value="09:00">09:00</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                      <option value="17:00">17:00</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ghi chú
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Mô tả tình trạng xe hoặc yêu cầu đặc biệt..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition-colors font-medium disabled:opacity-50"
                  >
                    {isSubmitting ? 'Đang xử lý...' : 'Đặt lịch ngay'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;