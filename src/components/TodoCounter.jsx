import React, { useContext } from 'react';
import '../styles/TodoCounter.scss';
import { TodoContext } from './TodoContext';

const TodoCounter = () => {
  const { totalTodos, completedTodos } = useContext(TodoContext);
  return (
    <h2 className="TodoCounter">
      Has completado {completedTodos} de {totalTodos} TODOs
    </h2>
  );
};

export { TodoCounter };
