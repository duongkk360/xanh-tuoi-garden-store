
export interface Product {
  product_id: number;
  name: string;
  category: number; // 1=Văn Phòng, 2=Tiểu Cảnh, 3=Phụ Kiện Tiểu Cảnh
  description?: string;
  price: number;
  stock_quantity: number;
  image_path?: string;
}

export interface Account {
  account_id: number;
  username: string;
  password_hash: string;
  email: string;
  full_name: string;
  role: number; // 0: admin, 1: customer
  phone?: string;
  address?: string;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}

export interface Order {
  order_id: number;
  account_id: number;
  order_date: string;
  total_amount: number;
  status: string;
}

export interface OrderDetail {
  order_detail_id: number;
  order_id: number;
  product_id: number;
  quantity: number;
  price: number;
}

export interface Wishlist {
  id: number;
  account_id: number;
  product_id: number;
  created_at: string;
}

// Category mapping utilities
export const CATEGORY_MAPPING = {
  1: "Văn Phòng",
  2: "Tiểu Cảnh", 
  3: "Phụ Kiện Tiểu Cảnh"
} as const;

export const getCategoryName = (categoryId: number): string => {
  return CATEGORY_MAPPING[categoryId as keyof typeof CATEGORY_MAPPING] || "Không xác định";
};

export const getCategoryId = (categoryName: string): number => {
  const entries = Object.entries(CATEGORY_MAPPING);
  const found = entries.find(([_, name]) => name === categoryName);
  return found ? parseInt(found[0]) : 2; // Default to Tiểu Cảnh
};
