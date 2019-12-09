import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'

const Footer = () => {
    return(

        <footer className="footer-section set-bg" style={footerStyle}>
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-6">
					<Link to="/">
						<div className="footer-logo">
							<img src={logo} alt="" />
						</div>
					</Link>
					<div className="footer-social">
						<a href="https://www.instagram.com/rqacs"><i className="fa fa-instagram"></i></a>
						<a href="https://www.facebook.com/rqacs"><i className="fa fa-facebook"></i></a>
						<a href="https://www.twitter.com/rqacs"><i className="fa fa-twitter"></i></a>
						<a href="https://www.linkedin.com/rqacs"><i className="fa fa-linkedin"></i></a>
					</div>
				</div>
				<div className="col-lg-6 text-lg-right">
					<ul className="footer-menu">
						<li><Link to="/">Home</Link></li>
						<li><Link to="#">Services</Link></li>
						<li><Link to="/privacy-policy">Privacy-Policy</Link></li>
						<li><Link to="/contact">Contact</Link></li>
					</ul>
					<p className="copyright">
						Copyright &copy; {year} RQACS Inc.
					</p>
				</div>
			</div>
		</div>
	</footer>
    )
};

const year = new Date().getFullYear();
const footerStyle = {
    backgroundImage: `url()`,
}
 

export default Footer;