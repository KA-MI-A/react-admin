import React from "react";
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import "./App.scss";
//引用组件
import Home from './views/Home';
import About from './views/About';
import News from './views/News';

 class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="test">
        <h1>asdas</h1>
        <ul>
          <li>1</li>
          <li>2</li>
        </ul>
             npm  install sass-loader node-sass --save-dev
        <BrowserRouter>
                <Switch>
                <Route exact component={Home}  path="/"/>
                <Route component={About}  path="/about"/>
                <Route component={News}  path="/News"/>
                </Switch>
        </BrowserRouter>
        </div>
    )
  }
}

  export default App;