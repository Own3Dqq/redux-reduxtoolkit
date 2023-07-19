import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import {Provider} from "react-redux";
import {configureStore} from './store/store'
import {Root} from "./Root";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Root store={configureStore}/>
  // <Provider store={store}>
  //     <Router>
  //         <App />
  //     </Router>
  // </Provider>
);
