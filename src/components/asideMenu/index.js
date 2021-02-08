import React,{Component,Fragment} from 'react'

import {Link,withRouter} from 'react-router-dom'
import { UserOutlined } from '@ant-design/icons';
import { Menu } from "antd";
import Router from "../../router/index";
const { SubMenu } = Menu;


class AsideMenu extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedKeys:['/index/user/list'],
      openKeys:['/index/user']
    };
  }

  // 生命周期，在这里多了一层接口请求，并过滤路由
  componentDidMount(){
    const pathname=this.props.location.pathname
    let menuKey=pathname.split("/").slice(0,3).join("/")
    this.selectMenuHigh(pathname,menuKey)
  }

  // 无子级菜单处理
  renderMenu = ({title, key}) => {
    return (
        <Menu.Item key={key}>
          <Link to={key}><span>{title}</span></Link>
        </Menu.Item>
    )
  }

  // 子级菜单处理
  renderSubMenu = ({title, key, child}) => {
    return (
        <SubMenu key={key} icon={<UserOutlined />} title={title}>
          {
            child && child.map(item => {
              return item.child && item.child.length > 0 ? this.renderSubMenu(item) : this.renderMenu(item);
            })
          }
        </SubMenu>
    )
  }

  selectMenu=(item,key,keyPath,domEvent)=>{
    this.selectMenuHigh(item.key,item.keyPath[item.keyPath.length-1])
  }

  //处理菜单高光函数
  selectMenuHigh=(pathname,menuKey)=>{
    this.setState({
      selectedKeys:[pathname],
      openKeys:[menuKey]
    })
    // item.keyPath[item.keyPath.length-1]
  }

  openMenu=(openKeys)=>{
    this.setState({
      openKeys:[openKeys[openKeys.length-1]]
    })
  }

  render(){
    const {selectedKeys,openKeys}= this.state
    return (
        <Fragment>
          <Menu
              onOpenChange={this.openMenu}
              onClick={this.selectMenu}
              theme="dark"
              mode="inline"
              selectedKeys={selectedKeys}
              openKeys={openKeys}
              style={{ height: '100%', borderRight: 0 }}
          >
            {
              Router && Router.map(firstItem => {
                return firstItem.child && firstItem.child.length > 0 ? this.renderSubMenu(firstItem) : this.renderMenu(firstItem);
              })
            }
          </Menu>
        </Fragment>
    )
  }
}

export default withRouter(AsideMenu);
