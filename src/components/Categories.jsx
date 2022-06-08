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
        {categories.map((categoriesData, index) => (
          <li
            key={index}
            onClick={() => onChangeCategory(index)}
            className={value === index ? "active" : ''}
          >
            {categoriesData}
          </li>
        ))}
      </ul>
    </div>
  );
};
