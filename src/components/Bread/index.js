import React from 'react'

import {Breadcrumb} from 'antd'
import { EnvironmentOutlined } from "@ant-design/icons";
import Router from '@/router'

import './index.less'

export default class BreadCrumb extends React.Component {
  constructor(props){
    super()
  }

  makeBread=(location,menus)=>{
    // const paths=location.pathname.split('/').filter(item=>!!item)
    const path=location.pathname
    const breads=[]
    console.log(Router)
    Router.forEach((ee,vv)=>{
      if (path === ee.path) {
        breads.push(
          <Breadcrumb.Item key={ee.path}>{ee.title}</Breadcrumb.Item>
        )
      }else if(ee.children&&ee.children.length>0){
        ee.children.forEach((eee,vvv)=>{
          if (eee.path === path) {
            breads.push(
              <Breadcrumb.Item key={ee.path}>{ee.title}</Breadcrumb.Item>
            )
            breads.push(
              <Breadcrumb.Item key={eee.path}>{eee.title}</Breadcrumb.Item>
            )
          }
        })
      }
    })
    return breads
  }
  
  render(){
    console.log(this.props)
    return (
      <div className='bread-wrap'>
        <EnvironmentOutlined className="icon" />
        <Breadcrumb>
          {this.makeBread(this.props.location,this.props.menus)}
        </Breadcrumb>
      </div>
    )
  }
}