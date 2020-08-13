import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
	<App />,
	document.querySelector('#root') // querySelector only select the first element in the DOM you can use getElementById instead
);
