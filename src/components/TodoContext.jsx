import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const TodoContext = React.createContext();

const TodoProvider = (props) => {
  const { item: todos, saveItem: setTodos, loading, error } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

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
  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchedTodos,
        completeTodo,
        deleteTodo,
        searchValue,
        setSearchValue,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
