import React,{Fragment} from 'react'

import {Form, Input,Button,Table,Switch,message} from 'antd'
import {Link} from 'react-router-dom'

export default class DepartmentList extends React.Component {
  constructor(props){
    super()
    this.state={
      id:"",
      flag:false,
      pageNumber:1,
      pageSize:10,
      keyWork:"",
      tableConfig:{
        url:"departmentList",
        checkbox:true,
        thead:[
          {
            title:"部门名称",
            dataIndex:"name",
            key:"name",
            render:(name,rowData)=>{
            return <a href={rowData.id}>{name}</a>
            }
          },
          {
            title:"禁启用",
            dataIndex:"status",
            key:"status",
            render:(status,rowData)=>{
              return <Switch onChange={()=>this.onHandlerSwitch(rowData)} loading={rowData.id === this.state.id} checkedChildren="启用" unCheckedChildren="禁用" defaultChecked={status === '1'?true:false} />
            }
          },
          {
            title:"人员数量",
            dataIndex:"number",
            key:"number"
          },
          {
            title:"操作",
            dataIndex: 'operation',
            key:"operation",
            width:215,
            render:(text,rowData)=>{
              return (
                  <div className="inline-button">
                    <Button type="primary">
                      <Link to={{pathname:'/index/department/add',state:{id:rowData.id}}}>编辑</Link>
                    </Button>
                    <Button onClick={()=>this.delete(rowData.id)}>
                      删除
                    </Button>
                  </div>
              )
            }
          }
        ],
        formItem:[
          {
            type:'Input',
            label:'部门名称',
            name:'name',
            placeholder:'请输入部门名称'
          },
          {
            title:'Select',
            label:'禁启用',
            name:'status',
            placeholder: "请选择",
            style:{width:'100px'},
            optionsKey:"status"
          }
        ],
        data:[]
      }
    }

  }

  componentDidMount(){

  }
  getChildRef=(ref)=>{
    this.tableComponent=ref
  }
  onHandlerSwitch(data){
    if (!data.status){
      return false
    }
    if(this.state.flag){
      return false
    }
    const requestData={
      id:data.id,
      status:data.status === '1'?false:true
    }
    this.setState({
      id:data.id
    })

  }

  delete=(id)=>{
    this.tableComponent.onHandlerDelete(id)
  }

  render() {
    return (
        <Fragment>
          <Form layout="inline" >
            <Form.Item label="部门名称" name="name">
              <Input placeholder="请输入部门名称" />
            </Form.Item>
            <Form.Item>
              <Button>搜索</Button>
            </Form.Item>
          </Form>
          <div className="table-wrap">
            <Table></Table>
          </div>
        </Fragment>
    )
  }
}
