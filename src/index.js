import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/js/bootstrap.min.js";
import "./assets/plugins/fontawesome/css/fontawesome.min.css";
import "./assets/plugins/fontawesome/css/all.min.css";

import Approuter from "./approuter";

import { Amplify } from "aws-amplify";
import awsConfig from "./aws-exports";
Amplify.configure(awsConfig)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Approuter/>
  </React.StrictMode>
);
