import React from 'react';
import Button from 'src/components/button/Button';

export default function Home() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <p>count: {count}</p>
      <Button onClick={() => setCount(count + 1)}>
        Trigger
      </Button>
    </>
  );
}
