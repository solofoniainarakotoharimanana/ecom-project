/* eslint-disable no-undef */
/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../redux/CartSlice";
import { useDispatch } from "react-redux";
import { MdEdit } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";

const CartItem = ({ item, quantity, subTotal }) => {
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const [qty, setQty] = useState(0);

  const increaseItemQuantity = (payload) => {
    dispatch(increaseQuantity(payload));
  };
  const decreaseItemQuantity = (payload) => {
    dispatch(decreaseQuantity(payload));
  };

  useEffect(() => {
    setQty(quantity);
    setTotal(subTotal);
  });

  return (
    <>
      <div className="p-2 w-24 h-18">
        <img src={item.productImage} alt={item.name} className="" />
      </div>
      <div className="justify-items-center w-[350px] text-center lg:pt-3">
        <span className="text-md text-slate-400 font-bold text-xl">
          {item.productName}
        </span>
      </div>
      <div className="text-black font-bold text-lg w-40 pt-3">
        {item.productPrice} €
      </div>
      <div className="flex w-60 gap-3 pt-3">
        <button
          onClick={() =>
            decreaseItemQuantity({
              id: item.id,
              productName: item.name,
              productImage: item.thumbnailImage,
              productBrand: item.brand,
              productPrice: item.basePrice,
              productCategory: item.productCategory,
              productColor: item.productColor,
              stock: item.stock,
              quantity: qty,
            })
          }
          className="bg-black text-white px-2 h-8 rounded font-bold"
        >
          -
        </button>
        <span className="text-black font-bold text-lg">x {item.quantity}</span>
        <button
          onClick={() =>
            increaseItemQuantity({
              id: item.id,
              productName: item.name,
              productImage: item.thumbnailImage,
              productBrand: item.brand,
              productPrice: item.basePrice,
              productCategory: item.productCategory,
              productColor: item.productColor,
              stock: item.stock,
              quantity: qty,
            })
          }
          className="bg-black text-white px-2 h-8 rounded font-bold "
        >
          +
        </button>
      </div>
      <div className="text-black font-bold text-lg w-40 pt-3">{total} €</div>
      <div className="flex justify-end px-6 py-3 gap-4 w-40">
        <MdEdit className="text-blue-800 text-3xl font-bold hover:cursor-pointer" />
        <FaRegTrashCan
          className="text-red-600 text-2xl font-bold hover:cursor-pointer"
          onClick={() => dispatch(removeFromCart(item))}
        />
      </div>
    </>
  );
};

export default CartItem;
