import React from "react"
import "./styles/index.scss"
import { render } from "react-dom";
import App from "./App";

const rootElement = document.getElementById("root");
render(
  <App />,
  rootElement
)