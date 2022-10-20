import moduleCss from "./PizzaCard.module.css";
import { useState } from "react";
import cn from "classnames";

// props = {...pizza} pizza={pizza}
const PizzaCard = (props) => {
  const availableTypes = ["тонкое", "традиционное"];
  const availableSizes = [26, 30, 40];
  const [activeTypes, setActiveTypes] = useState(props.type[0]);
  const [activeSizes, setActiveSizes] = useState(0);

  const onSelectType = (index) => {
    setActiveTypes(index);
    console.log(index);
  };
  const onSelectSize = (index) => {
    setActiveSizes(index);
    console.log(index);
  };
  
  return (
    <div className={moduleCss.pizzaCard}>
      <img src={props.img} alt="" />
      <h3>{props.name}</h3>
      <div className={moduleCss.pizza_select}>
        <div>
          {availableTypes.map((type, index) => (
            <span
            key={index}
              onClick={() => onSelectType(index)}
              className={cn({
                [moduleCss.active]: activeTypes === index,
                [moduleCss.disabled]: !props.type.includes(index),
              })}
            >
              {type}
            </span>
          ))}
        </div>
        <div>
          {availableSizes.map((sizes, index) => (
            <span
            key={index}
              onClick={() => onSelectSize(index)}
              className={cn({
                [moduleCss.active]: activeSizes === index,
                [moduleCss.disabled]: !props.size.includes(index),
              })}
            >
              {sizes} см.
            </span>
          ))}
        </div>
      </div>
      <div className={moduleCss.pizza_block_bottom}>
        <span className={moduleCss.pizza_block_price}>от {props.price} ₽</span>
        <button className="button button_outline button_add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить </span> <i>3</i>
        </button>
      </div>
    </div>
  );
};

export default PizzaCard;
