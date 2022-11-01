import React from "react";
import css from "./Busket.module.css";
import PizzaBusketSvg from "../../assets/image 5.svg";
import MinusSvg from "../../assets/minus.svg";
import PlusSvg from "../../assets/plusBusket.svg";
import RemoveSvg from "../../assets/remove.svg";

export const BusketCard = ({
  name,
  type,
  id,
  size,
  price,
  onRemovePizza,
  onMinusPizza,
  onAddPizza,
  item,
}) => {
  return (
    <div className={css.busketItems}>
      <div>
        <img src={PizzaBusketSvg} alt="" />
        <div>
          <b>{name}</b>
          <span>
            {type}, {size} см.
          </span>
        </div>
      </div>
      <div className={css.costBlock}>
        <div>
          <img onClick={()=>onMinusPizza(item)} src={MinusSvg} alt="" />
          <b>{item.total}</b>
          <img onClick={()=>onAddPizza(item)} src={PlusSvg} alt="" />
        </div>
        <b>{item.total * price} сом</b>
        <img onClick={() => onRemovePizza(id)} src={RemoveSvg} alt="" />
      </div>
    </div>
  );
};
