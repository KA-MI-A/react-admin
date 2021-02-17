import React from 'react'
import {Tree} from 'antd'

class Auth extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      data:[],
      sourceData:[],
      loading:false,
      treeSelect:{},
      nowData:null,
      operateType:'add',
      modalShow:false,
      modalLoading:false,
      menuChoseShow:false,

    }
  }

  componentDidMount() {
    if(this.props.userinfo){

    }
  }

  render() {
    return (
        <div className='page-power-admin'>
          <div className='left'>
            <div className='title'>
              <div>
                <Tree
                    treeData={this.state.sourceData}
                >
                </Tree>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default Auth
