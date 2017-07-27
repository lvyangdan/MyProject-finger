import React from 'react'
import {Link} from 'react-router-dom'
import './SignUp.css'
class SignUp extends React.Component{
	render(){
		return(
		<div className='signup'>
			<h6 className='signup-title'>login</h6>
			<h1 className='signup-bigtitle'>注册</h1>
			<p className='signup-subtitle'>连接一个个小而确定的幸福</p>
			<form className='signup-form'>
				<input type="text" placeholder='登录名'/>
				<input type="text" placeholder='email'/>
				<input type="text" placeholder='密码'/>
				<input type="text" placeholder='再输入一次'/>
				<button>注册</button>
			</form>
			<Link to='/login'>已有账户？点击登录</Link>
		</div>)
	}
}
export default SignUp