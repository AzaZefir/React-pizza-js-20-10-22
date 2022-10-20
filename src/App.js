
import { useState } from 'react';
import './App.css';
import Header from './components/header/Header'
import Main from './components/main/Main';
import { pizzaCardItems } from './data/db';

function App() {
  const [pizzas, setPizzas]= useState(pizzaCardItems)

  return (
    <div className="container">
      <Header/>
      <div className='app-container'>
        <Main pizzas={pizzas} setPizzas={setPizzas}/>
        {/* Main(pizzas={pizzas} setPizzas={setPizzas}) */}
      </div>
    </div>
  );
}

export default App;
