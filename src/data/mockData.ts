import { Product, User, Promotion, Service, Booking, Contact } from '../types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Honda Air Blade 160',
    price: 58900000,
    category: 'tay-ga',
    color: 'Đỏ',
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    specs: {
      engine: '156.9cc, 4 thì, làm mát bằng nước',
      power: '11.1 kW (15 PS) @ 8,500 rpm',
      fuel: 'Xăng RON 95',
      weight: '117 kg'
    },
    description: 'Honda Air Blade 160 là mẫu xe tay ga cao cấp với thiết kế thể thao, động cơ mạnh mẽ và tiết kiệm nhiên liệu.',
    featured: true
  },
  {
    id: '2',
    name: 'Honda Winner X',
    price: 48900000,
    category: 'so',
    color: 'Đen',
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    specs: {
      engine: '149.2cc, 4 thì, làm mát bằng nước',
      power: '11.5 kW (15.6 PS) @ 9,000 rpm',
      fuel: 'Xăng RON 92',
      weight: '114 kg'
    },
    description: 'Honda Winner X là dòng xe số thể thao với thiết kế mạnh mẽ, phù hợp cho những ai yêu thích tốc độ.',
    featured: true
  },
  {
    id: '3',
    name: 'Honda Vision 2024',
    price: 32900000,
    category: 'tay-ga',
    color: 'Trắng',
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    specs: {
      engine: '109.5cc, 4 thì, làm mát bằng gió',
      power: '6.6 kW (9 PS) @ 7,500 rpm',
      fuel: 'Xăng RON 92',
      weight: '95 kg'
    },
    description: 'Honda Vision 2024 là mẫu xe tay ga phổ thông với thiết kế trẻ trung, tiết kiệm nhiên liệu.',
    featured: false
  },
  {
    id: '4',
    name: 'Honda SH 160i',
    price: 89900000,
    category: 'tay-ga',
    color: 'Xanh',
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    specs: {
      engine: '156.9cc, 4 thì, làm mát bằng nước',
      power: '11.1 kW (15 PS) @ 8,500 rpm',
      fuel: 'Xăng RON 95',
      weight: '132 kg'
    },
    description: 'Honda SH 160i là dòng xe tay ga cao cấp với thiết kế sang trọng, phù hợp cho doanh nhân.',
    featured: true
  },
  {
    id: '5',
    name: 'Honda Wave RSX',
    price: 24900000,
    category: 'so',
    color: 'Đỏ',
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    specs: {
      engine: '109.5cc, 4 thì, làm mát bằng gió',
      power: '6.6 kW (9 PS) @ 7,500 rpm',
      fuel: 'Xăng RON 92',
      weight: '96 kg'
    },
    description: 'Honda Wave RSX là mẫu xe số phổ thông với thiết kế thể thao, phù hợp cho mọi lứa tuổi.',
    featured: false
  },
  {
    id: '6',
    name: 'Honda Future 125',
    price: 29900000,
    category: 'so',
    color: 'Xanh',
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    specs: {
      engine: '124.9cc, 4 thì, làm mát bằng gió',
      power: '7.3 kW (10 PS) @ 7,500 rpm',
      fuel: 'Xăng RON 92',
      weight: '102 kg'
    },
    description: 'Honda Future 125 là mẫu xe số với thiết kế thanh lịch, tiết kiệm nhiên liệu.',
    featured: false
  }
];

export const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@headkimchau.com',
    password: 'admin123',
    role: 'admin',
    name: 'Admin Honda',
    phone: '0123456789'
  },
  {
    id: '2',
    email: 'user@example.com',
    password: 'user123',
    role: 'user',
    name: 'Nguyễn Văn A',
    phone: '0987654321'
  }
];

export const mockPromotions: Promotion[] = [
  {
    id: '1',
    title: 'Khuyến mãi mừng Tết Nguyên Đán 2025',
    description: 'Giảm giá lên đến 5 triệu đồng cho tất cả các dòng xe Honda. Tặng kèm mũ bảo hiểm và áo mưa.',
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800',
    discount: 5000000,
    startDate: '2025-01-01',
    endDate: '2025-02-15',
    active: true
  },
  {
    id: '2',
    title: 'Chương trình Trade-in cũ lấy mới',
    description: 'Đổi xe cũ lấy xe mới với giá trị thu mua cao nhất thị trường. Hỗ trợ trả góp 0% lãi suất.',
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800',
    discount: 3000000,
    startDate: '2025-01-01',
    endDate: '2025-03-31',
    active: true
  },
  {
    id: '3',
    title: 'Ưu đãi sinh viên',
    description: 'Giảm 10% cho sinh viên khi mua xe Honda. Áp dụng khi xuất trình thẻ sinh viên.',
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800',
    discount: 2000000,
    startDate: '2025-01-01',
    endDate: '2025-12-31',
    active: true
  }
];

export const mockServices: Service[] = [
  {
    id: '1',
    name: 'Bảo dưỡng định kỳ',
    description: 'Kiểm tra toàn bộ hệ thống, thay dầu máy, lọc gió, bugi, điều chỉnh các thông số.',
    price: 250000,
    duration: '60 phút',
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '2',
    name: 'Thay nhớt và bảo trì',
    description: 'Thay dầu máy chính hãng Honda, kiểm tra và bảo trì cơ bản.',
    price: 150000,
    duration: '30 phút',
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '3',
    name: 'Vệ sinh và chăm sóc xe',
    description: 'Rửa xe chuyên nghiệp, vệ sinh động cơ, đánh bóng và bảo vệ sơn.',
    price: 100000,
    duration: '45 phút',
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '4',
    name: 'Sửa chữa và thay thế phụ tùng',
    description: 'Sửa chữa các hỏng hóc, thay thế phụ tùng chính hãng Honda.',
    price: 500000,
    duration: '120 phút',
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export const mockBookings: Booking[] = [
  {
    id: '1',
    userId: '2',
    productId: '1',
    type: 'test-drive',
    date: '2025-01-15',
    time: '10:00',
    status: 'pending',
    notes: 'Muốn lái thử Honda Air Blade 160'
  },
  {
    id: '2',
    userId: '2',
    serviceId: '1',
    type: 'service',
    date: '2025-01-20',
    time: '14:00',
    status: 'confirmed',
    notes: 'Bảo dưỡng định kỳ'
  }
];

export const mockContacts: Contact[] = [
  {
    id: '1',
    name: 'Trần Thị B',
    email: 'tranthi@example.com',
    phone: '0901234567',
    message: 'Tôi muốn hỏi về chương trình trả góp cho Honda SH 160i',
    date: '2025-01-10',
    status: 'new'
  },
  {
    id: '2',
    name: 'Lê Văn C',
    email: 'levan@example.com',
    phone: '0912345678',
    message: 'Showroom có xe Honda Winner X màu đỏ không ạ?',
    date: '2025-01-12',
    status: 'contacted'
  }
];