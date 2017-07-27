import React from 'react'
import {Link} from 'react-router-dom'
import './Login.css'
class Login extends React.Component{
	render(){
		return(
		<div className='login'>
			<h6 className='login-title'>login</h6>
			<h1 className='login-bigtitle'>登录</h1>
			<p className='login-subtitle'>连接一个个小而确定的幸福</p>
			<form className='login-form'>
				<input type="text"placeholder='登录名'/>
				<input type="text"placeholder='密码'/>
				<button>登录</button>
			</form>
			<Link to='/signup'>没有账号？点击注册</Link>
		</div>)
	}
}
export default Login