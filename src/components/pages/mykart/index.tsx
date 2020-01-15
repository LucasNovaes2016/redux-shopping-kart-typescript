import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  REMOVE_PRODUCT_FROM_KART,
  BUY_PRODUCTS_FROM_KART,
  SET_ACTIVE_MENU_ITEM
} from "../../../core/redux/types";
import { convertNumberToPrice } from "../../../core/utils/functions";
import { Link, Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { IProductKart } from "../../../core/interfaces";

export default function MyKart() {
  const [productsPurchased, setProductsPurchased] = React.useState<boolean>(false);

  let finalPrice: number = 0;

  const storeKartProducts = useSelector(
    (state: any) => state.shopping.kart_products
  );

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch({ type: SET_ACTIVE_MENU_ITEM, payload: "meu-carrinho" });
  }, []);

  const removeProductFromKart = (cod: number) => {
    dispatch({ type: REMOVE_PRODUCT_FROM_KART, payload: cod });
  };

  const buyProductsFromKart = () => {
    dispatch({ type: BUY_PRODUCTS_FROM_KART });
    setProductsPurchased(true);

    toast.success("Produto(s) comprados com sucesso");
  };

  if (productsPurchased) {
    return <Redirect to="/meus-produtos" />;
  }

  return (
    <table className="table table-responsive-md shadow mt-4">
      <thead className="thead-dark">
        <tr className="text-center bg-dark">
          <th colSpan={6}>MEU CARRINHO</th>
        </tr>
        <tr>
          <th scope="col">COD</th>
          <th scope="col">Produto</th>
          <th scope="col">Quantidade</th>
          <th scope="col">Preço (Unidade)</th>
          <th scope="col">Preço Total</th>
          <th scope="col" className="text-center">
            Ação
          </th>
        </tr>
      </thead>
      <tbody>
        {storeKartProducts.length === 0 ? (
          <tr>
            <td colSpan={4}> {"Não há itens no carrinho... :("} </td>
          </tr>
        ) : (
          storeKartProducts.map((item: IProductKart) => {
            finalPrice += item.price * item.quantity;
            return (
              <tr key={item.cod}>
                <td> {item.cod} </td>
                <td> {item.name} </td>
                <td> {item.quantity} </td>
                <td> R$ {convertNumberToPrice(item.price)} </td>
                <td> R$ {convertNumberToPrice(item.price * item.quantity)} </td>
                <td className="text-center">
                  <button
                    type="button"
                    className="btn btn-danger rounded-0"
                    onClick={() => {
                      removeProductFromKart(item.cod);
                    }}
                  >
                    <i
                      className="fa fa-trash fa-lg mr-2"
                      aria-hidden="true"
                    ></i>
                    Remover
                  </button>
                </td>
              </tr>
            );
          })
        )}
        <tr className="font-weight-bold">
          <td colSpan={3}></td>
          <td>
            <h5> VALOR FINAL </h5>
          </td>
          <td>
            <h5>{"R$ " + convertNumberToPrice(finalPrice)}</h5>
          </td>
          <td className="text-center">
            {storeKartProducts.length > 0 ? (
              <button
                className="btn btn-success btn-block rounded-0"
                onClick={buyProductsFromKart}
              >
                <i className="fa fa-money fa-lg mr-2" aria-hidden="true"></i>
                Comprar Produtos
              </button>
            ) : (
              <Link className="btn btn-primary btn-block rounded-0" to="/">
                <i className="fa fa-arrow-left mr-2" aria-hidden="true"></i>
                Voltar para a loja
              </Link>
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
