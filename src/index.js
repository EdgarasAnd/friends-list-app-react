import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import NavBar from "./navbar";
import InputForm from "./InputForm";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavBar />
    <InputForm />
    <App />
  </React.StrictMode>
);
