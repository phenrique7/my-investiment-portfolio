import React from 'react';
import { Button } from 'reakit';

export default function Home() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <p>count: {count}</p>
      <Button
        className={`
          bg-blue-500
          hover:bg-blue-700
          text-white
          font-bold
          py-2 px-4
          rounded
          focus:shadow-outline
        `}
        onClick={() => setCount(count + 1)}
      >
        Trigger
      </Button>
    </>
  );
}
