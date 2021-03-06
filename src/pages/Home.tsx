import React from "react";
import qs from "qs";

import { useSelector, useDispatch } from "react-redux";
import {
  setCategiriId,
  setCurrentPage,
  setFilters,
} from "../redux/filter/slice";
import { fetchPizzas } from "../redux/pizzas/asyncAtion";

import { PizzaBlock } from "../components/PizzaBlock";
import { Categories } from "../components/Categories";
import { SortPopup, list } from "../components/Sort";
import { Loading } from "../components/Loading";
import Pagination from "../components/Pagination/index";
import { useNavigate } from "react-router-dom";
import { selectFilter } from "../redux/filter/selectors";
import { selectPizza } from "../redux/pizzas/selectors";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../redux/store";
import { SearchPizzaParams } from "../redux/pizzas/types";

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isSearch = React.useRef(false);
  const isM = React.useRef(false);

  const { categoryId, sort, currentPage, searchValue } =
    useSelector(selectFilter);
  const { items, status } = useSelector(selectPizza);

  const onChangeCategory = React.useCallback((id: number) => {
    //оборачиваем в useCallback для предотврощения перерисовок
    dispatch(setCategiriId(id));
  }, []);

  const onChangePage = (value: number) => {
    dispatch(setCurrentPage(value));
  };

  const getPizzas = async () => {
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const sortBy = sort.sortProperty.replace("-", "");
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `search=${searchValue}` : "";

    dispatch(
      fetchPizzas({
        order,
        sortBy,
        category,
        search,
        currentPage: String(currentPage),
      })
    );
  };

  /*   React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(
        window.location.search.substring(1)
      ) as unknown as SearchPizzaParams;

      const sort = list.find((obj) => obj.sortProperty === params.sortBy);

      dispatch(
        setFilters({
          searchValue: params.search,
          categoryId: Number(params.category),
          currentPage: Number(params.currentPage),
          sort: sort || list[0],
        })
      );
    }
    isSearch.current = true;
  }, []); */

  React.useEffect(() => {
    window.scrollTo(0, 0);
    getPizzas();

    isSearch.current = false;
  }, [categoryId, sort.sortProperty, currentPage, searchValue]);

  /*   React.useEffect(() => {
    if (isM.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    isM.current = true;
  }, [categoryId, sort.sortProperty, currentPage]); */

  const pizzas = items
    .filter((obj: any) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((obj: any) => <PizzaBlock key={obj.id} {...obj} />);

  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <SortPopup sort = {sort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === "error" ? (
        <div className="content__error-info">
          <h2>Произошла ошибка 😕</h2>
          <p>
            К сожалению, не удалось получить питсы. Попробуйте повторить попытку
            позже.
          </p>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading"
            ? [...new Array(6)].map((_, index) => <Loading key={index} />)
            : pizzas}
        </div>
      )}
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </>
  );
};
