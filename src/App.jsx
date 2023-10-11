import { useState } from "react";
import "./App.css";

function App() {
  const [arr, setArr] = useState([]);
  const [sortingIndex, setSortingIndex] = useState(null);

  function bubbleSort(arr) {
    const n = arr.length;
    let swapped;
    let i = 0;

    const sortingInterval = setInterval(() => {
      swapped = false;

      for (let j = 0; j < n - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap elements arr[j] and arr[j + 1]
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          swapped = true;
        }
      }
      setArr([...arr]);
      setSortingIndex(i);
      i++;
      if (!swapped) {
        clearInterval(sortingInterval); // Sorting is complete, stop the interval
      }
    }, 1000); // Delay of 1 second between each step
  }

  const charArray = ["i", "h", "g", "f", "e", "d", "c", "b", "a"];

  return (
    <div>
      <p>
        {arr.map((item, index) => (
          <span key={index} className={index === sortingIndex ? "sorting" : ""}>
            {item}
          </span>
        ))}
      </p>
      <button onClick={() => bubbleSort([...charArray])}>Sort</button>
    </div>
  );
}

export default App;
