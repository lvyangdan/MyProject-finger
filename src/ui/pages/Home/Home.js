import React from 'react'
import {Link} from 'react-router-dom'
import logo from './logo.svg'
import './Home.css'
class Home extends React.Component{
	render(){
		return(
		<div className='home'>
			<img src={logo} alt="logo"/>
			<h1 className='title'>吮指</h1>
			<p>享受舌尖艳遇</p>
			<div className='actions'>
				<Link to='/signup'>注册</Link>
				<Link to='/login'>登录</Link>
			</div>
		</div>)
	}
}
export default Home