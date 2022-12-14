import { React, useState } from "react";

export const UsestateHooks = () => {
  const [state, setState] = useState({ count: 4, theme: "blue" });

  const count = state.count;
  const theme = state.theme;

  const handleIncCount = () => {
    setState((prevData) => {
      return { ...prevData, count: prevData.count + 1 };
    });
  };
  const handleDecCount = () => {
    setState((prevData) => {
      return { ...prevData, count: prevData.count - 1 };
    });
  };
  return (
    <>
      <div>
        {count}
        <span>{theme}</span>
      </div>
      <button onClick={handleIncCount}>+</button>
      <button onClick={handleDecCount}>-</button>
    </>
  );
};
