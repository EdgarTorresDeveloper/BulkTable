import React from 'react';
import ReactDOM from 'react-dom';

import Login from './components/login/Login';

//-- Styles --
// Header
import './styles/header/styles.css';
// Login
import './styles/login/styles.css';
import './styles/login/responsive.css';


ReactDOM.render(<Login />,document.getElementById('root'));
