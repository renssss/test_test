import ReactDOM from 'react-dom';
import React from 'react';
function Mailbox(props) {
	const unreadMessages = props.unreadMessages;
	return (
		<div>
			<h1>Здравствуйте!</h1>
			{unreadMessages.length > 0 && (
				<h2>У вас {unreadMessages.length} непрочитанных сообщений.</h2>
			)}
		</div>
	);
}
const messages = [];
ReactDOM.render(
	<Mailbox unreadMessages={messages} />,
	document.getElementById('root')
);
