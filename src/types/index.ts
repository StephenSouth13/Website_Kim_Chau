export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'tay-ga' | 'so';
  color: string;
  image: string;
  gallery: string[];
  specs: {
    engine: string;
    power: string;
    fuel: string;
    weight: string;
  };
  description: string;
  featured: boolean;
}

export interface User {
  id: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
  name: string;
  phone?: string;
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  image: string;
  discount: number;
  startDate: string;
  endDate: string;
  active: boolean;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  image: string;
}

export interface Booking {
  id: string;
  userId: string;
  productId?: string;
  serviceId?: string;
  type: 'test-drive' | 'service';
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  notes?: string;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  date: string;
  status: 'new' | 'contacted' | 'resolved';
}