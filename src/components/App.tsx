import React, { useState } from 'react';
import { CardHolder } from './CardHolder';
import { Form } from './Form'
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

function App() {
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

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };


  return (
    <>
      <CardHolder todos={todos} completeToDo={completeToDo} />
      <Form addTodo={addTodo} />
    </>
  );
}

export default App;
