import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider as ReduxProvider } from "react-redux";
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter as Router } from 'react-router-dom';
import store from "./redux/store";

import TodoApp from "./TodoApp";

console.log(store.getState());
const rootElement = document.getElementById("root");
ReactDOM.render(
  <CookiesProvider>
    <Router>
      <ReduxProvider store={store}>
        <TodoApp />
      </ReduxProvider>
    </Router>
  </CookiesProvider>
  ,
  rootElement
);
