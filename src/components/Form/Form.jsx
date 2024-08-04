import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';
export const Form = ({ addTodo }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const valueTodo = e.target.search.value.trim();
    addTodo(valueTodo);
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
