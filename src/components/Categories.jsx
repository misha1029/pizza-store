import React from "react";

export const Categories = ({value, onChangeCategory}) => {

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoriesData, id) => (
          <li
            key={id}
            onClick={() => onChangeCategory(id)}
            className={value === id ? "active" : ''}
          >
            {categoriesData}
          </li>
        ))}
      </ul>
    </div>
  );
};
