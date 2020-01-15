import React from "react";
import { ProjectInfo } from "./jumbotron";
import  { ProductList } from "./productlist";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { SET_ACTIVE_MENU_ITEM } from '../../../core/redux/types';

export const MainPage = () => {

  const storeProducts = useSelector((state: any) => state.shopping.store_products);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch({ type: SET_ACTIVE_MENU_ITEM, payload: 'inicio' });
  }, []);
  
  return (
    <>
      <ProjectInfo />
      <ProductList products={storeProducts} />
    </>
  );
};