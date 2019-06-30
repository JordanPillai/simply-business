import { useState } from 'react';

export default initialValue => {
  const [todos, setTodos] = useState(initialValue);
  const [toggleState, setToggleState] = useState(false);

  return {
    todos,
    toggleState,
    toggleTodoFrom: () => {
      setToggleState(!toggleState);
    },
    addTodo: todoText => {
      setTodos([...todos, todoText]);
      setToggleState(!toggleState);
    },
    deleteTodo: todoIndex => {
      const newTodos = todos.filter((_, index) => index !== todoIndex);

      setTodos(newTodos);
    }
  };
};
