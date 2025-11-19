export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  category: string;
  image: string;
  images: string[];
  features: string[];
  specifications: {
    [key: string]: string;
  };
  inStock: boolean;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  notes?: string;
}

export interface EnquiryFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
  items: CartItem[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
}
