import React from 'react';
import '../styles/TodoCounter.scss';

const TodoCounter = ({ total, completed }) => {
  return (
    <h2 className="TodoCounter">
      Has completado {completed} de {total} TODOs
    </h2>
  );
};

export { TodoCounter };
