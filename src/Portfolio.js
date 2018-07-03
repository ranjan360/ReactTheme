import React, {Component} from 'react';
import './Portfolio.css';


class Portfolio extends Component{
	render(){
		return(
			<div className="portfolio">
				<h3>Portfolio</h3>
				<h2>I am Student of Navgurukul</h2>

				<div className="row">
					<img src={require('./img/first.jpg')} />
					<img src={require('./img/second.jpg')} />
					<img src={require('./img/third.jpg')} />
					<img src={require('./img/four.jpg')} />
				</div> 
				<div className="row">
					<img src={require('./img/five.jpg')} />
					<img src={require('./img/six.jpg')} />
					<img src={require('./img/eight.jpg')} />
					<img src={require('./img/nine.jpg')} />
				</div> 
			</div>

		);
	}
}

export default Portfolio;