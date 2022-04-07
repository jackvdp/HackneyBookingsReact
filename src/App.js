import Accordion from "./components/Accordion"
import Header from "./components/Header"
import axios from "axios"
import React, { useState, useEffect } from 'react'

function App() {

  const [name, setName] = useState("")
  
  useEffect(() => {
    axios.get("https://hackney-bookings-api.herokuapp.com/categories")
    .then(response_from_api => {
      console.log(response_from_api)
      console.log(response_from_api.data[0].name)
      setName(response_from_api.data[0].name)
    })
    .catch(err => {
      console.log(err)
    })
  });
  
  return (
    <>
    <Header />
    {/* <Home /> */}
    <Accordion>
      {name}
    </Accordion>
    </>
  )
}

export default App
