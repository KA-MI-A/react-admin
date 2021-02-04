import React from "react";
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import "./App.less";
import Login from './views/login/index';

//引用组件
 class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      // <div class="test">
      //   <h1>asdas</h1>
      //   <ul>
      //     <li>1</li>
      //     <li>2</li>
      //        yarn add node-sass
      //   </ul>npm install node-sass@5.0.0
      //        npm  install sass-loader node-sass --save-dev
        <BrowserRouter>
                <Switch>
                <Route exact component={Login}  path="/"/>
                </Switch>
        </BrowserRouter>
    )
  }
}

  export default App;