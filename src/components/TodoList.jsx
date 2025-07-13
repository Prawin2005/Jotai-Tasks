import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { todoListAtom } from '../atoms/todoAtom';

export default function TodoList() {
  const [todos, setTodos] = useAtom(todoListAtom);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, input.trim()]);
      setInput('');
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input type="text" value={input}
         onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
      />
       
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}
            <button onClick={() => removeTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
