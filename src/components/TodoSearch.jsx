import React, { useContext } from 'react';
import '../styles/TodoSearch.scss';

const TodoSearch = ({ searchValue, setSearchValue }) => {
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
