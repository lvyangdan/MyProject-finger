import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import setting from '../../../setting'
import axios from 'axios'
import './Login.css'
class Login extends React.Component{
	login=(e)=>{
		e.preventDefault()
		let username=this.username.value
		let password=this.password.value
		let data={username,password}
		axios.post(`${setting.host}/user/login`,data).then(res=>{
			console.log(data)
			this.props.history.push('/dashboard')
			this.props.dispatch({type:'SIGN_IN',username:res.data.username})
			
		}).catch(err => {
      const { msg } = err.response.data
      this.props.dispatch({ type: 'SHOW_ALERT', msg })
    })
	}
	render(){
		return(
		<div className='login'>
			<h6 className='login-title'>login</h6>
			<h1 className='login-bigtitle'>登录</h1>
			<p className='login-subtitle'>连接一个个小而确定的幸福</p>
			<form onSubmit={this.login} className='login-form'>
				<input ref={value=>this.username=value} type="text"placeholder='登录名'/>
				<input ref={value=>this.password=value} type="text"placeholder='密码'/>
				<button>登录</button>
			</form>
			<Link to='/signup'>没有账号？点击注册</Link>
		</div>)
	}
}
export default connect(null)(Login)