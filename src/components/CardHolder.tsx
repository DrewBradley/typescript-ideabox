import React, { useState } from 'react';
import { Card } from './Card'
import './App.css';

const initialTodos: Todo[] = [
  {
    text: 'Walk the dog',
    complete: false,
  },
  {
    text: 'Write app',
    complete: true,
  },
];

export const CardHolder: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const completeTodDo = 

  return (
    <>
      <ul>
        <Card todo={todos[0]} />
        <Card todo={todos[1]} />
      </ul>
    </>
  );
}