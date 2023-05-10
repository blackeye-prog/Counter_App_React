import "./App.css";
import { useState } from "react";
function App() {
  const[count, setCount] = useState(0);
  function decreaseHandler() {
    setCount(count-1);
  }
  function increaseHandler() {
    setCount(count+1);
  }
  function resetHandler() {
    setCount(0);
  }

  return (
    <div className="w-[100vw] h-[100vh] 	box-border 	bg-slate-700 flex flex-col items-center justify-center">
      <h1 className="text-2xl text-white">Increment & Decrement</h1>
      <div className="m-[20px] flex flex-row text-[45px] gap-12 bg-white rounded-sm  items-center justify-center ">
        <button onClick={decreaseHandler} className="border-r-2 text-center w-20 text-5xl">-</button>
        <div className="font-bold gap-12 text-5xl"> 
          {count}
        </div>
        <button onClick={increaseHandler} className="border-l-2 text-center w-20 text-5xl">+</button>
      </div>
      <button className="m-[20px] bg-emerald-700 h-[45px] w-[65px] justify-center" onClick={resetHandler}>Reset</button>
    </div>
  );
}

export default App;
