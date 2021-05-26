interface Todo {
  text: string;
  complete: boolean;
}

type completeToDo = (selectedTodo: Todo) => void;