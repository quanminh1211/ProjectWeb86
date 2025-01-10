import React from "react";
import "./BestSelling.css";
import { productListData } from "../../../data.js";
import Product from "../../../components/Product.jsx";

function BestSelling() {
  
  const ListBestSelling = productListData.slice(0, 4); 

  return (
    <div className="bestSelling-container">
      <h3>This month</h3>
      <h1>Best Selling Products</h1>
      <div className="listProductSelling-container">
        {ListBestSelling.map((product) => (
          <Product
            key={product.id}
            img={product.image}
            name={product.name}
            price={product.price}
            originalPrice={product.originalPrice}
            discount={product.discount}
            rating={product.rating}
            reviews={product.reviews}
          />
        ))}
      </div>
    </div>
  );
}

export default BestSelling;