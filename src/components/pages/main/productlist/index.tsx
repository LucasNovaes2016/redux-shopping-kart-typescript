import React from "react";
import { ProductItem } from "./product";
import { IProduct } from "../../../../core/interfaces";

interface IProductListComponent {
  products: IProduct[];
}

export const ProductList = ({ products }: IProductListComponent) => {
  const [productsShown, setProductsShown] = React.useState(3);

  const showMoreProducts = () => {
    if (productsShown !== products.length) {
      setProductsShown(productsShown + 3);
    } else {
      setProductsShown(3);
    }
  };

  return (
    <>
      <div className="row mt-1">
        {products.slice(0, productsShown).map((product: any) => {
          return <ProductItem key={product.cod} product={product} />;
        })}
      </div>
      <div className="d-flex justify-content-center my-4">
        <button
          type="button"
          className="btn btn-primary rounded-0"
          onClick={showMoreProducts}
        >
          <i
            className={
              "fa " +
              (productsShown < products.length
                ? "fa-plus-circle"
                : "fa-minus-circle") +
              " mr-1"
            }
            aria-hidden="true"
          ></i>{" "}
          {productsShown < products.length ? "Mais " : "Menos "}
          Resultados
        </button>
      </div>
    </>
  );
};
