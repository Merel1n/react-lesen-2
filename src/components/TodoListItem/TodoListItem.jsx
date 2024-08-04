import { Text } from 'components';
import { RiDeleteBinLine } from 'react-icons/ri';
import style from './TodoListItem.module.css';

export const TodoListItem = ({ index, text }) => {
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO {index + 1}
      </Text>
      <Text>{text}</Text>
      <button className={style.deleteButton} type="button">
        <RiDeleteBinLine size={24} />
      </button>
    </div>
  );
};
