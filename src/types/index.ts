export interface ProductColor {
  name: string;
  code: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'bags' | 'wallets' | 'bracelets';
  categoryName: string;
  price: number;
  originalPrice?: number;
  shortDescription: string;
  details: string[];
  colors: ProductColor[];
  featured?: boolean;
  badge?: string;
  rating: number;
  reviewsCount: number;
}

export interface CartItem {
  id: string; // product.id
  uniqueKey: string; // product.id + '-' + color.name
  name: string;
  price: number;
  selectedColor: ProductColor;
  quantity: number;
  image: string;
}

export interface CheckoutFormData {
  fullName: string;
  phone: string;
  alternativePhone: string;
  governorate: string;
  address: string;
  notes: string;
}
