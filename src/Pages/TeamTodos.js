import React from 'react';

import TodoForm from '../Components/TodoForm';
import TodoList from '../Components/TodoList';
import useTodoState from '../useTodoState';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 240
    }
  }
}));

const TeamTodos = () => {
  const classes = useStyles();
  const {
    todos,
    toggleState,
    addTodo,
    deleteTodo,
    completeTodo,
    toggleTodoForm
  } = useTodoState([]);

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <div>
          <TodoList
            todos={todos}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
            toggleTodoForm={toggleTodoForm}
          />
          {toggleState && (
            <TodoForm
              saveTodo={todoText => {
                const trimmedText = todoText.trim();

                if (trimmedText.length > 0) {
                  addTodo(trimmedText);
                }
              }}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default TeamTodos;
