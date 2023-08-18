import React from "react";

import {
  Categories,
  Sort,
  Skeleton,
  PizzaBlock,
  Pagination,
} from "../components";
import {
  setCategory,
  setCurrentPage,
} from "../redux/Slices/filterSlice";
import { fetchPizzas } from "../redux/Slices/pizzaSlice";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { categoryId, sortType, currentPage, searchValue } = useAppSelector(state => state.filter)
  const { items, status } = useAppSelector((state) => state.pizza);

  const onChangePage = (number: number) => dispatch(setCurrentPage(number));
  const onChangeCategory = React.useCallback((idx : number) => {
    dispatch(setCategory(idx))
  }, [])

  React.useEffect(() => {
    const category = categoryId > 0 ? `&category=${categoryId}` : "";
    const sortBy = sortType.sortProperty;
    const search = searchValue ? `&title=*${searchValue}*` : "";
    const paginate = `page=${currentPage}&limit=4`;

    dispatch(
      fetchPizzas({
        category,
        sortBy,
        search,
        paginate,
      })
    );
  }, [categoryId, sortType, currentPage, searchValue]);

  return (
    <>
      <div className="content__top">
        <Categories
          value={categoryId}
          onSelectedCategory={onChangeCategory}
        />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {status === "Error" ? (
          <div className="content_error-info">
            <h2>
              Произошла ошибка <span>😕</span>
            </h2>
            <p>Не удалось подгрузить пиццы. Попробуйте попытку позже.</p>
          </div>
        ) : (
          <div className="content__items">
            {status === "loading"
              ? [...Array(6)].map((_, index) => <Skeleton key={index} />)
              : items &&
                items.map((items: any) => (
                  <Link to={`/pizza/${items.id}`} key={items.id}>
                    <PizzaBlock {...items} />
                  </Link>
                ))}
          </div>
        )}
      </div>

      <Pagination currentPage={currentPage} onChangePaginate={onChangePage} />
    </>
  );
};

export default Home;
