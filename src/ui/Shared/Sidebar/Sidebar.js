import React from 'react';
import { sidebar as Menu } from 'react-burger-menu'
import {Link} from 'react-router-dom'
class Sidebar extends React.Component{
	render(){
		return( <Menu>
		<div className="bm-user-info">
            <img src="http://media.haoduoshipin.com/yummy/default-avatar.png" alt="avatar" />
            <div className="bm-user-auth">
            	登录？
            </div>
        </div>
        <Link to="/" className="menu-item" href="/">Home</Link>
        <Link to="/signup" className="menu-item" href="/about">About</Link>
        <Link to="/cart" className="menu-item" href="/contact">Contact</Link>
        <Link to='/dishes'className="menu-item--small" href="">Settings</Link>
      </Menu>)
	}
}

export default Sidebar