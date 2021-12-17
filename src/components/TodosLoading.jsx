import React from 'react';
import '../styles/TodosLoading.scss';

import check from '../assets/icons/check.svg';
import close from '../assets/icons/close.png';

const TodosLoading = () => {
  return (
    <div className="LoadingTodo-container">
      <img src={check} className="LoadingTodo-completeIcon" />
      <p className="LoadingTodo-text">Estamos cargando .....</p>
      <img src={close} className="LoadingTodo-deleteIcon" />
    </div>
  );
};

export { TodosLoading };
