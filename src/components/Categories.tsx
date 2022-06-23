import React from "react";

type CategoriesProps = {
  value: number;
  onChangeCategory: (id: number) => void;
};

export const Categories: React.FC<CategoriesProps> = ({ value, onChangeCategory }) => {
  const [click, setClick] = React.useState(true);

  const handleClick = () => {
    setClick(!click);
  };

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
      <div onClick={handleClick} className="burgerContainer">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <ul className={click ? "ulContainer" : "ulContainerMedia"}>
        {categories.map((categoriesData, id) => (
          <li
            key={id}
            onClick={() => onChangeCategory(id)}
            className={value === id ? "active" : ""}
          >
            {categoriesData}
          </li>
        ))}
      </ul>
    </div>
  );
};
