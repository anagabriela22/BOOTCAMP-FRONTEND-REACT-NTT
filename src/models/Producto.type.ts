// el idioma
export interface Producto {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  availabilityStatus: string;
}

export interface ProductosResponse {
  products: Producto[];
  total: number;
  skip: number;
  limit: number;
}
