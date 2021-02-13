import React from "react";
import "./index.less";

import { Form, Input, Button, Row, Col } from "antd";
import { UserOutlined, LockOutlined, CodeOutlined } from "@ant-design/icons";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  onFinish = (values) => {
    console.log("Finish:", values);
  };

  toggleForm = () => {
    this.props.switchForm("login");
  };

  render() {
    return (
      <div>
        <div className="form-header">
          <h4 className="column">注册</h4>
          <span onClick={this.toggleForm}>登录</span>
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
              rules={[
                {
                  required: true,
                  message: "请输入用户名!",
                },
                {
                  type:"email",
                  message:"邮箱格式不正确"
                }
              ]}
            >
              <Input
                prefix={<UserOutlined className="input-name" />}
                placeholder="管理员名"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "请输入密码!",
                },
                {
                  min:6,
                  message:"密码不能小于6位"
                },
                {
                  max:16,meaasage:"密码不能大于16位"
                }
              ]}
            >
              <Input
                  type="password"
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="密码"
              />
            </Form.Item>
            <Form.Item
              name="againpassword"
              rules={[
                {
                  required: true,
                  message: "请重新输入密码!",
                }
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="重复密码"
              />
            </Form.Item>
            <Form.Item>
              <Row gutter={13}>
                <Col className="gutter-row" span={14}>
                  <Input prefix={<CodeOutlined />} placeholder="验证码" />
                </Col>
                <Col className="gutter-row" span={10}>
                  <Button type="danger" block>
                    获取验证码
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
                注册
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

export default Register;
