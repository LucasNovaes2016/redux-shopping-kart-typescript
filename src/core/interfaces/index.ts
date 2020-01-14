export interface IProduct {
  cod: number;
  name: string;
  brand: string;
  description: string;
  price: number;
}

export interface IProductKart {
  cod: number;
  name: string;
  brand: string;
  description: string;
  price: number;
  quantity: number;
}

export interface IPurchasedProducts {
  cod: number;
  quantity: number;
  name: string;
  brand: string;
  description: string;
}

export interface IApplicationState {
  store_products: IProduct[];
  kart_products: IProductKart[];
  purchased_products: IPurchasedProducts[];
  active_menu_item: string;
}
