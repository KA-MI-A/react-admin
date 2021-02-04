import React from 'react'
import "./index.css"

// import LoginForm from './LoginForm'
// import RegisterForm from './RegisterForm'
import { Form, Input, Button, Row, Col  } from 'antd';
import { UserOutlined, UnlockOutlined  } from '@ant-design/icons';
class Login extends React.Component {
  constructor() {
    super()
    this.state = {};

    this.onFinish = this.onFinish.bind(this);
  }
  onFinish(){
    alert(11)
  }
  // onFinish = values => {
  //   console.log('Received values of form: ', values);
  // };
  render() {
    return (
      <div className="form-wrap">
        <div>
          <div className="form-header">
            <h4 className="column">登录</h4>
            <span>帐号注册</span>
          </div>
          <div className="form-content">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={this.onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}>
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}>
          <Input prefix={<UnlockOutlined  className="site-form-item-icon" />} placeholder="password" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}>
            <Row gutter={13}>
              <Col span={16}>
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="code" />
              </Col>
              <Col span={6}>
              <Button type="danger">获取验证码</Button>
              </Col>
            </Row>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button" block>
            登录
        </Button>
        </Form.Item>
      </Form>
      </div>
      </div>
      </div>
    )
  }
}

export default Login;
