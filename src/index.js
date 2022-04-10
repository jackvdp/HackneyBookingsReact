import React from "react"
import ReactDOM from "react-dom"
import "./styles/index.scss"
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App"
import Amend from "./routes/Amend";
import Booking from "./routes/Booking";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="booking" element={<Booking />} />
      <Route path="amend" element={<Amend />} />
    </Routes>
  </BrowserRouter>,
  rootElement
)