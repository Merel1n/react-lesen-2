import { Grid, GridItem, TodoListItem } from 'components';
export const TodoList = ({ todosData }) => {
  return (
    <Grid>
      {todosData.map(() => (
        <GridItem>
          <TodoListItem />
        </GridItem>
      ))}
    </Grid>
  );
};
