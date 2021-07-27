import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

class FriendStatus extends Component {
	constructor(props) {
		super(props);
		this.state = { isOnline: null };
		this.handleStatusChange = this.handleStatusChange.bind(this);
	}

	componentDidMount() {
		ChatAPI.subscribeToFriendStatus(
			this.props.friend.id,
			this.handleStatusChange
			);
	}

	componentWillUnmount() {
		ChatAPI.unsubscribeFromFriendStatus(
			this.props.friend.id,
			this.handleStatusChange
			);	
	}

	handleStatusChange(status) {
		this.setState({isOnline: status.isOnline
		});
	}

	render() {
		if (this.state.isOnline === null) {
			return 'Загрузка...';
		}
		return this.state.isOnline ? 'В сети' : 'Не в сети';
	}

}

function FriendStatusWithHook(props) {
	const [isOnline, setIsOnline] = useState(null);

	useEffect(() => {
		function handleStatusChange(status) {
			setIsOnline(status.isOnline);
		}
		ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
		// Указываем как сбросить этот эффект:
		return function cleanup() {
		//return () =>
			ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
		};
	});

	if (isOnline === null) {
		return 'Загрузка...';
	}

	return isOnline ? 'В сети' : 'Не в сети';
}


ReactDOM.render(<FriendStatus />, document.getElementById('root'));