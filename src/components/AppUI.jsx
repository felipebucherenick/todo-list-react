import React, { useContext } from 'react';

import { TodoTitle } from './TodoTitle';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoContext } from './TodoContext';
import { Modal } from './Modal';
import { TodoForm } from './TodoForm';

import '../styles/Global.scss';

const AppUI = () => {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    addTodo,
  } = useContext(TodoContext);
  return (
    <div className="TodoListContainer">
      <TodoTitle />
      <TodoCounter />
      <TodoSearch />

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

      {openModal && (
        <Modal>
          <TodoForm setOpenModal={setOpenModal} addTodo={addTodo} />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </div>
  );
};

export { AppUI };
