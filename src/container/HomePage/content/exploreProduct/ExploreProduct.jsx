import ProductList from "../ProductList/ProductList.jsx";
import ViewAll from "../../../../components/ViewAll.jsx";
import React from "react";
import './ExploreProduct.css'

function ExploreProduct() {
  return (
    <div>
      <div className="countdown-timer">
        <h3>Our Products</h3>
        <div className="countdown-body">
          <h1>Explore Our Products</h1>
        </div>
      </div>
      <ProductList />
      <ViewAll
        style={{
          marginLeft: "40%",
        }}
        title="View All Product"
      />
    </div>
  );
}

export default ExploreProduct;
