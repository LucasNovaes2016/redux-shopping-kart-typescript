import React from "react";
import { useDispatch } from "react-redux";
import { ADD_PRODUCT_TO_KART } from "../../../../../core/redux/types";
import { toast } from "react-toastify";
import { IProduct } from "../../../../../core/interfaces";

interface IProductItemInterface {
  product: IProduct;
}

export const ProductItem = ({ product }: IProductItemInterface) => {
  const [productQuantity, setProductQuantity] = React.useState(1);
  const [addMode, setAddMode] = React.useState(false);

  const dispatch = useDispatch();

  const addProductToKart = () => {
    dispatch({
      type: ADD_PRODUCT_TO_KART,
      payload: { product, productQuantity }
    });
    setAddMode(false);
    setProductQuantity(1);

    const message =
      (productQuantity > 1 ? "Produtos adicionados" : "produto adicionado") +
      " ao carrinho com sucesso!";

    toast.success(message);
  };

  return (
    <div className="col-md-6 col-lg-4">
      <div className="card my-2">
        <div className="card-body">
          <h5 className="card-title text-center">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <p className="font-weight-bold">R$ {product.price}</p>
          {addMode ? (
            <div className="mt-2">
              <input
                type="number"
                className="form-control small-input my-2"
                value={productQuantity}
                onChange={e => {
                  if (e.target.value === "") {
                    setProductQuantity(1);
                  } else if (Number(e.target.value) > 0) {
                    setProductQuantity(parseInt(e.target.value));
                  }
                }}
              />
              <button
                className="btn btn-success btn-block rounded-0 my-2"
                onClick={addProductToKart}
              >
                Adicionar Quantidade
              </button>
            </div>
          ) : (
            <div className="text-center">
              <button
                className="btn btn-block btn-primary rounded-0"
                onClick={() => {
                  setAddMode(true);
                }}
              >
                <i
                  className="fa fa-shopping-cart fa-lg mr-2"
                  aria-hidden="true"
                ></i>
                Adicionar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
