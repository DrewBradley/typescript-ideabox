import React, { useState } from 'react';
import { Card } from './Card'
import './App.css';

interface Props {
  todos: Todo[];
  completeToDo: completeToDo;
}

export const CardHolder: React.FC<Props> = ({ todos, completeToDo }) => {
  return (
    <>
      <ul>
      {todos.map(todo => (
        <Card key={todo.text} todo={todo} completeToDo={completeToDo} />
      ))}
      </ul>
    </>
  );
}