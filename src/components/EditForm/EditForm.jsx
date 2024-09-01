import style from './EditForm.module.css';

import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentTodo, setCurrentTodo } from 'reduxStore/todosSlice';
import { updateTodo } from 'reduxStore/todosOps';

export const EditForm = () => {
  const dispatch = useDispatch();
  const cancelUpdate = () => {
    dispatch(setCurrentTodo(null));
  };
  const todo = useSelector(selectCurrentTodo);
  const handleSubmit = event => {
    event.preventDefault();
    const inputValue = event.target.elements.text.value.trim();
    // updateTodo(inputValue);
    dispatch(
      updateTodo({
        id: todo.id,
        text: inputValue,
      }),
    );
    event.target.reset();
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button className={style.editButton} type="button" onClick={cancelUpdate}>
        <MdOutlineCancel color="red" size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={todo.text}
        autoFocus
      />
    </form>
  );
};
