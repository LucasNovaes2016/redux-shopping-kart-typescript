import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { SET_ACTIVE_MENU_ITEM } from "../../../core/redux/types";
import { IPurchasedProducts } from "../../../core/interfaces";

export default function MyProducts() {
  const purchasedProducts = useSelector(
    (state: any) => state.shopping.purchased_products
  );

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch({ type: SET_ACTIVE_MENU_ITEM, payload: "meus-produtos" });
  }, []);

  return (
    <>
      <table className="table shadow mt-4">
        <thead className="thead-dark">
          <tr className="text-center bg-dark">
            <th colSpan={4}>MEUS PRODUTOS</th>
          </tr>
          <tr>
            <th scope="col">COD</th>
            <th scope="col">Produto</th>
            <th scope="col">Marca</th>
            <th scope="col" className="text-center">
              Quantidade
            </th>
          </tr>
        </thead>
        <tbody>
          {purchasedProducts.length === 0 ? (
            <tr>
              <td colSpan={4}> {"Você não comprou nenhum item ainda..."} </td>
            </tr>
          ) : (
            purchasedProducts.map((item: IPurchasedProducts) => {
              return (
                <tr key={item.cod}>
                  <td> {item.cod} </td>
                  <td> {item.name} </td>
                  <td> {item.brand} </td>
                  <td className="text-center"> {item.quantity} </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>

      <div className="d-flex justify-content-center">
        <Link className="btn btn-primary rounded-0" to="/">
          <i className="fa fa-plus-circle mr-2" aria-hidden="true"></i>Comprar
          Mais Produtos
        </Link>
      </div>
    </>
  );
}
