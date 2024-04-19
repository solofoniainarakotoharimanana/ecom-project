/* eslint-disable react/prop-types */
import React from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

const Rating = ({ rating }) => {
  //Declarer un tableau d'etoiles vide (jsx)
  const starList = [];
  //Stocker dans une variable le nombre des toiles pleine
  const starFillCount = Math.floor(rating);
  //Stocker dans une variable si oui ou non il ya des demi etoile
  const hasStarHalf = rating - starFillCount >= 0.5;
  //Stocker dans une variable le nombre d'etoile vide
  const emptyStarCount = 5 - starFillCount - (hasStarHalf ? 1 : 0);

  //Pusher dans me tableau le nombre d'etoile pleine
  for (let i = 1; i <= starFillCount; i++) {
    starList.push(
      <BsStarFill className="text-yellow-500" key={"star-fill" + i} />
    );
  }
  //Pusher dans me tableau le nombre des demi etoiles s'il y en a
  if (hasStarHalf) {
    starList.push(
      <BsStarHalf className="text-yellow-500" key={"start-half"} />
    );
  }
  //Pusher dans le tableau les etoile vides
  for (let index = 1; index <= emptyStarCount; index++) {
    starList.push(
      <BsStar className="text-yellow-500" key={"start-empty" + index} />
    );
  }
  return <div className="flex flex-row gap-1">{starList}</div>;
};

export default Rating;
