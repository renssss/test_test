import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function Form() {
	// 1. Используем переменную состояния name
	const [name, setName] = useState('Мэри');

	// 2. Используем эффект для сохранения данных формы
	useEffect(function persistForm() {
		localStorage.setItem('formData', name);
	});

	// 3. Используем переменную состояния surname
	const [surname, setSurname] = useState('Поппинс');

	// 4. Используем эффект для обновления заголовка страницы
	useEffect(function updateTitle() {
		document.title = name + ' ' + surname;
	});
}

ReactDOM.render(<Form />, document.getElementById('root'));