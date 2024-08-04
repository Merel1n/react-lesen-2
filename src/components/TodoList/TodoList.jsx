import { Grid, GridItem, TodoListItem } from 'components';
export const TodoList = ({ todosData }) => {
  return (
    <Grid>
      {todosData.map((todoItem, index) => (
        <GridItem key={todoItem.id}>
          <TodoListItem index={index} text={todoItem.text} />
        </GridItem>
      ))}
    </Grid>
  );
};
