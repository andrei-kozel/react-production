import { useState } from "react";
import classes from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);

  return (
    <div className={classes.test}>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
