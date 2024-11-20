import React, { useState } from 'react';

// Counter Component
export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <h1 data-testid="counter-value">{count}</h1>
      <button onClick={increment} data-testid="increment-button">
        Increment
      </button>
      <button onClick={decrement} data-testid="decrement-button">
        Decrement
      </button>
      <button onClick={reset} data-testid="reset-button">
        Reset
      </button>
    </div>
  );
};

// Greeting Component
export const Greeting = ({ nadia }) => {
  return <h1 data-testid="greeting">Hello, {nadia}</h1>;
};

// AlertButton Component
export const AlertButton = ({ message }) => {
  const handleClick = () => {
    alert(message);
  };

  return (
    <button data-testid="alert-button" onClick={handleClick}>
      Show Alert
    </button>
  );
};
