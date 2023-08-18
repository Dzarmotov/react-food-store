import React from "react";

type CategoriesProps = {
  value: number;
  onSelectedCategory: (i: number) => void;
}

const arr = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const Categories: React.FC<CategoriesProps> = React.memo( ({ value, onSelectedCategory }) => {

    return (
      <div className="categories">
        <ul>
          {arr.map((ctgr, i) => (
            <li
              key={i}
              className={value === i ? "active" : ""}
              onClick={() => onSelectedCategory(i)}
            >
              {ctgr}
            </li>
          ))}
        </ul>
      </div>
    );
  }
)

export default Categories;
