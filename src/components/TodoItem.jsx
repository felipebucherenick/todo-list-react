import React from 'react';
import '../styles/TodoItem.scss';
import check from '../assets/icons/check.svg';
import close from '../assets/icons/close.png';

const TodoItem = (props) => {
  return (
    <li className="TodoItem">
      <img src={check} alt="Check icon" className="TodoItem__check" />
      <p className="TodoItem__text">{props.text}</p>
      <img src={close} alt="Close Icon" className="TodoItem__close" />
    </li>
  );
};

export { TodoItem };
