import React from 'react';
import { useAtom } from 'jotai';
import { cartCountAtom } from '../atoms/cartAtom';

export default function CartCounter() {
  const [count, setCount] = useAtom(cartCountAtom);

  const addToCart = () => setCount((prev) => prev + 1);
  const removeFromCart = () => setCount((prev) => Math.max(0, prev - 1));

  return (
    <div>
      <h2>Cart Counter</h2>
      <p>Items in cart: {count}</p>
      <button onClick={addToCart}>Add to Cart</button>
      <button onClick={removeFromCart}>Remove from Cart</button>
    </div>
  );
}
