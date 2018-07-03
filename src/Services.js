import React, {Component} from 'react';
import './Services.css';

class Services extends Component{
	render(){
		return(
			<div className="services" >
				<h3>Services</h3>
				<h2>I am Student of Navgurukul</h2>
				<div className="row">
					<div>
						<span>
						<ion-icon name="phone-portrait"></ion-icon>
						</span>
						<h4>Web Development</h4>
						<p>World</p>
					</div>
					<div>
						<span>
						<ion-icon name="laptop"></ion-icon>
						</span>
						<h4>Front-End Development</h4>
						<p>World</p>
					</div>
					<div>
						<span>
						<ion-icon name="logo-designernews"></ion-icon>
						</span>
						<h4>IOS Development</h4>
						<p>World</p>
					</div>
					<div>
						<span>
						<ion-icon name="create"></ion-icon>
						</span>
						<h4>Full Stack Development</h4>
						<p>World</p>
					</div>
				</div>
			</div>
		);

	}
}
export default Services;