import { useState } from "react";
import "./App.css";
import { Busket } from "./components/busket/Busket";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { pizzaCardItems } from "./data/db";
import { Routes, Route } from "react-router-dom";
// import { EmptyBusket } from "./components/busket/emptyBusket/EmptyBusket";

function App() {
  const [pizzas, setPizzas] = useState(pizzaCardItems);
  const [pizzaInBusket, setPizzaInBusket] = useState([]);

  //!добавление пиццы в корзину
  const onAddPizza = (item) => {
    const existPizza = pizzaInBusket.find((el) => el.id === item.id);
    if (existPizza) {
      setPizzaInBusket(
        pizzaInBusket.map((el) =>
          el.id === item.id
            ? { ...existPizza, total: existPizza.total + 1 }
            : el
        )
      );
    } else {
      setPizzaInBusket([...pizzaInBusket, { ...item, total: 1 }]);
    }
    setPizzaInBusket([...pizzaInBusket, item]);
  };
  //!удаление пиццы из корзины
  const onRemovePizza = (id) => {
    setPizzaInBusket((el) => {
      return el.filter((item) => {
        return id !== item.id;
      });
    });
  };

  const onClearBusket =()=>{
    setPizzaInBusket([])
  }

  return (
    <div className="container">
      <Header pizzaInBusket={pizzaInBusket} />
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
              />
            }
          />
          {/* Main(pizzas={pizzas} setPizzas={setPizzas}) */}
          {/* <Route path="/emptyBusket" element={<EmptyBusket/>}/> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
