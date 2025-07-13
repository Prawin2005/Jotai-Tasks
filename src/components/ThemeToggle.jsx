import React from 'react';
import { useAtom } from 'jotai';
import { themeAtom } from '../atoms/themeAtom';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useAtom(themeAtom);

  const toggleTheme = (mode) => setIsDark(mode === 'dark');

  return (
    <div>
      <h1>{isDark ? 'Dark Mode' : 'Light Mode'} is On</h1>
      <button onClick={() => toggleTheme('light')}>Light Mode</button>
      <button onClick={() => toggleTheme('dark')}>Dark Mode</button>
    </div>
  );
}
