// import { useState, useEffect } from "react";
import { useEffect, useState } from "react";
import "./App.css";
import View from "./comp/View";

function App() {
<<<<<<< HEAD
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
=======
  const unsortedArray = [10, 8, 6, 5, 4, 3, 2, 1];

  const [arr, setArr] = useState(unsortedArray);
  const [sortingIndex, setSortingIndex] = useState(null);

  async function bubbleSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          const temp = arr[j];
          arr[j] = arr[minIndex];
          arr[minIndex] = temp;
        }
        setArr([...arr]);
        setSortingIndex(i - 1);
        await new Promise((resolve) => setTimeout(resolve, 500)); // 1-second delay
      }
    }
  }

  return (
    <div className="bg-[#000] text-white flex justify-center flex-col items-center">
      <ul className="relative h-44 w-full">
        {arr.map((item, index) => (
          <li
            key={index}
            style={{
              border: index - 1 === sortingIndex ? "1px solid green" : "",
              left: (index + 1) * 116,
            }}
            className={
              "transition-all duration-500 p-4 m-2 rounded w-[100px] h-[100px] flex justify-center items-center absolute border"
            }
          >
            {item}
          </li>
        ))}
      </ul>
      <button
        className="py-2 px-4 rounded bg-sky-400 hover:bg-sky-500 m-4"
        onClick={() => bubbleSort([...unsortedArray])}
      >
        Sort
      </button>
>>>>>>> 0cd96c16c45d0519458fc3e6f730b35b8f18835d
    </div>
  );
}

export default App;
