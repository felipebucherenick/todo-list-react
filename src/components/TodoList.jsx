import React from 'react';
import '../styles/TodoList.scss';

const TodoList = (props) => {
  return (
    <section className="TodoList">
      <ul>{props.children}</ul>
    </section>
  );
};

export { TodoList };
