import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class FileInput extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.fileInput = React.createRef();
	}

	handleSubmit(event) {
		event.preventDefault();
		alert(`Selected file - ${this.fileInput.current.files[0].name}`);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Upload file:
					<input type="file" ref={this.fileInput} />
				</label>
				<br />
				<button type="submit">Submit</button>
			</form>
		);
	}
}
ReactDOM.render(<FileInput />, document.getElementById('root'));
