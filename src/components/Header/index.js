import React, {Fragment} from "react";
import {Tooltip, Dropdown, Menu} from "antd";
import {
  MenuFoldOutlined,
  FullscreenExitOutlined,
  FullscreenOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import screenfull from 'screenfull'
import EditUserInfo from "./editUserInfo"
import EditPassword from './editPassword'


class LayoutHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullScreen: false,//切换全屏显示
      infoModal:false,//修改用户信息对话框
      passwordModal:false,//修改密码对话框
    };
  }

  //切换全屏
  requestFullScreen = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle().then(() => {
        this.setState({fullScreen: screenfull.isFullscreen})
      })
    }
  };

  //收起菜单
  toggle = () => {
    this.props.onToggle()
  }

  //展开关闭修改用户信息对话框
  handleCancel=(value) => {
    console.log(value)
    this.setState({
      infoModal:value
    })
  }
  //修改密码对话框
  passwordModal=(value)=>{
    console.log(value)
    this.setState({
      passwordModal:value
    })
  }

  render() {
    const { infoModal,passwordModal } = this.state
    return (
        <Fragment>
          <Tooltip
              placement="bottom"
              title={this.props.collapsed ? "展开菜单" : "收起菜单"}
          >
            <MenuFoldOutlined
                className={this.props.collapsed ? "trigger fold" : "trigger"}
                onClick={this.toggle}
            />
          </Tooltip>
          <div className="rightBox">
            <Tooltip
                placement="bottom"
                title={this.props.collapsed ? "退出全屏" : "全屏"}
            >
              <div className="full all-center">
                {this.state.fullScreen ? (
                    <FullscreenExitOutlined
                        className="icon"
                        onClick={this.requestFullScreen}
                    />
                ) : (
                    <FullscreenOutlined
                        className="icon"
                        onClick={this.requestFullScreen}
                    />
                )}
              </div>
            </Tooltip>
            <Dropdown
                overlay={
                  <Menu>
                    <Menu.ItemGroup title="用户中心">
                      <Menu.Item
                          key={1}
                          onClick={()=>this.handleCancel(true)}
                      >
                        编辑个人信息
                      </Menu.Item>
                      <Menu.Item
                          key={77}
                      >
                        修改密码
                      </Menu.Item>
                      <Menu.Item key={2}>
                        退出登录
                      </Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup title="设置中心">
                      <Menu.Item key={4}>
                        恢复默认主题
                      </Menu.Item>
                    </Menu.ItemGroup>
                  </Menu>
                }
            >
              <div className="userhead all-center">
                <SmileOutlined/>
                <span className="username">Dylan</span>
              </div>
            </Dropdown>
          </div>
          <EditUserInfo infoModal={infoModal} handleCancel={this.handleCancel}/>
          <EditPassword passwordModal={passwordModal} hanclePassword={this.passwordModal} />
        </Fragment>
    );
  }
}

export default LayoutHeader;