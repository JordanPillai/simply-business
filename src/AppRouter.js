import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

import Navigation from './Components/Navigation';
import TeamTodos from './Pages/TeamTodos';

function AppRouter() {
  return (
    <Router>
      <div>
        <Navigation />

        <Route exact path="/" render={() => <Redirect to="/team-todos" />} />
        <Route path="/team-todos" exact component={TeamTodos} />
      </div>
    </Router>
  );
}

export default AppRouter;
