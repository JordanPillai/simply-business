import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './Components/Navigation';
import TeamTodo from './Pages/TeamTodo';

function AppRouter() {
  return (
    <Router>
      <div>
        <Navigation />

        <Route path="/team-todo" exact component={TeamTodo} />
      </div>
    </Router>
  );
}

export default AppRouter;
