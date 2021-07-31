import "reset.css/reset.css";

import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import { createBrowserHistory } from "history";

import reportWebVitals from "./reportWebVitals";
import { App } from "./App";
import { createStore } from "./store";
import { makeAppDependencies } from "./dependencies";

const history = createBrowserHistory();
const store = createStore(makeAppDependencies(history));
const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    background: #EEE;
    
    font-size: 1.6rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  
  * {
    box-sizing: border-box;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <GlobalStyle />
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
