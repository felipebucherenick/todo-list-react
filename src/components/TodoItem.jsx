import React from 'react';
import '../styles/TodoItem.scss';
import check from '../assets/icons/check.svg';
import close from '../assets/icons/close.png';

const TodoItem = (props) => {
  const onComplete = () => {
    alert('Has completado el TODO : ' + props.text);
  };

  const onDelete = () => {
    alert('Has borrado el TODO : ' + props.text);
  };

  return (
    <li className="TodoItem">
      <img
        src={check}
        alt="Check icon"
        className={`TodoItem__check ${props.completed && 'TodoItem__check--completed'}`}
        onClick={onComplete}
      />
      <p className={`TodoItem__text ${props.completed && 'TodoItem__text--completed'}`}>
        {props.text}
      </p>
      <img src={close} alt="Close Icon" className="TodoItem__close" onClick={onDelete} />
    </li>
  );
};

export { TodoItem };
