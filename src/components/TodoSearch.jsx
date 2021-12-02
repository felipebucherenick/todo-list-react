import React, { useContext } from 'react';
import '../styles/TodoSearch.scss';
import { TodoContext } from './TodoContext';

const TodoSearch = () => {
  const { searchValue, setSearchValue } = useContext(TodoContext);
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="New TODO"
      value={searchValue}
      onChange={onSearchValueChange}
    ></input>
  );
};

export { TodoSearch };
