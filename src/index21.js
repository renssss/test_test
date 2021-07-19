import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class EssayForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 'Будьте любезны напишите сочинение о вашем любимом DOM-элементе'
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSubmit(event) {
		alert('Сочинение отправлено: ' + this.state.value);
		event.preventDefault();
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Сочинение:
					<textarea
						value={this.state.value}
						onChange={this.handleChange}
						cols="30"
						rows="10"
					></textarea>
				</label>
				<input type="submit" value="Отправить" />
			</form>
		);
	}
}

ReactDOM.render(<EssayForm />, document.getElementById('root'));
