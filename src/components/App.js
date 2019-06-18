import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ReaderPage from '../pages/ReaderPage';

const App = () => (
  <div>
    <Switch>
      <Route path="/reader" component={ReaderPage} />
      <Redirect to="/reader" />
    </Switch>
  </div>
);

export default App;
