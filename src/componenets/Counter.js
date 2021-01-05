import React from "react";

export default function Counter({
  number,
  diff,
  onIncrease,
  onDecrease,
  onSetValue
}) {
  const onChange = (e) => {
    onSetValue(parseInt(e.target.value, 10));
  };
  return (
    <div>
      {number}
      <div>
        <input type="number" onChange={onChange} value={diff} />
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  );
}
