import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';
import { useDispatch } from 'react-redux';
import { addTodo } from 'reduxStore/todosOps';

export const Form = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const valueTodo = e.target.search.value.trim();
    // addTodo(valueTodo);
    const newTodo = {
      text: valueTodo,
    };
    dispatch(addTodo(newTodo));
    e.target.reset();
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};
