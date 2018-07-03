import React, {Component} from 'react';
import './Footer.css';


const styles = {
		height: '20vh', 
		backgroundSize: 'cover',
		background: 'black'
	}


class Footer extends Component{
	render(){
		return(
			<footer style={styles}>
				<div className="footer1">
					<p>&copy; 2018 Ranjan - All Rights Reserved India</p>
				</div>
				<div className="icons">
					<a href="https://www.facebook.com/Ranjan3606"><span><ion-icon name="logo-facebook"></ion-icon></span></a>
					<a href="https://github.com/ranjan360"><span><ion-icon name="logo-github"></ion-icon></span></a>
					<a href="https://www.linkedin.com/in/ranjan-kumar-bb60b114b/"><span><ion-icon name="logo-linkedin"></ion-icon></span></a>
					<a href="https://plus.google.com/u/0/"><span><ion-icon name="logo-googleplus"></ion-icon></span></a>
				</div>
			</footer>
		)
	}
}
export default Footer;