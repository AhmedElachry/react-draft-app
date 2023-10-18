import { useState } from "react";
import "./App.css";

function App() {
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
    </div>
  );
}

export default App;
