export interface ProductColor {
  name: string;
  nameEn?: string;
  code: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  nameEn?: string;
  category: string;
  categoryName: string;
  categoryNameEn?: string;
  price: number;
  originalPrice?: number;
  shortDescription: string;
  shortDescriptionEn?: string;
  details: string[];
  detailsEn?: string[];
  colors: ProductColor[];
  featured?: boolean;
  badge?: string;
  badgeEn?: string;
  rating: number;
  reviewsCount: number;
}

export interface CartItem {
  id: string; // product.id
  uniqueKey: string; // product.id + '-' + color.name
  name: string;
  nameEn?: string;
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
