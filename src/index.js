// index.js
//import React from "react";
//import ReactDOM from "react-dom/client";
//import { BrowserRouter } from "react-router-dom";
//import App from "./App";
//import MapView from "./components/MapView/MapView";

//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(
	//<React.StrictMode>
		//<BrowserRouter>
			//<App />
		//</BrowserRouter>
	//</React.StrictMode>
//);

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);
