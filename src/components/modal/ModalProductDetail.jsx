/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import Rating from "../../services/Rating";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/CartSlice";

const ModalProductDetail = ({ product, showOrCloseModal, toggleModal }) => {
  const [qty, setQty] = useState(1);
  const [total, setTotal] = useState(0);
  const [errorQty, setErrorQty] = useState("");
  const [color, setColor] = useState("");
  const refQty = useRef(qty);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const increaseQuantity = () => {
    if (qty < product.stock) {
      setQty(qty + 1);
      setErrorQty("");
    } else {
      setErrorQty("The quantity you request exceeds stock .");
    }
  };
  const decreaseQuantity = () => {
    setErrorQty("");
    setQty(qty > 1 ? qty - 1 : 1);
  };

  const addToCartList = (payload) => {
    dispatch(addToCart(payload));
    showOrCloseModal();
    navigate("/cart");
  };

  useEffect(() => {
    setTotal(product.basePrice * qty);
  }, [qty]);

  console.log(qty);

  return (
    <div
      onClick={showOrCloseModal}
      className="fixed z-50 top-0 left-0 h-full w-full bg-gray-800/95 flex justify-center items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-3/4 relative rounded bg-gray-50 p-7 "
      >
        <div className="flex">
          <h4 className="mx-auto text-indigo-800 font-bold text-2xl mt-2 mb-4">
            {product.name}
          </h4>
          <button
            onClick={showOrCloseModal}
            className="
           w-8 h-8 -top-4 absolute left-[602px]  ml-96
          bg-red-600 text-white 
          rounded-full font-bold text-xl hover:bg-red-700"
          >
            X
          </button>
        </div>
        <div className="flex flex-row gap-1 space-y-3">
          <div className="w-1/4 p-1 flex flex-col space-y-2">
            <img
              src={product.thumbnailImage}
              alt={product.name}
              className="object-cover"
            />
            <img src={product.featuredImage} alt={product.name} className="" />
          </div>
          <div className="w-2/4 border-2 border-zinc-400 h-full content-start">
            <img src={product.thumbnailImage} alt={product.name} className="" />
          </div>
          <div className="w-2/4 flex flex-col">
            <div className="flex flex-row p-3 justify-between">
              <span className="text-lg font-bold text-indigo-700">
                {product.productCategory}
              </span>
              <span className="text-lg font-bold text-indigo-700">
                {product.brand}
              </span>
            </div>
            <p className="text-sm ml-3 text-zinc-400 text-start">
              {product.description}
            </p>
            <div className="flex flex-row px-3 justify-between mt-3">
              <div className="w-[200px]">
                <span className="text-sm text-slate-800 font-semibold">
                  CPU:{" "}
                </span>
                <span className="text-sm font-bold text-indigo-700">
                  {product.CPU}
                </span>
              </div>
              <div>
                <span className="text-sm text-slate-800 font-semibold">
                  Price unit:{" "}
                </span>
                <span className="text-sm font-bold text-indigo-700">
                  {product.basePrice} €
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-between px-3 mt-3">
              <div className="flex flex-row gap-3">
                <span className="text-sm text-slate-800 font-semibold">
                  Quantity:{" "}
                </span>
                <button
                  onClick={decreaseQuantity}
                  className="bg-black text-white px-3 py-1 rounded font-bold"
                >
                  -
                </button>

                <span className="border-2 border-zinc-400 text-end bg-slate-50 w-12 rounded pr-2">
                  {qty}
                </span>
                <button
                  onClick={increaseQuantity}
                  className="bg-black text-white px-2 py-1 rounded font-bold"
                >
                  +
                </button>
              </div>

              <div className="">
                <span className="text-sm text-slate-800 font-semibold">
                  Total:{" "}
                </span>
                <span className="text-sm font-bold text-indigo-700">
                  {total} €
                </span>
              </div>
            </div>
            {errorQty && (
              <div className="mt-2 mb-3 text-sm text-red-700 font-bold">
                {errorQty}
              </div>
            )}
            <div className="flex p-3 justify-between">
              <div className="flex flex-row">
                <span className="text-sm text-slate-800 font-semibold">
                  Display:{" "}
                </span>
                <span className="text-sm font-bold text-indigo-700">
                  {product.display}
                </span>
              </div>
              <Rating className="text-xs" rating={product.rating} />
            </div>
            <div className="flex flex-row justify-between px-3 mt-3">
              <div>
                <span className="text-sm text-slate-800 font-semibold">
                  Stock:{" "}
                </span>
                <span className="text-sm font-bold text-indigo-700">
                  {product.stock > 0 ? product.stock : 0}
                </span>
              </div>
              <div>
                <span className="text-sm text-slate-800 font-semibold">
                  Colors:{" "}
                </span>
                <select
                  onChange={(e) => setColor(e.target.value)}
                  className="text-sm py-1 px-2 rounded border-2 text-end border-zinc-400"
                >
                  {product.colorOptions.length > 0 &&
                    product.colorOptions.map((color) => {
                      return (
                        <option key={color} value={color}>
                          {color}
                        </option>
                      );
                    })}
                </select>
              </div>
            </div>
            {product.camera && (
              <>
                <h5 className="text-sm uppercase ml-3 font-bold text-indigo-600">
                  camera
                </h5>
                <div className="flex flex-col m-1 ml-3">
                  {Object.entries(product.camera).map((cam) => {
                    return (
                      <div key={cam[0]}>
                        <span className="text-sm text-slate-800 font-semibold uppercase">
                          {cam[0]}:{" "}
                        </span>
                        <span className="text-sm font-bold text-indigo-700">
                          {cam[1]}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>
        <div className="m-3">
          <button
            onClick={() =>
              addToCartList({
                id: product.id,
                productName: product.name,
                productImage: product.thumbnailImage,
                productBrand: product.brand,
                productPrice: product.basePrice,
                productCategory: product.productCategory,
                productColor: color,
                stock: product.stock,
                total: product.basePrice * qty,
                quantity: qty,
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
      </div>
    </div>
  );
};

export default ModalProductDetail;
