export interface Product {
  id: number;
  title: string;
  description: string;
  newPrice: number;
  oldPrice: number;
  category: string;
  image: string;
  inStock: number;
}

export interface PaginationState {
  currentPage: number;
}

export interface RootState {
  pagination: PaginationState;
  cartDetail: any;
  showToggle: any;
}

export interface PaginationProps {
  child: number;
  category?: string;
  type?: 'shop' | 'blog';
}
