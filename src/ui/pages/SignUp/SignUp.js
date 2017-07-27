import React from 'react'
import {Link} from 'react-router-dom'
import setting from '../../../setting'
import axios from 'axios'
import './SignUp.css'
import {connect} from 'react-redux'
class SignUp extends React.Component{
	signup=(e)=>{
		e.preventDefault();
		let username = this.usernameInput.value
        let password = this.passwordInput.value
        let data = {username, password} 
	axios.post(`${setting.host}/user/signup`, data).then( res => {
      console.log(res.data)
      // this.props.history.push('/dashboard')
      this.props.dispatch({ type: 'SIGN_IN', username: res.data.username })
      localStorage.setItem('userId', res.data.userId)
    }).catch(err => {
      this.props.dispatch({ type: 'SHOW_ALERT', msg: err.response.data.msg })
    })
	}
	render(){
		return(
		<div className='signup'>
			<h6 className='signup-title'>sign</h6>
			<h1 className='signup-bigtitle'>注册</h1>
			<p className='signup-subtitle'>连接一个个小而确定的幸福</p>
			<form onSubmit={this.signup} className='signup-form'>
				<input ref={value => this.usernameInput = value} type="text" placeholder='登录名'/>
				<input type="text" placeholder='email'/>
				<input ref={value => this.passwordInput = value} type="text" placeholder='密码'/>
				<input type="text" placeholder='再输入一次'/>
				<button type='submit'>注册</button>
			</form>
			<Link to='/login'>已有账户？点击登录</Link>
		</div>)
	}
}
export default connect(null)(SignUp)