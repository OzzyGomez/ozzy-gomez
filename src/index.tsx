import React from 'react';
import ReactDOM from 'react-dom';
import './Styles.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { IconContext } from 'react-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);

ReactDOM.render(
	<IconContext.Provider value={{ size: '1rem' }}>
		<App />
	</IconContext.Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
