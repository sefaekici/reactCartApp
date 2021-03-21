import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//reactstrap import işlemi
import "bootstrap/dist/css/bootstrap.min.css";
//alertify js import işlemi bunun öncesinde paket kurulmuştur.
import "alertifyjs/build/css/alertify.css";
//react router ın import edilmesi işlemi bunun öncesinde paket kurulmuştur.
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/*buraya app routerdan dolayı eklenmiştir.*/}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
