import React from "react";
import { Link } from "react-router-dom";
import EmptyBusketSvg from "../../../assets/emptyBusketSvg.svg";
import css from "./EmptyBusket.module.css";

export const EmptyBusket = () => {
  return (
    <div className={css.wrapper}>
      <h1>Корзина пустая 😕</h1>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать
        пиццу, перейди на главную страницу.
      </p>
      <img src={EmptyBusketSvg} alt="" />
      <Link to="/">
        <button>Вернуться назад</button>
      </Link>
    </div>
  );
};
