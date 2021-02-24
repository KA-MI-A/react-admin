import React from 'react'
import {Spin,Card,Button,Empty} from 'antd'
import AnimatedBook from '@/component/AnimatedBook'


class Work extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      loading:false,
      collections:[]//作品列表
    }
  }
  render() {
    const {collections}=this.state
    return (
        <Spin spinning={this.state.loading}>
          <Card bordered={false}>
            <div style={{textAlign:'right',marginBottom:40}}>
              <Button>创建</Button>
              <Button type='danger'>删除</Button>
            </div>
            <div style={{display:'flex',width:'100%',flexWrap:'wrap'}}>
              {
                collections && collections.map((item,index)=>{
                  <AnimatedBook
                    
                  />
                })
              }
            </div>
            {
              !collections.length&&<Empty />
            }
          </Card>
        </Spin>
    )
  }
}

export default Work