import { Text, Form, TodoList, EditForm } from 'components';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTodos } from 'reduxStore/todosSlice';

export const Todos = () => {
  const todos = useSelector(selectTodos);
  const [, setTodos] = useState(() => {
    const savedTodos = window.localStorage.getItem('saved-todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});
  const addTodo = text => {
    const newTodo = {
      id: nanoid(),
      text,
    };
    setTodos([...todos, newTodo]);
  };

  useEffect(() => {
    window.localStorage.setItem('saved-todos', JSON.stringify(todos));
  }, [todos]);

  const handleDeleteTodo = id => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== id);
    });
  };
  const handleEditTodo = todo => {
    setIsEditing(true);
    setCurrentTodo(todo);
  };

  const handleUpdateTodo = updatedText => {
    setTodos(
      todos.map(todo =>
        todo.id === currentTodo.id ? { ...todo, text: updatedText } : todo,
      ),
    );
    handleCancelEdit();
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setCurrentTodo({});
  };

  return (
    <>
      {isEditing ? (
        <EditForm
          updateTodo={handleUpdateTodo}
          cancelUpdate={handleCancelEdit}
          defaultValue={currentTodo.text}
        />
      ) : (
        <Form addTodo={addTodo} />
      )}
      {todos.length > 0 ? (
        <TodoList onDelete={handleDeleteTodo} onEdit={handleEditTodo} />
      ) : (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};
