import React, { useEffect, useState } from "react";

export default ({ initial, end }) => {
  const [counter, setCounter] = useState(initial);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev === end) {
          clearInterval(interval);
          return prev;
        }
        return initial < end ? prev + 1 : prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });
  return (
    <>
      <h1>Counter</h1>
      <h1>{counter}</h1>
    </>
  );
};
