import React from 'react';
import { useTodos } from './useTodos';

import { TodoTitle } from './TodoTitle';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { Modal } from './Modal';
import { TodoForm } from './TodoForm';
import { TodosError } from './TodosError';
import { TodosLoading } from './TodosLoading';
import { TodosEmpty } from './TodosEmpty';

import '../styles/Global.scss';

const App = () => {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    addTodo,
    searchValue,
    setSearchValue,
    totalTodos,
    completedTodos,
  } = useTodos();
  return (
    <div className="TodoListContainer">
      <TodoTitle />
      <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onTodosEmpty={() => <TodosEmpty />}
        onEmptySearchResults={(searchText) => <p>No hay resultados para {searchText}</p>}
      >
        {(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
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

export default App;
