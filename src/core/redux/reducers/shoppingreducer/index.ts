import Products from "../../../data/local";
import {
  ADD_PRODUCT_TO_KART,
  REMOVE_PRODUCT_FROM_KART,
  BUY_PRODUCTS_FROM_KART,
  SET_ACTIVE_MENU_ITEM
} from "../../types";
import { IApplicationState } from "../../../../core/interfaces";

const initialState: IApplicationState = {
  store_products: Products,
  kart_products: [],
  purchased_products: [],
  active_menu_item: 'inicio',
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_KART:
      let found_product = false;

      for (let i = 0; i < state.kart_products.length; i++) {
        if (state.kart_products[i].cod === action.payload.product.cod) {
          state.kart_products[i].quantity += action.payload.productQuantity;
          found_product = true;
          i = state.kart_products.length;
        }
      }
      if (!found_product) {
        state.kart_products.push(
          Object.assign(
            {
              quantity: action.payload.productQuantity
            },
            action.payload.product
          )
        );
      }
      return {
        ...state
      };
    case REMOVE_PRODUCT_FROM_KART:
      return {
        ...state,
        kart_products: state.kart_products.filter(
          (item: any) => item.cod !== action.payload
        )
      };
    case BUY_PRODUCTS_FROM_KART:
      state.kart_products.forEach((item: any) => {
        let found_product = false;
        for (let i = 0; i < state.purchased_products.length; i++) {
          if (state.purchased_products[i].cod === item.cod) {
            state.purchased_products[i].quantity += item.quantity;
            found_product = true;
            i = state.purchased_products.length;
          }
        }
        if (!found_product) {
          state.purchased_products.push({
            cod: item.cod,
            quantity: item.quantity,
            name: item.name,
            brand: item.brand,
            description: item.description,
          });
        }
      });

      return {
        ...state,
        kart_products: []
      };
    case SET_ACTIVE_MENU_ITEM:
      return {
        ...state,
        active_menu_item: action.payload,
      };
    default:
      return state;
  }
};