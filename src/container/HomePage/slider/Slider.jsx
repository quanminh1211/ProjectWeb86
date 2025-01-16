import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Slider.css";  // Make sure your custom styles are defined here
import First from "../../../assets/images/2-1617205179-141-width660height371.jpg";
import Second from "../../../assets/images/chiem-nguong-hinh-anh-iphone-14-pro-didongmy.jpg";
import Third from "../../../assets/images/hinh-nen-dep-cho-iphone-16-series-thumb_7cf4dae808ea442083dbe9e82e6baefb.webp";
import Fourth from "../../../assets/images/trasera-iphone-12-pro.webp";

function SliderImage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slider-item">
          <img src={First} alt="iPhone 12 Pro" />
        </div>
        <div className="slider-item">
          <img src={Second} alt="iPhone 14 Pro" />
        </div>
        <div className="slider-item">
          <img src={Third} alt="iPhone 16 Series Wallpaper" />
        </div>
        <div className="slider-item">
          <img src={Fourth} alt="iPhone 12 Pro Rear" />
        </div>
      </Slider>
    </div>
  );
}

export default SliderImage;
