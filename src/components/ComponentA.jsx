import React from 'react';
import { useAtom } from 'jotai';
import { sharedCounterAtom } from '../atoms/sharedCounterAtom';

export default function ComponentA() {
  const [count, setCount] = useAtom(sharedCounterAtom);

  const increment = () => setCount((prev) => prev + 1);

  return (
    <div>
      <h3>Component A</h3>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
