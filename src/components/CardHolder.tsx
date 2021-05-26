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

  const completeToDo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <>
      <ul>
        <Card todo={todos[0]} completeToDo={completeToDo} />
        <Card todo={todos[1]} completeToDo={completeToDo} />
      </ul>
    </>
  );
}