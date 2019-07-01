import { useState } from 'react';

export default initialValue => {
  const [todos, setTodos] = useState(initialValue, false);
  const [toggleState, setToggleState] = useState(false);

  return {
    todos,
    toggleState,
    toggleTodoForm: () => {
      setToggleState(!toggleState);
    },
    addTodo: todoText => {
      const newArr = todos.slice();
      newArr.splice(0, 0, { label: todoText, completed: false });
      setTodos(newArr);
      setToggleState(!toggleState);
    },
    completeTodo: (todoIndex, completed) => {
      const newArr = todos.slice();
      newArr[todoIndex].completed = !completed;

      setTodos(newArr);
    },
    deleteTodo: todoIndex => {
      const newTodos = todos.filter((_, index) => index !== todoIndex);

      setTodos(newTodos);
    }
  };
};
