import React from "react";
import axios from "axios";
import { PizzaBlock } from "../components/PizzaBlock";
import { Categories } from "../components/Categories";
import { Sort } from "../components/Sort";
import { Loading } from "../components/Loading";

export const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categiriId, setCategiriId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: "популярности",
    sortProperty: "rating",
  });

  React.useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'
        const sortBy = sortType.sortProperty.replace('-', '')
        const category = categiriId > 0 ? `category=${categiriId}` : ''

        const [itemsResponse] = await Promise.all([
          axios.get(
            `https://629e5534c6ef9335c0b320e7.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`
          ),
        ]);
        setItems(itemsResponse.data);
        setIsLoading(false);
        window.scrollTo(0, 0);
      } catch {
        alert("Ощибка при запрасе данных");
      }
    }
    fetchData();
  }, [categiriId, sortType]);

  return (
    <>
      <div className="content__top">
        <Categories
          value={categiriId}
          onChangeCategory={(index) => setCategiriId(index)}
        />
        <Sort value={sortType} onChangeSort={(index) => setSortType(index)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Loading key={index} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </>
  );
};
