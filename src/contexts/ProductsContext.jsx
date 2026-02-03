/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ProductsContext = createContext(null);
const endpoint = "https://fakestoreapi.com/products";

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(endpoint)
      .then((res) => setProducts(res.data))
      .catch(() => console.error("errore richiesta"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ProductsContext.Provider value={{ products, loading }}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts deve essere usato dentro ProductsProvider");
  }
  return context;
}

export default ProductsContext;
