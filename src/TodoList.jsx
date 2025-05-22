import React, { useState } from "react";
import { sculptureList } from "./data";

const TodoList = () => {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  function handleClick() {
    setIndex(index + 1);
  }
  function handleShowMore() {
    setShowMore(!showMore);
  }
  let sculpture = sculptureList[index];
  return (
    <div className="p-10">
      <button onClick={handleClick} className="p-4 bg-red-800 text-white">
        Next
      </button>
      <h2>
        <i>{sculpture.name}</i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleShowMore} className="p-4 bg-green-500 text-black">
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </div>
  );
};

export default TodoList;
