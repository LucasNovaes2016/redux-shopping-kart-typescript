export interface IProduct {
    cod: number,
    name: string,
    brand: string,
    description: string,
    price: number
}

export interface IApplicationState {
    store_products: any,
    kart_products: any,
    purchased_products: any,
    active_menu_item: any,
}