import React from 'react'
import { NavLink } from 'react-router-dom';
import "../../style/main.scss";

export default function Nav() {
	
  return (
		<nav className="nav-header">
			<NavLink 
			 exact 
			 className="nav-header_link-home" 
			 activeClassName="active-link"
			 to="/" >
				Accueil
			</NavLink>
			
			<NavLink  
			 className="nav-header_link-about" 
			 activeClassName="active-link"
			 
			 to="/about">
				A Propos
			</NavLink>
		</nav>
	);
}

