import React from 'react';
import logo from '../../assets/img/logo.png';
import './Header.css';
import {Link} from 'react-router-dom';

const linkItemStyle = {
	fontWeight: '500',
	padding:' 5px 0'
}
	

class Header extends React.Component{
	state = {
		nav : {
			barheight: '71px',
			logo:{	
					paddingTop:'1rem',
					alignSelf: 'flex-start',
				   	display: 'inline-block',
					width: '120px',  
			},
			links : [
				{name:'Home',address:'/',color:'black'},
				{name:'Services',address:'/',color:'black'},
				{name:'About',address:'/',color:'black'},
				{name:'Contact',address:'/',color:'black'},
			]
		}
		
	}
	
	hoverIt(e,name) {
		var updatedLinks = this.state.nav.links.map((l)=>{
			if(l.name === name){
				if(l.color==='black'){
					l.color = '#e95420';
				}else{
					l.color = 'black';
				}
			}	
			return l;
		});
		this.setState({
			links:[...this.state.nav.links,...updatedLinks]
		});
	  }
	  

	listenScrollEvent = e => {
		if (window.scrollY > 71) {
			this.setState(prevState =>({
				...prevState,
				nav:{
					...prevState.nav,
					barheight: '60px',
					logo:{
						...prevState.nav.logo,
						width:'120px'
					},
				}
				})
				)
		} else {
			this.setState(prevState =>({
				...prevState,
				nav:{
					...prevState.nav,
					barheight: '71px',
					logo:{
						...prevState.nav.logo,
						width:'180px'
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
						<img className="header-logo" style={{color:'white',filter:'brightness(0)invert(0)'}}  src={logo} alt="RQACS" />
					</div>
					</Link>
				<nav id="nav">
					<ul className="link-items">
						{this.state.nav.links.map((l,key) => 
							<li key={key} style={linkItemStyle}> <Link  onMouseEnter={(e)=>this.hoverIt(e,l.name,key)} onMouseLeave={(e)=>this.hoverIt(e,l.name)} style={{color:l.color,fontSize:'15px'}} to='/'>{l.name}</Link></li>
						)}
						
					</ul>	
				</nav>
			</header>

  
		)
	}
	
};


 

export default Header;