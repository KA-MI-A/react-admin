import React from 'react'
import "./index.css"

import LoginForm from './LoginForm'
import Register from './registerForm'

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
                this.state.formType === 'login'?<LoginForm switchForm={this.switchForm} />:<Register switchForm={this.switchForm} />
              }
            </div>
          </div>
        </div>
    )
  }
}

export default Login
  