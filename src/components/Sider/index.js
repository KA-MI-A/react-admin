import React, {Fragment} from "react";
import {Menu} from "antd";
import {Link, withRouter} from "react-router-dom";
import ImgLogo from "@/assets/image/logo.png";
import Router from "@/router";

const {SubMenu} = Menu;

class LayoutSider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeys: ['/home'], //当前选中
      openKeys: [], //当前要被展台的项
    };
  }

  componentDidMount() {
    const pathname = this.props.location.pathname
    let menuKey = pathname.split("/").slice(0, 3).join("/")
    this.selectMenuHigh(pathname, menuKey)

  }

  openMenu = (openKeys) => {
    this.setState({
      openKeys: [openKeys[openKeys.length - 1]]
    })
  }
  selectMenu = ({item, key, keyPath, domEvent}) => {
    this.selectMenuHigh( key, keyPath[keyPath.length - 1])
  }

  //菜单高亮显示
  selectMenuHigh = (pathname, menuKey) => {
    this.setState({
      selectedKeys: [pathname],
      openKeys: [menuKey]
    })
  }

  // 无子级菜单处理
  renderMenu = ({title, path, icon}) => {
    return (
        <Menu.Item key={path} icon={icon}>
          <Link to={path}><span>{title}</span></Link>
        </Menu.Item>
    )
  }

  // 子级菜单处理
  renderSubMenu = ({path, title, icon, children}) => {
    return (
        <SubMenu key={path} icon={icon} title={title}>
          {
            children && children.map(item => {
              return item.children && item.children.length > 0 ? this.renderSubMenu(item) : this.renderMenu(item);
            })
          }
        </SubMenu>
    )
  }

  render() {
    return (
        <Fragment>
          <div className={this.props.collapsed ? "menuLogo hide" : "menuLogo"}>
            <Link to="/">
              <img src={ImgLogo} alt="logo"/>
              <div>React-Admin</div>
            </Link>
          </div>
          <Menu
              theme="dark"
              mode="inline"
              selectedKeys={this.state.selectedKeys}
              openKeys={this.state.openKeys}
              onOpenChange={this.openMenu}
              onClick={this.selectMenu}
          >
            {
              Router && Router.map(firstItem => {
                return firstItem.children && firstItem.children.length > 0 ? this.renderSubMenu(firstItem) : this.renderMenu(firstItem);
              })
            }
          </Menu>
        </Fragment>
    );
  }
}

export default withRouter(LayoutSider);