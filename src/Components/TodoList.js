import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.common.white
  },
  addButton: {
    color: '#5B23E8'
  },
  checked: {
    '&, & + $label': {
      color: theme.palette.grey[600],
      textDecoration: 'line-through'
    }
  },
  label: {
    wordBreak: 'break-all'
  }
}));

const TodoList = ({ todos, deleteTodo, completeTodo, toggleTodoForm }) => {
  const classes = useStyles();

  return (
    <List>
      {todos.map(({ label, completed }, index) => (
        <ListItem key={index} button className={classes.root}>
          <FormControlLabel
            classes={{
              label: classes.label
            }}
            control={
              <Checkbox
                checked={completed}
                tabIndex={-1}
                disableRipple
                classes={{
                  checked: classes.checked
                }}
                onChange={() => {
                  completeTodo(index, completed);
                }}
              />
            }
            label={label}
          />

          <ListItemSecondaryAction>
            <IconButton
              aria-label="Delete"
              onClick={() => {
                deleteTodo(index);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
      <ListItem
        button
        className={classes.addButton}
        onClick={() => {
          toggleTodoForm();
        }}
      >
        <IconButton>
          <AddCircleIcon className={classes.addButton} />
        </IconButton>

        <ListItemText primary="Add a Todo" />
      </ListItem>
    </List>
  );
};

export default TodoList;
