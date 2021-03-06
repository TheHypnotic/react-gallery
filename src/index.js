import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppProvider } from "./context";
import { BrowserRouter } from "react-router-dom";
import "./style/css/style.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
