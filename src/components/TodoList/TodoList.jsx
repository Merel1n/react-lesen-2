import { Grid, GridItem, TodoListItem } from 'components';
import { useSelector } from 'react-redux';
import { selectTodos } from 'reduxStore/todosSlice';
export const TodoList = ({ onDelete, onEdit }) => {
  const todosData = useSelector(selectTodos);
  return (
    <Grid>
      {todosData.map((todoItem, index) => (
        <GridItem key={todoItem.id}>
          <TodoListItem
            id={todoItem.id}
            index={index}
            text={todoItem.text}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        </GridItem>
      ))}
    </Grid>
  );
};
