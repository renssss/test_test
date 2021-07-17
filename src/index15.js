import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function WarningBanner(props) {
	if (!props.warn) {
		return null;
	}
	return <div className="warning">Предупреждение!</div>;
}

class Page extends Component {
	constructor(props) {
		super(props);
		this.state = { showWarning: true };
		this.handleToggleClick = this.handleToggleClick.bind(this);
	}

	handleToggleClick() {
		this.setState((state) => ({ showWarning: !state.showWarning }));
	}

	render() {
		return (
			<div>
				<WarningBanner warn={this.state.showWarning} />
				<button onClick={this.handleToggleClick}>
					{this.state.showWarning ? 'Спрятать' : 'Показать'}
				</button>
			</div>
		);
	}
}

ReactDOM.render(<Page />, document.getElementById('root'));
