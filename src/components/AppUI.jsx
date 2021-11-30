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
}) => {
  return (
    <div className="TodoListContainer">
      <TodoTitle />
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
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
