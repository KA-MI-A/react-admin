import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import  "./LoginForm.scss";
export default class LoginForm extends Component {
  onFinish = (params) => {
      console.log('dddd')
  }

  render () {
    return (
      <div className="login-box">
        <Form
          name='normal_login'
          className='login-form'
          initialValues={{
            remember: true
          }}
          onFinish={this.onFinish}
        >
          <Form.Item
            name='username'
            rules={[
              {
                required: true,
                message: '请输入用户名!'
              }
            ]}
          >
            <Input
              prefix={<UserOutlined className='site-form-item-icon' />}
              placeholder='请输入用户名'
            />
          </Form.Item>{' '}
          <Form.Item
            name='password'
            rules={[
              {
                required: true,
                message: '请输入密码!'
              }
            ]}
          >
            <Input
              prefix={<LockOutlined className='site-form-item-icon' />}
              type='password'
              placeholder='Password'
            />
          </Form.Item>{' '}
          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              className='login-form-button'
            >
              Log in
            </Button>
          </Form.Item>{' '}
        </Form>
       {' '}
      </div>
    )
  }
}