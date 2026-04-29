import React, { memo } from "react";

function ProductCard({ product, addToCart }) {
  console.log("Rendered:", product.title, product.id);

  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h4>{product.title}</h4>

      <button onClick={()=>addToCart(product.id)}>Add To Cart</button>
    </div>
  );
}

export default memo(ProductCard);
