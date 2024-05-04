/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const CategoryItem = ({ category, setSearchCategory }) => {
  return (
    <button
      onClick={() => setSearchCategory(category)}
      className="bg-transparent hover:bg-blue-500 
                  text-blue-700 font-semibold hover:text-white
                  py-2 px-4 border border-blue-500
                  hover:border-transparent rounded"
    >
      {category.toUpperCase()}
    </button>
  );
};

export default CategoryItem;
