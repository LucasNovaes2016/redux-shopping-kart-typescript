import { ADD_PRODUCT_TO_KART, REMOVE_PRODUCT_FROM_KART, BUY_PRODUCTS_FROM_KART, SET_ACTIVE_MENU_ITEM } from "../types";

// Add product to kart...

export const addProductToKart = (product_payload: any) => {
  return {
    type: ADD_PRODUCT_TO_KART,
    payload: product_payload,
  }; }

// Remove product from kart...
export const removeProductFromKart = (product_cod: number) => {
  return{
    type: REMOVE_PRODUCT_FROM_KART,
    payload: product_cod,
  };
};

// Buy all products from kart...
export const buyProductFromKart = () => {
  return{
    type: BUY_PRODUCTS_FROM_KART,
  };
};

export const setActiveMenuItem = (menu_item_title: any) => {
  return {
    type: SET_ACTIVE_MENU_ITEM,
    payload: menu_item_title,
  }
}


