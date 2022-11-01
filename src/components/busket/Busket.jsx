import React from "react";
import BusketSvg from "../../assets/iconfinder_shopping-cart_2561279 1.svg";
import TrashSvg from "../../assets/iconfinder_trash-2_3324927 1.svg";
import css from "./Busket.module.css";
import { Link } from "react-router-dom";
import { EmptyBusket } from "./emptyBusket/EmptyBusket";
import { BusketCard } from "./BusketCard";

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
            <BusketCard {...onePizza} onRemovePizza={onRemovePizza}/>
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
