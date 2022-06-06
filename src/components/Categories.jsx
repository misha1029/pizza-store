import React from "react";

export const Categories = () => {
  const [activeIndex, setActiveIndex] = React.useState();

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const onClickCategory = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((data, index) => (
          <li
          key = {index}
            onClick={() => onClickCategory(index)}
            className={activeIndex === index ? "active" : ""}
          >
            {data}
          </li>
        ))}
      </ul>
    </div>
  );
};
