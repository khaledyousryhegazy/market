import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const productsContext = createContext();

function ProductsProvider(props) {
  // UseState
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const apiLink = "https://api-xh9w.onrender.com/products";
    // Fetch Data From Api
    axios
      .get(apiLink)
      .then(function (res) {
        // Set Data To State
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <productsContext.Provider value={{ products, isLoading }}>
      {props.children}
    </productsContext.Provider>
  );
}

export default ProductsProvider;
