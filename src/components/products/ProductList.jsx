/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  return (
    <div className="container mx-auto">
      <div className=" grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {products &&
          products.map((product) => {
            return <ProductItem key={product.id} product={product} />;
          })}
      </div>
    </div>
  );
};

export default ProductList;
