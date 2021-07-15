import ReactDOM from 'react-dom';
import React from 'react';

class TodoApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = { items: [], text: '' };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(e) {
		this.setState({ text: e.target.value });
	}
	handleSubmit(e) {
		e.preventDefault();
		if (this.state.text.length === 0) {
			return;
		}
		const newItem = { text: this.state.text, id: Date.now() };
		this.setState((state) => ({
			items: state.items.concat(newItem),
			text: '',
		}));
	}
	render() {
		return (
			<div>
				console.log();
				<h3>Список дел</h3>
				<TodoList items={this.state.items} />
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="new-todo">Что нужно сделать?</label>
					<br />
					<br />
					<input
						id="new-todo"
						onChange={this.handleChange}
						value={this.state.text}
					/>
					<br />
					<br />
					<button>Добавить #{this.state.items.length + 1}</button>
				</form>
			</div>
		);
	}
}

class TodoList extends React.Component {
	render() {
		return (
			<ul>
				{this.props.items.map((item) => (
					<li key={item.id}>{item.text}</li>
				))}
			</ul>
		);
	}
}

ReactDOM.render(<TodoApp />, document.getElementById('root'));
