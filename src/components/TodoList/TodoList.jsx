import { Grid, GridItem, TodoListItem } from 'components';
export const TodoList = ({ todosData, onDelete, onEdit }) => {
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
