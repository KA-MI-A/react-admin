import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";
import Index from './views/login/Index'
import "./App.scss";
export default class App extends React.Component {
  constructor(params) {
    super(params);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
          <Router>
            <HashRouter>
              <Switch>
                <Route component={Index} exact path="/"></Route>
              </Switch>
            </HashRouter>
          </Router>
      </Fragment>
    );
  }
}
