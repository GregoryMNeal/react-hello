import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import HelloMessage from './Hello';
import ListFriends from './Friends';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

ReactDOM.render(<HelloMessage name="Greg" />,
  document.getElementById('root'));
