import moduleCss from "./PizzaCard.module.css";
import { useState } from "react";
import cn from "classnames";
import { PlusPizzaCard } from "../../../common/Svg";

// = {...pizza} pizza={pizza}
const PizzaCard = ({type,size,img,name,price,onAddPizza,id,count}) => {
  const availableTypes = ["тонкое", "традиционное"];
  const availableSizes = [26, 30, 40];
  const [activeTypes, setActiveTypes] = useState(type[0]);
  const [activeSizes, setActiveSizes] = useState(0);

  const onSelectType = (index) => {
    setActiveTypes(index);
    console.log(index);
  };
  const onSelectSize = (index) => {
    setActiveSizes(index);
    console.log(index);
  };
  const onAdd = ()=>{
    const pizza={
      id,
      count,
      name,
      img,
      price,
      size:availableSizes[activeSizes],
      type:availableTypes[activeTypes]
    }
    onAddPizza(pizza)
  }
  
  return (
    <div className={moduleCss.pizzaCard}>
      <img src={img} alt="" />
      <h3>{name}</h3>
      <div className={moduleCss.pizza_select}>
        <div>
          {availableTypes.map((types, index) => (
            <span
            key={index}
              onClick={() => onSelectType(index)}
              className={cn({
                [moduleCss.active]: activeTypes === index,
                [moduleCss.disabled]: !type.includes(index),
              })}
            >
              {types}
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
                [moduleCss.disabled]: !size.includes(index),
              })}
            >
              {sizes} см.
            </span>
          ))}
        </div>
      </div>
      <div className={moduleCss.pizza_block_bottom}>
        <span className={moduleCss.pizza_block_price}>от {price} ₽</span>
        <button onClick={onAdd} className="button button_outline button_add">
          <PlusPizzaCard/>
          <span>Добавить </span>
        </button>
      </div>
    </div>
  );
};

export default PizzaCard;
