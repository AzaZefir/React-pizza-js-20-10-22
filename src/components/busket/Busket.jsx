import React from "react";
import BusketSvg from "../../assets/iconfinder_shopping-cart_2561279 1.svg";
import TrashSvg from "../../assets/iconfinder_trash-2_3324927 1.svg";
import PizzaBusketSvg from "../../assets/image 5.svg";
import MinusSvg from "../../assets/minus.svg";
import PlusSvg from "../../assets/plusBusket.svg";
import RemoveSvg from "../../assets/remove.svg";
import css from "./Busket.module.css";
import { Link } from "react-router-dom";
import { EmptyBusket } from "./emptyBusket/EmptyBusket";

export const Busket = ({pizzaInBusket,onRemovePizza,onClearBusket}) => {

  let totalPrice = 0;
  pizzaInBusket.forEach((el) => (totalPrice += Number.parseFloat(el.price)));
  let totalCount = 0
  pizzaInBusket.forEach((el)=>(totalCount += Number.parseFloat(el.count)))

  return (
    <>
      {pizzaInBusket.length ? (
        <div className={css.wrapper}>
          <div className={css.busketHeader}>
            <div>
              <img src={BusketSvg} alt="" />
              <h2>Корзина</h2>
            </div>
            <div onClick={onClearBusket}>
              <img src={TrashSvg} alt="" />
              <span>Очистить корзину</span>
            </div>
          </div>
          {pizzaInBusket.map((onePizza) => (
            <div className={css.busketItems}>
              <div>
                <img src={PizzaBusketSvg} alt="" />
                <div>
                  <b>{onePizza.name}</b>
                  <span>
                    {onePizza.type}, {onePizza.size} см.
                  </span>
                </div>
              </div>
              <div className={css.costBlock}>
                <div>
                  <img src={MinusSvg} alt="" />
                  <b>2</b>
                  <img src={PlusSvg} alt="" />
                </div>
                <b>{onePizza.price} сом</b>
                <img onClick={()=>onRemovePizza(onePizza.id)} src={RemoveSvg} alt="" />
              </div>
            </div>
          ))}
          <div className={css.totalCount}>
            <span>
              Всего пицц:<b> {totalCount} шт.</b>
            </span>
            <span>
              Сумма заказа:<b> {totalPrice} сом</b>{" "}
            </span>
          </div>
          <div className={css.buttons}>
            <Link to="/">
              <button> Вернуться назад</button>
            </Link>

            <button>Оплатить сейчас</button>
          </div>
        </div>
      ) : (
        <EmptyBusket />
      )}
    </>
  );
};
