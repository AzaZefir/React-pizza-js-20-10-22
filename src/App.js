import { useState } from "react";
import "./App.css";
import { Busket } from "./components/busket/Busket";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { pizzaCardItems } from "./data/db";
import { Routes, Route } from "react-router-dom";

function App() {
  const [pizzas, setPizzas] = useState(pizzaCardItems);
  const [pizzaInBusket, setPizzaInBusket] = useState([]);

  let totalPrice = pizzaInBusket.reduce(
    (prevVal, curVal) => prevVal + curVal.total * curVal.price,
    0
  );
  let totalCount = 0;
  pizzaInBusket.forEach((el) => (totalCount += Number.parseFloat(el.count)));

  //!добавление пиццы в корзину
  const onAddPizza = (item) => {
    const existPizza = pizzaInBusket.find((el) => el.id === item.id);
    if (existPizza) {
      const newPizza = pizzaInBusket.map((el) =>
        el.id === item.id ? { ...existPizza, total: existPizza.total + 1 } : el
      );
      setPizzaInBusket(newPizza);
    } else {
      const newPizza = [...pizzaInBusket, { ...item, total: 1 }];
      setPizzaInBusket(newPizza);
    }
  };
  //!удаление одной пиццы из корзины
  const onMinusPizza = (item) => {
    const exist = pizzaInBusket.find((el) => el.id === item.id);
    if (exist.total === 1) {
      const newPizza = pizzaInBusket.filter((el) => el.id !== item.id);
      setPizzaInBusket(newPizza);
    } else {
      const newPizza = pizzaInBusket.map((el) =>
        el.id === item.id ? { ...exist, total: exist.total - 1 } : el
      );
      setPizzaInBusket(newPizza);
    }
  };
  //!удаление пиццы из корзины
  const onRemovePizza = (id) => {
    setPizzaInBusket((el) => {
      return el.filter((item) => {
        return id !== item.id;
      });
    });
  };

  //! удаление всей корзины
  const onClearBusket = () => {
    setPizzaInBusket([]);
  };
  return (
    <div className="container">
      <Header
        pizzaInBusket={pizzaInBusket}
        totalPrice={totalPrice}
        totalCount={totalCount}
      />

      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={
              <Main
                onAddPizza={onAddPizza}
                pizzas={pizzas}
                setPizzas={setPizzas}
              />
            }
          />
          <Route
            path="/busket"
            element={
              <Busket
                onClearBusket={onClearBusket}
                onRemovePizza={onRemovePizza}
                pizzaInBusket={pizzaInBusket}
                totalPrice={totalPrice}
                totalCount={totalCount}
                onMinusPizza={onMinusPizza}
                onAddPizza={onAddPizza}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
