// ProductList.jsx
import { useState, useRef } from "react";
import "./ProductList.css";
import { productListData } from "../../../data";
import Product from "../../../components/Product";

const ProductList = () => {
    const listRef = useRef(null);

    const handleScroll = (direction) => {
        const itemWidth = 280; 
        if (listRef.current) {
            const scrollAmount = direction === 'left' 
                ? -itemWidth 
                : itemWidth;
            listRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="flash-sales-container">
            <div className="flash-header">
                <div className="navigation-buttons">
                    <button onClick={() => handleScroll('left')}>
                        <box-icon name='chevron-left'></box-icon>
                    </button>
                    <button onClick={() => handleScroll('right')}>
                        <box-icon name='chevron-right'></box-icon>
                    </button>
                </div>
            </div>
            <div className="product-list-container" ref={listRef}>
                {productListData.map((product) => (
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
};

export default ProductList;