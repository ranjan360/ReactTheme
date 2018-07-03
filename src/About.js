import React, {Component} from 'react';
import './About.css';

class About extends Component{
	render(){
		return(
		<div className="about">
			<div className="texts">
			<h2>The standard Lorem Ipsum passage, used since the 1500s!</h2>
			<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
			<a href="#button">{this.props.button}</a>
			</div>
		</div>
		);
	}
}

export default About;