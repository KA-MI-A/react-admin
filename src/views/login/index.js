import React from 'react'
import "./index.less"

import Log from './Log'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

class Login extends React.Component{
  constructor(){
    super()
    this.state={
      formType:"login"
    }
  }

  switchForm=(value)=>{
    this.setState({
      formType:value
    })
  }

  render(){
    return ( 
        <div className="p-login">
          <div className="form-wrap">
            <div>
              {
                this.state.formType === 'login'
                ?
                <RegisterForm switchForm={this.switchForm} ></RegisterForm>
                :<LoginForm switchForm={this.switchForm}></LoginForm>
                // :<Log switchForm={this.switchForm}></Log>
              }
            </div>
          </div>
        </div>
    )
  }
}

export default Login;