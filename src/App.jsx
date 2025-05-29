import React, { useReducer } from "react";
export default function App() {
  const [state, dispatch] = useReducer(counterReducer, initialCountState);
  return (
    <div className=" bg-green-100 p-20 ">
      <h1>Count: {state.count}</h1>
      <div className="flex flex-col space-y-5">
        <button
          className="bg-amber-900 px-6 py-3 w-[200px]"
          onClick={() => dispatch({ type: "increment" })}
        >
          Increment
        </button>
        <button
          className="bg-amber-900 px-6 py-3 w-[200px]"
          onClick={() => dispatch({ type: "decrement" })}
        >
          Drecrement
        </button>
        <button
          className="bg-amber-900 px-6 py-3 w-[200px]"
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error();
  }
}
const initialCountState = { count: 0 };

//memoization
//useCallback function caching
//useMemo value
