import React from "react";
import BusketSvg from "../../assets/iconfinder_shopping-cart_2561279 1.svg";
import TrashSvg from "../../assets/iconfinder_trash-2_3324927 1.svg";
import css from "./Busket.module.css";
import { Link } from "react-router-dom";
import { EmptyBusket } from "./emptyBusket/EmptyBusket";
import { BusketCard } from "./BusketCard";

export const Busket = ({
  pizzaInBusket,
  onRemovePizza,
  onClearBusket,
  totalCount,
  totalPrice,
  onAddPizza
}) => {
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
            <BusketCard
            item={pizzaInBusket.find((el)=> el.id === onePizza.id)}
              key={onePizza.id}
              {...onePizza}
              onRemovePizza={onRemovePizza}
              onAddPizza={onAddPizza}
            />
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
