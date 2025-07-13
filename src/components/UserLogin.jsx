import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { userAtom } from '../atoms/userAtom';

export default function UserLogin() {
  const [username, setUsername] = useAtom(userAtom);
  const [input, setInput] = useState('');

  const handleLogin = () => {
    if (input.trim() !== '') {
      setUsername(input.trim());
      setInput('');
    }
  };

  return (
    <div>
      {username ? (
        <h2>Welcome, {username}!</h2>
      ) : (
        <>
          <h2>Login</h2>
          <input type="text" placeholder="Enter your name" value={input} onChange={(e) => setInput(e.target.value)}/>
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
}
