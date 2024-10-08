import React from "react";
import ReactDOM from "react-dom";
import "./Core/imports.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import "./auth/httpConfig";
import { BrowserRouter } from "react-router-dom";
import store from "./Core/store";
import App from "./App";
import GlobalStyles from "./Core/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();