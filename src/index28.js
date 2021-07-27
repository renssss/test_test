import React, { Fragment, Component, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

function Example() {
//Объявление новой переменной состояния "count"
	const [count, setCount] = useState(0); 

	useEffect(() => {
	document.title = `Вы нажали ${count} раз`;
	}, [count]);

return (
		<div>
		<p>Это хук. Вы кликнули {count} раз(а)</p>
			<button onClick={()=> setCount(count + 1)}>
				Нажми на меня!
			</button>
		</div>
	);
}

class Example2 extends Component {
	constructor(props) {
		super(props);
		this.state = {count: 0};
	}
	
	render() {
		return (<div>
			<p>Это класс. Вы нажали {this.state.count} раз(а)</p>
			<button onClick={() => this.setState({count: this.state.count + 1})}>
				Нажми на меня!
			</button>
		</div>);
	}
}
function App() {
	return <Fragment> <Example /><Example2 /> </Fragment>;
}

ReactDOM.render(<App />, document.getElementById('root'));