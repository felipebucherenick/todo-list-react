import React from 'react';
import { useLocalStorageReducer } from '../hooks/useLocalStorageReducer';

const useTodos = () => {
  const {
    item: todos,
    saveItem: setTodos,
    sincronizeItem: sincronizeTodos,
    loading,
    error,
  } = useLocalStorageReducer('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => !!todo.completed).length;

  let searchedTodos = [];

  if (!searchValue >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    setTodos(newTodos);
  };

  return {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchedTodos,
    completeTodo,
    deleteTodo,
    searchValue,
    setSearchValue,
    openModal,
    setOpenModal,
    addTodo,
    sincronizeTodos,
  };
};

export { useTodos };
