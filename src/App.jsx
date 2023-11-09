// import { useState, useEffect } from "react";
import { useEffect, useState } from "react";
import "./App.css";
import View from "./comp/View";

function App() {
  const [value, setValue] = useState(0);

  console.log({ setValue });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log("mount");

    setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      console.log("unmount");
    };
  }, []);

  return (
    <div>
      {loading ? (
        <div className="absolute top-0 left-0 w-full h-screen bg-black text-white flex items-center justify-center">
          <p className="animate-bounce">loading...</p>
        </div>
      ) : (
        ""
      )}
      <View value={"{}"} />
      {value}
      <div className="flex gap-2">
        <button
          className="py-1 px-2 bg-[#aaa] rounded border"
          onClick={() => {
            setValue((old) => old + 1);
          }}
        >
          +
        </button>
        <button
          className="py-1 px-2 bg-[#aaa] rounded border"
          onClick={() => {
            setValue((old) => old - 1);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default App;
