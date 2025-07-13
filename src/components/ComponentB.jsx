import React from 'react';
import { useAtom } from 'jotai';
import { sharedCounterAtom } from '../atoms/sharedCounterAtom';

export default function ComponentB() {
  const [count, setCount] = useAtom(sharedCounterAtom);

  const reset = () => setCount(0);

  return (
    <div>
      <h3>Component B</h3>
      <p>Current Count: {count}</p>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
