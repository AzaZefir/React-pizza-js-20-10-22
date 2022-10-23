import React from "react";
import EmptyBusketSvg from "../../../assets/emptyBusketSvg.svg";
import css from './EmptyBusket.module.css'

export const EmptyBusket = () => {
  return (
    <div className={css.wrapper}>
      <h1>Корзина пустая 😕</h1>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать
        пиццу, перейди на главную страницу.
      </p>
      <img src={EmptyBusketSvg} alt="" />
      <button>Вернуться назад</button>
    </div>
  );
};
