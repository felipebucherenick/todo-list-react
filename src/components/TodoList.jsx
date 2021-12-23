import React from 'react';
import '../styles/TodoList.scss';

const TodoList = (props) => {
  const renderFunc = props.children || props.render;
  return (
    <section className="TodoList">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && !props.totalTodos && props.onTodosEmpty()}
      {!!props.totalTodos &&
        !props.searchedTodos.length &&
        props.onEmptySearchResults(props.searchText)}

      <ul>{props.searchedTodos.map(renderFunc)}</ul>
    </section>
  );
};

export { TodoList };
