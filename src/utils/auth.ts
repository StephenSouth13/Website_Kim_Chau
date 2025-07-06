import { User } from '../types';
import { mockUsers } from '../data/mockData';

export const login = (email: string, password: string): User | null => {
  const user = mockUsers.find(u => u.email === email && u.password === password);
  if (user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    return user;
  }
  return null;
};

export const logout = (): void => {
  localStorage.removeItem('currentUser');
};

export const getCurrentUser = (): User | null => {
  const userStr = localStorage.getItem('currentUser');
  return userStr ? JSON.parse(userStr) : null;
};

export const isAuthenticated = (): boolean => {
  return getCurrentUser() !== null;
};

export const isAdmin = (): boolean => {
  const user = getCurrentUser();
  return user?.role === 'admin';
};

export const register = (email: string, password: string, name: string, phone?: string): User | null => {
  // Check if user already exists
  const existingUser = mockUsers.find(u => u.email === email);
  if (existingUser) {
    return null;
  }

  const newUser: User = {
    id: Date.now().toString(),
    email,
    password,
    role: 'user',
    name,
    phone
  };

  // In a real app, this would be saved to a database
  // For now, we'll just return the user without persisting
  localStorage.setItem('currentUser', JSON.stringify(newUser));
  return newUser;
};