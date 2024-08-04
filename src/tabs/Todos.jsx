import { Text, Form, TodoList } from 'components';
import { nanoid } from 'nanoid';
import { useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = text => {
    const newTodo = {
      id: nanoid(),
      text,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <Form addTodo={addTodo} />
      {todos.length > 0 ? (
        <TodoList todosData={todos} />
      ) : (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};
