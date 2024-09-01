import { Text, Form, TodoList, EditForm } from 'components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos } from 'reduxStore/todosOps';
import { selectCurrentTodo, selectTodos } from 'reduxStore/todosSlice';

export const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const currentTodo = useSelector(selectCurrentTodo);

  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);

  return (
    <>
      {currentTodo ? <EditForm /> : <Form />}
      {todos.length > 0 ? (
        <TodoList />
      ) : (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};
