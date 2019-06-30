import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: `${theme.spacing(4)}`,
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 240
    }
  }
}));

export default function Index(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>TO DO LIST</Typography>
      </main>
    </div>
  );
}

Index.propTypes = {
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object
};
