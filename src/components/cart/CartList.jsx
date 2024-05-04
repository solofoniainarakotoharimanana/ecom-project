/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { removeCart } from "../../redux/CartSlice";

const CartList = () => {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.CARTS.cartList);
  const [carts, setCarts] = useState([]);
  const [itemNumber, setItemNumber] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [taxe, setTaxe] = useState(0);
  useEffect(() => {
    setCarts(cartList);
    setItemNumber(
      cartList.reduce((acc, curr) => {
        return acc + curr.quantity;
      }, 0)
    );
    setSubTotal(
      cartList.reduce((acc, curr) => {
        return acc + curr.total;
      }, 0)
    );
  }, []);
  useEffect(() => {
    setCarts(cartList);
    setItemNumber(
      cartList.reduce((acc, curr) => {
        return acc + curr.quantity;
      }, 0)
    );
    setSubTotal(
      cartList.reduce((acc, curr) => {
        return acc + curr.total;
      }, 0)
    );
  }, [cartList]);

  console.log(carts);
  return (
    <div className="container mx-auto">
      {carts.length > 0 ? (
        <>
          <h1 className="my-8 text-center text-4xl font-bold text-emerald-500">
            Your products in the cart
          </h1>
          {carts.map((item) => {
            return (
              <>
                <div key={item.id} className="flex gap-1 p-1 text-center">
                  <CartItem
                    item={item}
                    quantity={item.quantity}
                    subTotal={item.total}
                  />
                </div>
                <hr className="bg-gray-500 my-4" />
              </>
            );
          })}
          <div className="flex justify-between mt-16">
            <button
              onClick={() => dispatch(removeCart())}
              className="w-auto h-12 px-8 py-3 rounded bg-red-600 text-white text-md font-semibold"
            >
              Remove cart
            </button>
            <div className="flex flex-col bg-slate-200 w-[350px] pl-2 pr-5 pt-5 pb-5 gap-3">
              <div className="flex gap-3">
                <span className="text-slate-950 text-lg font-semibold">
                  Number of item:{" "}
                </span>
                <san className="text-slate-950 text-lg font-bold">
                  {itemNumber}
                </san>
              </div>
              <div className="flex gap-3">
                <span className="text-slate-950 text-lg font-semibold">
                  Subtotal:{" "}
                </span>
                <san className="text-slate-950 text-lg font-bold">
                  {subTotal} €
                </san>
              </div>
              <div className="flex gap-3">
                <span className="text-slate-950 text-lg font-semibold">
                  Taxe:{" "}
                </span>
                <san className="text-slate-950 text-lg font-bold">{taxe}</san>
              </div>
              <div className="flex gap-3">
                <span className="text-slate-950 text-lg font-semibold">
                  Total:{" "}
                </span>
                <span className="text-slate-950 text-lg font-bold">
                  {subTotal + taxe} €
                </span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <h3 className="text-center mt-16 text-4xl text-orange-600 font-bold">
            Your cart is empty
          </h3>
        </>
      )}
    </div>
  );
};

export default CartList;
