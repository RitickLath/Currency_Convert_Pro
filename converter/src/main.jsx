import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div
      className="bg-cover bg-no-repeat bg-center h-screen"
      style={{
        backgroundImage:
          'url("https://wallpapersmug.com/download/1920x1080/4c063c/bitcoin-crypto-currency.jpg")',
      }}
    >
      <br />
      <br />
      <br />
      <App />
    </div>
  </React.StrictMode>
);
