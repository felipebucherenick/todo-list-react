import React, { useContext } from 'react';
import '../styles/TodoSearch.scss';

const TodoSearch = ({ searchValue, setSearchValue, loading }) => {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      className={`TodoSearch ${!!loading && 'TodoSearch--loading'}`}
      placeholder="New TODO"
      value={searchValue}
      onChange={onSearchValueChange}
    ></input>
  );
};

export { TodoSearch };
