import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AccountProvider } from "./context/Account";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AccountProvider>
      <ToastContainer position="top-center" />
      <App />
    </AccountProvider>
  </React.StrictMode>
);
