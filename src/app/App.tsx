import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Index from './views/Index';
import ErrorPage from './views/ErrorPage';

export default class App extends React.Component {
  public render() {
    return (
      <Switch>
        <Route path="/index(.html)?" component={Index} />
        <Route path="/404(.html)?" component={ErrorPage} />
      </Switch>
    );
  }
}
