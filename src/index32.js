import React from 'react';
import ReactDOM from 'react-dom';

function Counter({initialCount}) {
	const [count, setCount] = useState(initialCount);
	return (
			<>
			Счёт: {count}
			<button onClick={() => setCount(initialCount)}>Сбросить</button>
			<button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
			<button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>

			</>
		);
}

ReactDOM.render(<Counter />, document.getElementById('root'));