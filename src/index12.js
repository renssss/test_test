import ReactDOM from 'react-dom';
import React from 'react';

class TodoApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = { items: [], text: '' };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange() {}
	handleSubmit() {}
	render() {
		return (
			<div>
				<h3>Список дел</h3>
				<TodoList></TodoList>
			</div>
		);
	}
}

ReactDOM.render(<TodoApp />, document.getElementById('root'));
