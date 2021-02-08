import React,{} from 'react'
import "./header.less"
import {MenuFoldOutlined} from "@ant-design/icons"
class LayoutHeader extends React.Component {
  constructor(props){
    super(props)
    this.state={
      collapsed:props.collapsed
    }
  }

  componentWillReceiveProps({collapsed}) {
    this.setState({
      collapsed
    })

  }

  toggleMenu=()=>{
    this.props.toggle()
  }

  render() {
    const {collapsed} =this.state
    return (
        <div className={collapsed?" collapsed-close":""}>
          <div className="header-wrap">
            <span className="collapsed-icon" onClick={this.toggleMenu}>
              <MenuFoldOutlined />
            </span>
          </div>
        </div>
    )
  }
}

export default LayoutHeader
