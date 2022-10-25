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

  return (
    <div className="container">
      <Header />
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={<Main pizzas={pizzas} setPizzas={setPizzas} />}
          />
          <Route path="/busket" element={<Busket />} />
          {/* Main(pizzas={pizzas} setPizzas={setPizzas}) */}
          {/* <Route path="/emptyBusket" element={<EmptyBusket/>}/> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
