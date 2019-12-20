import React from 'react';
import { render} from 'react-dom';


import App from './App.js'

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


render(
 <App/>
     , document.getElementById('root')
)