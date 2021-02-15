import React from 'react'

import {Modal,Form,Input} from 'antd'

class EditPassword extends React.Component {
  constructor(props) {
    super(props)
  }
  //对话框取消
  handleCancel=() => {

  }
  //对话框确定
  handleOk=() => {

  }

  render() {
    const {passwordModal} =this.props
    return (
        <Modal
            title='修改密码'
            centered
            visible={passwordModal}
            onCancel={this.handleCancel}
            onOk={this.handleOk}
        >
        <Form>
          <Form.Item label="用户名">
            <Input />
          </Form.Item>
          <Form.Item label='账号'>
            <Input />
          </Form.Item>
          <Form.Item label='旧密码'>
            <Input />
          </Form.Item>
          <Form.Item label='新密码'>
            <Input />
          </Form.Item>
          <Form.Item label='确认密码'>
            <Input />
          </Form.Item>
        </Form>
        </Modal>
    )
  }
}

export default EditPassword;