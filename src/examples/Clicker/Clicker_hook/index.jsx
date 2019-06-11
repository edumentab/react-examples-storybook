import React, { useState } from "react";

export const Clicker = props => {
  const [count, setCount] = useState(props.start || 0);
  return (
    <div>
      Current count: <span data-qa="count">{count}</span>
      <button data-qa="increase" onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <button data-qa="decrease" onClick={() => setCount(count - 1)}>
        Decrease
      </button>
    </div>
  );
};
