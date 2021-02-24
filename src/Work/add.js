import React from 'react'
import {Modal,Form,Input} from 'antd'

class AddWork extends React.Component {
  render() {
    return (
      <Modal
        title='新增作品'
        
      >
        <Form>
          <Form.Item label='项目名称'>
            <Input placeholder='请输入项目名称'/>
          </Form.Item>
          <Form.Item label='项目描述'>
            <Input placeholder='请输入项目描述' />
          </Form.Item>
          <Form.Item label='预览地址'>
            <Input placeholder='请输入项目预览地址' />
          </Form.Item>
          <Form.Item label='github地址'>
            <Input placeholder='请输项目github地址' />
          </Form.Item>
        </Form>
      </Modal>
    )
  }
}