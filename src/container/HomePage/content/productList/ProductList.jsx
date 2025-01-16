import { useRef } from "react";
import "./ProductList.css";
import { productListData } from "../../../../data.js";
import Product from "../../../../components/Product.jsx";

const ProductList = () => {
    // Create a reference to the product list can access to DOM
    const listRef = useRef(null);
    // Get the DOM element referenced by listRef
    const handleScroll = (direction) => {
        const list = listRef.current;

        if (list) {
            // Get the width of the first element in the list
            // Use optional chaining to avoid errors if the element doesn't exist
            // Default to 280px if the width is unavailable
            const itemWidth = list.firstElementChild?.offsetWidth || 280; 
            // Determine the scroll distance based on the direction
            // Negative value (-itemWidth) for left, positive value (itemWidth) for right
            const scrollAmount = direction === 'left' ? -itemWidth : itemWidth;
            // Scroll the list by the calculated distance
            // Use `behavior: 'smooth'` for a smooth scrolling effect
            list.scrollBy({
                left: scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="flash-sales-container">
            <div className="flash-header">
                <div className="navigation-buttons">
                    <button onClick={() => handleScroll('left')}>
                        <box-icon name="chevron-left"></box-icon>
                    </button>
                    <button onClick={() => handleScroll('right')}>
                        <box-icon name="chevron-right"></box-icon>
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
