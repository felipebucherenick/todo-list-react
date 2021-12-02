import React from 'react';

import { TodoTitle } from './TodoTitle';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

import '../styles/Global.scss';

const AppUI = ({
  totalTodos,
  completedTodos,
  searchedTodos,
  completeTodo,
  deleteTodo,
  searchValue,
  setSearchValue,
  loading,
  error,
}) => {
  return (
    <div className="TodoListContainer">
      <TodoTitle />
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {error && <p>Hubo un error</p>}
        {loading && <p>Estamos cargando .....</p>}
        {!loading && !searchedTodos.length && <p>Crea tu primer TODO</p>}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </div>
  );
};

export { AppUI };
