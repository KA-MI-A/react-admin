import React from 'react'
import {Modal, Descriptions} from "antd";

class InfoModal extends React.Component {


  render() {
    return (
        <Modal
            title='用户注册信息'

        >
          <Descriptions title="">
            <Descriptions.Item label="用户名">
              Zhou Maomao
            </Descriptions.Item>
            <Descriptions.Item label="性别">
              1810000000
            </Descriptions.Item>
            <Descriptions.Item label="注册ip地址">
              Hangzhou, Zhejiang
            </Descriptions.Item>
            <Descriptions.Item label="注册时间">empty</Descriptions.Item>
            <Descriptions.Item label="注册国家">
            </Descriptions.Item>
            <Descriptions.Item label="注册省份">
            </Descriptions.Item>
            <Descriptions.Item label="注册城市">
            </Descriptions.Item>
            <Descriptions.Item label="上一次登陆地址">
            </Descriptions.Item>
            <Descriptions.Item label="上一次登陆时间">
            </Descriptions.Item>
          </Descriptions>

        </Modal>
    )
  }
}

export default InfoModal
