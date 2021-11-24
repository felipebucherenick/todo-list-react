import React from 'react';
import '../styles/Global.scss';
import { TodoTitle } from './TodoTitle';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const todos = [
  { text: 'Cortar el pasto', completed: false },
  { text: 'Pintar la reja', completed: false },
  { text: 'Picar cebolla', completed: false },
  { text: 'Bañar al perro', completed: false },
];

const App = () => {
  return (
    <div className="TodoListContainer">
      <TodoTitle />
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </div>
  );
};

export default App;
