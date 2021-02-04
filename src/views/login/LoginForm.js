import React from "react";
import "./index.css";
import {withRouter} from 'react-router-dom'
import { Form, Input, Button, Row, Col,message } from "antd";
import { UserOutlined, LockOutlined, CodeOutlined } from "@ant-design/icons";

// import { getCode } from "../../api/account";
// import {setToken} from "../../utils/session";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username:"",
      code_button_disabled:true,
      code_button_loading:false,
      code_button_text:"获取验证码",
    };
  }
  //点击登录
  onFinish = (values) => {
    console.log("Finish:", values);
    // login().then((res) => {});
    //跳转路由
    console.log(this.props)
    let data="4556456456456456456456456"
    this.props.history.push("/index")
  };
  toggleForm = () => {
    this.props.switchForm("register");
  };

  //用户名输入
  nameChnage=(e)=>{
    let value=e.target.value
    console.log(e.target)
    this.setState({
      username:value
    })
  }

  //倒计时方法
  countDown(){
    let sec=60,
        timer=null
    this.setState({
      code_button_disabled:true,
      code_button_loading:false,
      code_button_text:`${sec}S`
    })
    timer=setInterval(()=>{
      sec--
      if(sec === 0){
        clearInterval(timer)
        this.setState({
          code_button_text:`重新获取`,
          code_button_disabled:false
        })
      }else{
        this.setState({
          code_button_text:`${sec}S`
        })
      }
    },1000)
  }

  //获取验证码
  getCode=()=>{
    if(this.state.username.length<=0){
      message.warning("请输入用户名",1)
      return false;
    }
    this.setState({
      code_button_loading:true,
      code_button_text:"发送中"
    })
    let params={}
    .then(res=>{
      //倒计时
      this.state({
        code_button_loading:false,
      })
      this.countDown()
    }).catch(err=>{
      this.state({
        code_button_loading:false,
        code_button_text:"重新获取"
      })
    })
  }


  render() {
    // const _this=this
    return (
      <div>
        <div className="form-header">
          <h4 className="column">登录</h4>
          <span onClick={this.toggleForm}>账号注册</span>
        </div>
        <div className="form-content">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish.bind(this)}
          >
            <Form.Item
              className="item-input-name"
              name="username"
              initialValue="466879168@qq.com"
            >
              <Input
                prefix={<UserOutlined className="input-name" />}
                placeholder="管理员名"
                value={this.state.username}
                onChange={this.nameChnage}
              />
            </Form.Item>
            <Form.Item
              name="password"
              initialValue="123456"
            >
              <Input
                  type="password"
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="密码"
              />
            </Form.Item>
            <Form.Item
              name="code"
            >
              <Row gutter={13}>
                <Col className="gutter-row" span={14}>
                  <Input value="123456" prefix={<CodeOutlined />} placeholder="验证码" />
                </Col>
                <Col className="gutter-row" span={10}>
                  <Button type="danger" block disabled={this.state.code_button_disabled} onClick={this.getCode} loading={this.state.code_button_loading}>
                    {this.state.code_button_text}
                  </Button>
                </Col>
              </Row>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                block
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);