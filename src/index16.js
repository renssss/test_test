import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => (
	<li key={number.toString()}>{number}</li>
));

ReactDOM.render(<ul>{listItems}</ul>, document.getElementById('root'));
