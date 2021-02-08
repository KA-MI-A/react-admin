import React from 'react';
import {  Switch } from 'react-router-dom';
// 组件
// 私有路由组件
// 私有组件方法
import PrivateRouter from "../privateRouter/Index";

import components from './components'



class ContainerMain extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return (
        <Switch>
          {
            components.map(item=>{
              return <PrivateRouter key={item.path} exact path={item.path} component={item.component}  />
            })
          }
        </Switch>
    )
  }
}
export default ContainerMain;
