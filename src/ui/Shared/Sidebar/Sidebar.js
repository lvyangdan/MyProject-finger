import React from 'react';
import { sidebar as Menu } from 'react-burger-menu'
import {Link} from 'react-router-dom'
class Sidebar extends React.Component{
	render(){
		return( 
		<Menu >
			<div className="bm-user-info">
	            <img src="http://media.haoduoshipin.com/yummy/default-avatar.png" alt="avatar" />
	            <div className="bm-user-auth">
	            	登录？
	            </div>
	        </div>
	        <Link to="/" className="menu-item" >Home</Link>
	        <Link to="/signup" className="menu-item" >About</Link>
	        <Link to="/cart" className="menu-item" >Contact</Link>
	        <Link to='/dishes'className="menu-item--small" >Settings</Link>
	    </Menu>)
	}
}

export default Sidebar