import React ,{Component} from 'react'

import {Form,Input,InputNumber,Button,Radio} from 'antd'

import {DepartmentAddd} from '../api/department'

class DepartmentAdd extends Component{
  constructor(props){
    super(props)
    this.state={
      loading:false,
      formLayout:{
        labelCol:{span:2},
        wrapperCol:{spam:22}
      }

    }
  }

  onFinish=(values)=>{
    console.log(values)
    this.setState({
      loading:true
    })
    console.log(this.refs.form)
    // DepartmentAddd(values).then(res=>{
    //   if (res.success){
    //
    //   }
    // })
    setTimeout(()=>{
      this.setState({
        loading:false
      })
    },1000)
  }

  render() {
    return (
        <Form ref="form" labelCol={this.state.formLayout.labelCol} wrapperCol={this.state.formLayout.wrapperCol} onFinish={this.onFinish}>
          <Form.Item label="部门名称" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="人员数量" name="number">
            <InputNumber min={0} max={100} />
          </Form.Item>
          <Form.Item label="禁启用" name="status">
            <Radio.Group defaultValue={true}>
              <Radio value={false}>禁用</Radio>
              <Radio value={true}>启用</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="描述" name="content">
            <Input.TextArea />
          </Form.Item>
          <Form.Item>
            <Button loading={this.state.loading} type="primary" htmlType="submit">确定</Button>
          </Form.Item>
        </Form>
    )
  }
}

export default DepartmentAdd;
