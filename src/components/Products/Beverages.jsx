import React, { useContext } from "react";
import Card from "../Card/Card";
import { productsContext } from "../../context/ProductsContext";

function Beverages() {
  const data = useContext(productsContext);
  return (
    <div className="product_page">
      {!data.isLoading ? (
        // <Card data={data} product={data.products.beverages.beveragesTea.productsBeverages} />
        <div>
          <Card
            data={data}
            product={data.products.beverages.beveragesTea.productsBeverages}
          />
          <Card
            data={data}
            product={data.products.beverages.Diet.productsBeverages}
          />
          <Card
            data={data}
            product={data.products.beverages.Herbs.productsBeverages}
          />
          <Card
            data={data}
            product={data.products.beverages.Coffe.productsBeverages}
          />
          <Card
            data={data}
            product={data.products.beverages.JuiceSyrup.productsBeverages}
          />
          <Card
            data={data}
            product={data.products.beverages.WaterSodaDrinks.productsBeverages}
          />
        </div>
      ) : (
        <div
          className="spinner-border text-success  position-absolute top-50 start-50"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  );
}

export default Beverages;
