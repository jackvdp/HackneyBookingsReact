import Accordion from "./components/Accordion"
import Header from "./components/Header"
import axios from "axios"
import React, { useState, useEffect } from 'react'

function App() {

  const [apiData, setapiData] = useState("")
  useEffect(() => {
    axios.get("https://hackney-bookings-api.herokuapp.com/booking")
    .then(response_from_api => {
      console.log(response_from_api)
    })
    .catch(err => {
      console.log(err)
    })
  });
  
  return (
    <>
    <Header />
    <Accordion />
    </>
  )
}

export default App
