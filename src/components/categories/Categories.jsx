/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import CategoryItem from "./CategoryItem";

const Categories = ({ categories }) => {
  return (
    <div className="flex justify-center flex-wrap mx-5 my-3 p-3 gap-3">
      {categories &&
        categories.map((category) => {
          return <CategoryItem key={category} category={category} />;
        })}
    </div>
  );
};

export default Categories;
