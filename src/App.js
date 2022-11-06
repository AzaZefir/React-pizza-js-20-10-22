import { useState, useEffect } from "react";
import "./App.css";
import { Busket } from "./components/busket/Busket";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [pizzaInBusket, setPizzaInBusket] = useState([]);
  const [pizzasFilter, setPizzasFilter] = useState([]);

  let totalPrice = pizzaInBusket.reduce(
    (prevVal, curVal) => prevVal + curVal.total * curVal.price,
    0
  );
  let totalCount = pizzaInBusket.reduce(
    (prevVal, curVal) => prevVal + curVal.total * curVal.count,
    0
  );

  //!добавление пиццы в корзину
  const onAddPizza = (item) => {
    const existPizza = pizzaInBusket.find((el) => el.id === item.id);
    if (existPizza) {
      const newPizza = pizzaInBusket.map((el) =>
        el.id === item.id ? { ...existPizza, total: existPizza.total + 1 } : el
      );
      setPizzaInBusket(newPizza);
      localStorage.setItem("pizzaInBusket", JSON.stringify(newPizza));
    } else {
      const newPizza = [...pizzaInBusket, { ...item, total: 1 }];
      setPizzaInBusket(newPizza);
      localStorage.setItem("pizzaInBusket", JSON.stringify(newPizza));
    }
  };
  //!удаление одной пиццы из корзины
  const onRemovePizza = (item) => {
    const exist = pizzaInBusket.find((el) => el.id === item.id);
    if (exist.total === 1) {
      const newPizza = pizzaInBusket.filter((el) => el.id !== item.id);
      setPizzaInBusket(newPizza);
      localStorage.setItem("pizzaInBusket", JSON.stringify(newPizza));
    } else {
      const newPizza = pizzaInBusket.map((el) =>
        el.id === item.id ? { ...exist, total: exist.total - 1 } : el
      );
      setPizzaInBusket(newPizza);
      localStorage.setItem("pizzaInBusket", JSON.stringify(newPizza));
    }
  };
  useEffect(() => {
    setPizzaInBusket(
      localStorage.getItem("pizzaInBusket")
        ? JSON.parse(localStorage.getItem("pizzaInBusket"))
        : []
    );
  }, []);

  useEffect(() => {
    axios.get("./db.json").then(({ data }) => {
      setPizzas(data.pizzaCardItems);
    });
    // fetch("http://localhost:3000/db.json")
    //   .then((response) => {
    //     console.log(response);
    //     response.json()
    //   .then((data) => {
    //     console.log(data);
    //     setPizzas(data.pizzaCardItems);
    //   });
    // });
  }, []);

  // ! filter pizzas async await
  useEffect(() => {
    const filteredPizzas = async () => {
      const { data } = await axios.get("./db.json");
      setPizzasFilter(data.pizzaCardItems);
    };
    filteredPizzas();
  }, []);
 // ! filter pizzas
const filterPizzas = (el) => {
    if (el === "") {
      setPizzas(pizzasFilter);
      return;
    }
    const result = pizzasFilter.filter((item) => {
      return item.category === el;
    });
    setPizzas(result);
  };

  // //!удаление пиццы из корзины
  // const onRemovePizza = (id) => {
  //   setPizzaInBusket((el) => {
  //     return el.filter((item) => {
  //       return id !== item.id;
  //     });
  //   });
  // };

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
                filterPizzas={filterPizzas}
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
