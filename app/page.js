"use client";
import { useState } from "react";
import Convert from "./Convert";

export default function Home() {
  const [time, timer] = useState(new Date().toLocaleTimeString());

  setInterval(() => {
    timer(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <main className="flex flex-col gap-4 container p-4 mx-auto">
      <div>{time}</div>
      <div className="text-5xl mx-auto">Currency Converter</div>
      <div className="grid grid-cols-2 gap-4 p-2">
        {/* COULD BE MAPPED INSTEAD OF HARDCODED */}
        <Convert currency={"USD"} />
        <Convert currency={"DKK"} />
        <Convert currency={"YEN"} />
      </div>
    </main>
  );
}
