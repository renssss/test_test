import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function BoilingVerdict(props) {
	if (props.celsius >= 100) {
		return <p>Вода закипит.</p>;
	}
	return <p>Вода не закипит.</p>;
}

class Calculator extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = { temperature: '' };
	}

	handleChange(e) {
		this.setState({ temperature: e.target.value });
	}

	render() {
		const temperature = this.state.temperature;
		return (
			<fieldset>
				<legend>Введите температуру в градусах Цельсия:</legend>
				<input value={temperature} onChange={this.handleChange} />
				<BoilingVerdict celsius={parseFloat(temperature)} />
			</fieldset>
		);
	}
}
ReactDOM.render(<Calculator />, document.getElementById('root'));
