import React, { useState, useCallback, useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

function ProductList() {
  const [cartCount, setCartCount] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      try {
        let res = await axios.get("https://dummyjson.com/products");
        setProducts(res.data.products);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  // memoized function
  const addToCart = useCallback(() => {
    setCartCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <h3>Cart: {cartCount}</h3>

      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;
