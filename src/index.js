import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Navigation from './Navigation';
import Header from './Header';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Footer from './Footer';
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
	render() {
		return (
			<div>
				<Navigation logoTitle="React Portfolio" />
				<Header title="Stylish Portfolio" button="Know More" />
				<About button="More New" />
				<Services />
				<Portfolio />
				<Footer />
			</div>
		);
	}
}



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


