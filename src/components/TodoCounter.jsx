import React, { useContext } from 'react';
import '../styles/TodoCounter.scss';

const TodoCounter = ({ totalTodos, completedTodos, loading }) => {
  return (
    <h2 className={`TodoCounter ${!!loading && 'TodoCounter--loading'}`}>
      Has completado {completedTodos} de {totalTodos} TODOs
    </h2>
  );
};

export { TodoCounter };
