import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const Search = () => {
  return (
    <div
      className="bg-indigo-800 relative
        p-6 flex 
        justify-end"
    >
      <input
        type="text"
        placeholder="Search by product title"
        className="w-[350px] px-3 py-3 rounded-full border-0 focus:border-2 focus:border-indigo-500"
      />
      <div
        className="absolute top-6 right-5 
        h-12 flex items-center bg-indigo-700
         p-3 rounded-r-full justify-end
        "
      >
        <IoSearchSharp className=" text-white text-xl" />
      </div>
    </div>
  );
};

export default Search;
