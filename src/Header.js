import React, {Component} from 'react';
import './Header.css';
// import Background from './img/second.jpg';

const styles = {
		height: '50vh', 
		backgroundSize: 'cover'
	}

class Header extends Component {
	render(){
		return (
			<header style= {styles}>
				<div className="img">
					<img src={require('./img/bg_img.jpg')} />
				</div>
				<div className="boxx">
					<h1>{this.props.title}</h1>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
					<a href="#button">{this.props.button}</a>
				</div>
			</header>
		);
	}
}

export default Header;