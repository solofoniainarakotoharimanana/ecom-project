/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Rating from "../../services/Rating";
import { BsPencilFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { addToCart } from "../../redux/CartSlice";
import { useDispatch } from "react-redux";
import { createPortal } from "react-dom";
import ModalProductDetail from "../modal/ModalProductDetail";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const [toggleModal, setToggleModal] = useState(false);
  const addToCartList = (payload) => {
    dispatch(addToCart(payload));
  };

  const showOrCloseModal = () => {
    setToggleModal(!toggleModal);
  };

  return (
    <div className="bg-zinc-100 flex flex-col justify-center shadow rounded px-2 space-y-4 mb-4">
      <h1 className="text-indigo-500 text-center m-1 text-lg font-bold">
        {product.name}
      </h1>
      <img
        onClick={showOrCloseModal}
        className="object-cover lg:w-96 hover:cursor-pointer"
        src={product.thumbnailImage}
        alt={product.name}
      />
      <div className="flex flex-row justify-between">
        <div>
          <span className="text-sm text-zinc-400">Category: </span>
          <span className="text-indigo-700 text-sm font-bold">
            {product.productCategory}
          </span>
        </div>
        <div>
          <span className="text-sm text-zinc-400">Brand: </span>
          <span className="text-indigo-700 text-sm font-bold">
            {product.brand}
          </span>
        </div>
      </div>

      <div className="text-sm text-gray-500 text-start first-letter:text-2xl first-letter:font-bol">
        {product.description}
      </div>
      <div className="flex flex-row justify-between">
        <div>
          <span className="text-sm text-zinc-400">Stock: </span>
          <span className="text-indigo-700 text-sm font-bold">
            {product.inStock ? "In stock" : "Out of stock"}
          </span>
        </div>
        <div>
          <span className="text-sm text-zinc-400">Price: </span>
          <span className="text-indigo-700 text-sm font-bold">
            {product.basePrice} €
          </span>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-row">
          <p className="text-sm text-zinc-400">Colors: </p>
          <div className="flex flex-row justify-between mt-1">
            {product.colorOptions.length > 0 &&
              product.colorOptions.map((color) => {
                return (
                  <div
                    key={color}
                    className="w-3 h-3 ml-1 rounded-full bg-black"
                    style={{ background: color }}
                  ></div>
                );
              })}
          </div>
        </div>
        <Rating className="text-xs" rating={product.rating} />
      </div>
      <div className="flex flex-row mx-4 justify-between ">
        <button
          onClick={showOrCloseModal}
          className="inline-flex items-center 
          px-4 py-2 bg-indigo-700
          hover:bg-indigo-600 text-white
           text-sm font-medium rounded-md mb-4"
        >
          <BsPencilFill className="mr-1" />
          Detail
        </button>
        <button
          onClick={() =>
            addToCartList({
              id: product.id,
              productName: product.name,
              productImage: product.thumbnailImage,
              productBrand: product.brand,
              productPrice: product.basePrice,
              productCategory: product.productCategory,
              productColor: product.colorOptions[0],
              stock: product.stock,
              total: 1 * product.basePrice,
              quantity: 1,
            })
          }
          className="inline-flex items-center 
          px-4 py-2 bg-rose-700
          hover:bg-rose-600 text-white
           text-sm font-medium rounded-md mb-4"
        >
          <FaShoppingCart className="mr-1" />
          Add to cart
        </button>
      </div>
      {toggleModal &&
        createPortal(
          <ModalProductDetail
            product={product}
            toggleModal={toggleModal}
            showOrCloseModal={showOrCloseModal}
          />,
          document.body
        )}
    </div>
  );
};

export default ProductItem;
