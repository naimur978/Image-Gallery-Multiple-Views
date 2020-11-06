import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/App.js";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store.js";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
