import React from 'react'
import {Modal, Button, Form, Upload,Input,DatePicker,Select,Radio,Alert  } from 'antd'
import {LoadingOutlined, PlusOutlined} from '@ant-design/icons';

const {Option}=Select

class EditUserInfo extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      confirmLoading: false,
      imageUrl: null,
      loading: false,
      radio:1
    }
  }

  //关闭模态框
  handleCancel = () => {
    this.props.handleCancel(false)
  }
  //点击确定按钮
  handleOk = () => {

  }
  //限制用户上传头像的大小
  beforeUpload = (file) => {
    const isJpgOrPng = file.type
  }
  //上传头像的回调
  handleAvatarChange = (info) => {

  }
  //性别选择
  handleRadioChange=(e)=>{
    console.log('radio checked', e.target.value);
    this.setState({
      radio: e.target.value,
    });
  }


  render() {
    console.log(this.props)
    const {imageUrl, loading} = this.state
    const uploadButton = (
        <div>
          {loading ? <LoadingOutlined/> : <PlusOutlined/>}
          <div style={{ marginTop: 8 }}>上传头像</div>
        </div>
    )
    return (
        <Modal
            title='编辑个人信息'
            onCancel={this.handleCancel}
            onOk={this.handleOk}
            confirmLoading={this.state.confirmLoading}
            visible={this.props.infoModal}
        >
          <div>
            <Form>
              <Form.Item
                  label='头像'
                  name='upload'
                  valuePropName="fileList"
              >
                <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    beforeUpload={this.beforeUpload}
                    onChange={this.handleAvatarChange}
                >
                  {imageUrl ? <img src={imageUrl} alt="avatar" style={{width: '100%'}}/> : uploadButton}
                </Upload>
              </Form.Item>
              <Form.Item label="用户名" name='name'>
                <Input placeholder="请输入用户名" />
              </Form.Item>
              <Form.Item label="出生日期" name='time'>
                <DatePicker />
              </Form.Item>
              <Form.Item label="手机" name='phone'>
                <Input placeholder="请输入手机号码" />
              </Form.Item>
              <Form.Item label="所在地" >
                <Form.Item name='country'>
                  <Select
                      style={{ width: 120 }}
                  >
                    <Option key={1}>6666</Option>
                  </Select>
                </Form.Item>
                <Form.Item name='city'>
                  <Select
                      style={{ width: 120 }}
                  >
                    <Option key={1}>6666</Option>
                  </Select>
                </Form.Item>
              </Form.Item>
              <Form.Item label="性别" name='name'>
                <Radio.Group onChange={this.handleRadioChange} value={this.state.radio}>
                  <Radio value={1}>男</Radio>
                  <Radio value={2}>女</Radio>
                </Radio.Group>
              </Form.Item>

            </Form>
            <Alert message={"信息仅为项目表单模拟数据，无其他用途"} type="info" />
          </div>
        </Modal>
    )
  }
}

export default EditUserInfo;