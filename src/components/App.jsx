import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from '../hooks/useLocalStorage';

/* const defaultTodos = [
  { text: 'Cortar el pasto', completed: true },
  { text: 'Pintar la reja', completed: false },
  { text: 'Picar cebolla', completed: true },
  { text: 'Bañar al perro', completed: false },
  { text: 'Comer nueces', completed: false },
];
 */

const App = () => {
  const [todos, setTodos] = useLocalStorage('TODOS_V1', []);
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
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    />
  );
};

export default App;
