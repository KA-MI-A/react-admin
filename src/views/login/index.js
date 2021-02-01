import React, { Component } from 'react'
import './Index.scss'
import LoginForm from './LoginForm'
export default class Index extends Component {
    render() {
        return (
            <div className="login-back-color"> 
                <div className="form-box">
                    <LoginForm />
                </div>
                
            </div>
        )
    }
}