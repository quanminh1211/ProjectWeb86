// Product.jsx
import React from "react";
import "./Product.css";
import "boxicons";

function Product({
  img,
  name,
  price,
  originalPrice,
  discount,
  rating,
  reviews,
}) {
  return (
    <div className="product-card">
      <div className="product-image">
        <span className="discount">{-discount}%</span>
        <img src={img} alt={name} />
        <button className="wishlist">
          <box-icon name="heart" type="regular"></box-icon>
        </button>
        <button className="view">
          <box-icon name="show"></box-icon>
        </button>
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <div className="price-container">
          <span className="current-price">{price} Hug</span>
          <span className="original-price">{originalPrice} Hug</span>
        </div>
        <div className="rating">
          {[...Array(5)].map((_, index) => (
            <box-icon
              key={index}
              name="star"
              type={index < rating ? "solid" : "regular"}
              color="#FFD700"
            ></box-icon>
          ))}
          <span>({reviews})</span>
        </div>
      </div>
      <div className="product-action">
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
