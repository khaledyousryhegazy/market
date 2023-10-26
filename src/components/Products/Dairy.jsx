import React, { useContext } from "react";
import Card from "../Card/Card";
import { productsContext } from "../../context/ProductsContext";

function Dairy() {
  const data = useContext(productsContext);

  return (
    <div className="product_page">
      {!data.isLoading ? (
        <Card data={data} product={data.products.dairy} />
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

export default Dairy;
