export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    overview: string;
    description: string;
    instruct: string;
    material:string;
    quantity: number;
}
export interface News {
    id: number;
    title: string;
    image: string;
    content: string;
    date: string;
}

export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }
