"use client";
import { useState } from "react";
import { exchange } from "./data";

export default function Convert(props) {
  const [amount1, setAmount1] = useState(0);
  const [amount2, setAmount2] = useState(0);

  //IV = inputValue
  function converter(IV) {
    const exchangeItem = exchange.find((item) =>
      item.hasOwnProperty(props.currency)
    );

    if (exchangeItem) {
      const exchangeRate = exchangeItem[props.currency].exchangeRate;
      const convertedAmount = IV * exchangeRate;
      setAmount2(convertedAmount);
    } else {
      console.log(`not found ${props.currency}`);
    }
  }

  return (
    <div className="flex flex-col gap-4 shadow p-4 bg-slate-500 rounded-lg w-full">
      <div className="flex gap-2 items-center">
        <input
          type="number"
          className="rounded-lg p-2 focus:border-rose-600 text-2xl w-full"
          value={amount1}
          onChange={(e) => {
            setAmount1(e.target.value);
            converter(parseFloat(e.target.value));
          }}
        />
        <p className="text-xl">{props.currency}</p>
      </div>
      <div>
        <p className="text-2xl">EQUALS</p>
      </div>
      <div>
        <p className="text-xl">{amount2} SEK</p>
      </div>
    </div>
  );
}
