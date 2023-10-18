import { useState } from "react";
import "./App.css";

function App() {
  // const charArray = ["i", "h", "g", "f", "a", "e", "i", "d", "c", "b", "a"];

  // const [arr, setArr] = useState(charArray);
  // const [sortingIndex, setSortingIndex] = useState(null);

  // async function bubbleSort(arr) {
  //   const n = arr.length;

  //   for (let i = 0; i < n - 1; i++) {
  //     let swapped = false;
  //     for (let j = 0; j < n - 1 - i; j++) {
  //       if (arr[j] > arr[j + 1]) {
  //         // Swap elements arr[j] and arr[j + 1]
  //         const temp = arr[j];
  //         arr[j] = arr[j + 1];
  //         arr[j + 1] = temp;
  //         swapped = true;
  //         console.log(arr);
  //       }
  //       setArr([...arr]);
  //       setSortingIndex(j);
  //       await new Promise((resolve) => setTimeout(resolve, 1000)); // 1-second delay
  //     }
  //     if (!swapped) {
  //       break; // If no swaps were made, the array is already sorted
  //     }
  //   }
  // }

  return (
    <div className="bg-[#000] text-white flex justify-center flex-col items-center">
      {/* <ul className="relative h-44 w-full">
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
        onClick={() => bubbleSort([...charArray])}
      >
        Sort
      </button> */}
    </div>
  );
}

export default App;
