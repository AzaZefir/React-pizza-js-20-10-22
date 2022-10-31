import Categories from "./categories/Categories";
import moduleCss from "./Main.module.css";
import PizzaCard from "./pizzaCard/PizzaCard";
import Sort from "./sort/Sort";
import { useState } from "react";
import { SliderPizza } from "./../../common/Slider";

const Main = ({ pizzas, setPizzas, onAddPizza }) => {
  const items = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
  const sortItems = [
    { name: "популярности", type: "rating" },
    { name: "цене", type: "price" },
    { name: "алфавиту", type: "name" },
  ];
  const [category, setCategory] = useState(null);
  const [pizzasFilter, setPizzasFilter] = useState(pizzas);
  const [sortPizzas, setSortPIzzas] = useState({
    type: "rating",
  });

  const onSelectCategory = (index) => {
    setCategory(index);
  };

  // !фильтрация массива пицц в categories
  const filterPizzas = (el) => {
    if (el === "") {
      setPizzasFilter(pizzas);
      return;
    }
    const result = pizzas.filter((item) => {
      return item.category === el;
    });
    setPizzasFilter(result);
  };
  //!Сортировка пицц в sort
  const onSortPizzas = (type) => {
    setSortPIzzas(type);
    const sortedPizzas = pizzasFilter.sort((a, b) =>
      a[type.type].localeCompare(b[type.type])
    );
    setPizzas(sortedPizzas);
  };

  return (
    <div>
      <SliderPizza />
      <div className={moduleCss.wrapper}>
        <Categories
          filterPizzas={filterPizzas}
          onSelectCategory={onSelectCategory}
          category={category}
          setCategory={setCategory}
          items={items}
        />
        <Sort
          onSortPizzas={onSortPizzas}
          sortItems={sortItems}
          activeSortType={sortPizzas.type}
        />
      </div>
      <div className={moduleCss.all_pizzas}>
        <h1>Все пиццы</h1>
        <div className={moduleCss.pizzaCard_wrapper}>
          {pizzasFilter.map((pizza, index) => (
            <PizzaCard
              onAddPizza={onAddPizza}
              key={index}
              {...pizza}
              pizza={pizza}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Main;
