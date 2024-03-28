"use client";
import { useState } from "react";
export default function Convert(props) {
  const [amount1, setAmount1] = useState(0);
  const [amount2, setAmount2] = useState(0);
  function convert(e) {}
  return (
    <div className="flex flex-col gap-4 shadow p-4 bg-slate-500 rounded-lg w-full">
      <div className="flex gap-2 items-center">
        <input
          type="text"
          className="rounded-lg p-2 focus:border-rose-600 text-2xl w-full"
          defaultValue={amount1}
          onChange={(e) => convert(e.target.value)}
        />
        <p className="text-xl">SEK</p>
      </div>
      <div>
        <p className="text-2xl">TO</p>
      </div>
      <div>
        <p className="text-xl">
          {amount2} {props.currency}
        </p>
      </div>
    </div>
  );
}
