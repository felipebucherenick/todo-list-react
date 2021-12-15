import React from 'react';
import '../styles/TodoForm.scss';

const TodoForm = (props) => {
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    props.setOpenModal((prevState) => !prevState);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    props.addTodo(newTodoValue);
    props.setOpenModal((prevState) => !prevState);
  };
  return (
    <div className="FormContainer">
      <form className="TodoForm" onSubmit={onSubmit}>
        <h2 className="TodoForm__title">Crea tu nuevo TODO</h2>
        <textarea
          value={newTodoValue}
          onChange={onChange}
          placeholder="Hacer las compras"
          className="TodoForm__input"
        ></textarea>
        <div className="TodoForm__buttons-container">
          <button
            type="button"
            className="TodoForm__button TodoForm__button--cancel"
            onClick={onCancel}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="TodoForm__button TodoForm__button--add"
            onClick={onSubmit}
          >
            Añadir
          </button>
        </div>
      </form>
    </div>
  );
};

export { TodoForm };
