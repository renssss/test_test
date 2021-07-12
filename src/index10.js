import ReactDOM from 'react-dom';
import React from 'react';
class Hello extends React.Component {
	render() {
		return <h1>Hello, {this.props.name}!!</h1>;
	}
}

ReactDOM.render(<Hello name="Саша" />, document.getElementById('root'));
