import React from "react";
import axios from "axios";
import { PizzaBlock } from "../components/PizzaBlock";
import { Categories } from "../components/Categories";
import { Sort } from "../components/Sort";
import { Loading } from "../components/Loading";

export const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const [itemsResponse] = await Promise.all([
          axios.get("https://629e5534c6ef9335c0b320e7.mockapi.io/items"),
        ]);
        setItems(itemsResponse.data);
        setIsLoading(false);
      } catch {
        alert("Ощибка при запрасе данных");
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((obj) => (
          <PizzaBlock key={obj.id} {...obj} />
        ))}
        {isLoading
          ? [...new Array(6)].map((_, index) => <Loading key={index} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </>
  );
};
