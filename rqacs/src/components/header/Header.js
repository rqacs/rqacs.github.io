import React from 'react';
import logo from '../../assets/img/logo.png';
import './Header.css';
import {Link} from 'react-router-dom';

const linkItemStyle = {
	fontWeight: '500',
	padding:' 5px 0'
}
const linkItemAStyle = {
	color: '#474747'
}
class Header extends React.Component{
	state = {
		nav : {
			barheight: '91px',
			logo:{
					alignSelf: 'flex-start',
				   	display: 'inline-block',
				   	width: '250px'
			}
		}
		
	}
	

	listenScrollEvent = e => {
		if (window.scrollY > 91) {
			this.setState(prevState =>({
				...prevState,
				nav:{
					barheight: '60px',
					logo:{
						...prevState.nav.logo,
						width:'180px'
					},
				}
				})
				)
		} else {
			this.setState(prevState =>({
				...prevState,
				nav:{
					...prevState.nav,
					barheight: '91px',
					logo:{
						...prevState.nav.logo,
						width:'250px'
					},

				}
				})
				)
		}
	}
	componentDidMount() {
		window.addEventListener('scroll', this.listenScrollEvent)
	}
	componentWillUnmount() {
        window.removeEventListener('scroll', this.listenScrollEvent);
	}
	
 
	render(){
		return(
			<header  style={{height:this.state.nav.barheight,padding:'0 60px',overflow:'visible'}} >

				<input type="checkbox" id="opentoggle"/>
				<label className="opentoggle-label" for="opentoggle"><i className="fa fa-bars "></i></label> 	
				
				<Link to="/">
					<div className="logo-div" href="/" style={this.state.nav.logo}>
						<img className="header-logo" src={logo} alt="FoodieBells" />
					</div>
					</Link>
				<nav id="nav">
					<ul className="link-items">
						<li style={linkItemStyle}> <Link style={linkItemAStyle} to="/">Home</Link></li>
						<li style={linkItemStyle}> <Link style={linkItemAStyle} to="/">About</Link></li>
						<li style={linkItemStyle}> <Link style={linkItemAStyle} to="/">Services</Link></li>
                        <li style={linkItemStyle}> <Link style={linkItemAStyle} to="/">Contact</Link></li>
					</ul>	
				</nav>
			</header>

  
		)
	}
	
};


 

export default Header;