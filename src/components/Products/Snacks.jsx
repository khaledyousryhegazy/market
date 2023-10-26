import React, { useContext } from "react";
import Card from "../Card/Card";
import { productsContext } from "../../context/ProductsContext";

function Snacks() {
  const data = useContext(productsContext);

  return (
    <div className="product_page">
      {!data.isLoading ? (
        <Card data={data} product={data.products.snacks} />
      ) : (
        <div
          className="spinner-border text-success position-absolute top-50 start-50"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  );
}

export default Snacks;
