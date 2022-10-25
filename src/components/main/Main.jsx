import Categories from "./categories/Categories";
import moduleCss from "./Main.module.css";
import PizzaCard from "./pizzaCard/PizzaCard";
import Sort from "./sort/Sort";
import { useState } from 'react';

const Main = ({pizzas,setPizzas}) => {
  const items = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
  const sortItems = ["популярности", "цене", "алфавиту"];
  const [category, setCategory]=useState(null)

  const onSelectCategory=(index)=>[
    setCategory(index)
  ]

  return (
    <div>
      <div className={moduleCss.wrapper}>
        <Categories onSelectCategory={onSelectCategory} category={category} setCategory={setCategory} items={items} />
        <Sort sortItems={sortItems} />
      </div>
      <div className={moduleCss.all_pizzas}>
        <h1>Все пиццы</h1>
        <div className={moduleCss.pizzaCard_wrapper}>
          {pizzas.map((pizza,index) => (
            <PizzaCard key={index} {...pizza} pizza={pizza} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Main;
