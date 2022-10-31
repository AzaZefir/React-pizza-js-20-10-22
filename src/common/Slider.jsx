import React from "react";
import Slider from "react-slick";
import { slideArr } from "../data/db";

export const SliderPizza = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className='app-container sliderSlick'> 
      <h2>Pizzas in our store</h2>
      <Slider {...settings}>
        {slideArr.map((item) => (
          <div key={item.id}  className="slider__img">
            <img src={item.img} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};
