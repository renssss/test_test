//timer
import ReactDOM from 'react-dom';
import React from 'react';

class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = { seconds: 0 };
	}
	tick() {
		this.setState((state) => ({
			seconds: state.seconds + 1,
		}));
	}
	componentDidMount() {
		this.interval = setInterval(() => this.tick(), 1000);
	}
	componentWillUnmount() {
		clearInterval(this.interval);
	}
	render() {
		return <h1>{this.state.seconds}</h1>;
	}
}

ReactDOM.render(<Timer />, document.getElementById('root'));
