import { Product, Booking, Contact } from '../types';

export const saveBooking = (booking: Booking): void => {
  const bookings = getBookings();
  bookings.push(booking);
  localStorage.setItem('bookings', JSON.stringify(bookings));
};

export const getBookings = (): Booking[] => {
  const bookingsStr = localStorage.getItem('bookings');
  return bookingsStr ? JSON.parse(bookingsStr) : [];
};

export const saveContact = (contact: Contact): void => {
  const contacts = getContacts();
  contacts.push(contact);
  localStorage.setItem('contacts', JSON.stringify(contacts));
};

export const getContacts = (): Contact[] => {
  const contactsStr = localStorage.getItem('contacts');
  return contactsStr ? JSON.parse(contactsStr) : [];
};

export const saveProduct = (product: Product): void => {
  const products = getProducts();
  products.push(product);
  localStorage.setItem('products', JSON.stringify(products));
};

export const getProducts = (): Product[] => {
  const productsStr = localStorage.getItem('products');
  return productsStr ? JSON.parse(productsStr) : [];
};

export const updateProduct = (updatedProduct: Product): void => {
  const products = getProducts();
  const index = products.findIndex(p => p.id === updatedProduct.id);
  if (index !== -1) {
    products[index] = updatedProduct;
    localStorage.setItem('products', JSON.stringify(products));
  }
};

export const deleteProduct = (productId: string): void => {
  const products = getProducts();
  const filteredProducts = products.filter(p => p.id !== productId);
  localStorage.setItem('products', JSON.stringify(filteredProducts));
};