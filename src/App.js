import Accordion from "./components/Accordion"
import Header from "./components/Header"
import axios from "axios"
import React, { useState, useEffect } from 'react'

function App() {

  const [firstName, setFirstName] = useState("")
  
  useEffect(() => {
    axios.get("https://hackney-bookings-api.herokuapp.com/booking")
    .then(response_from_api => {
      console.log(response_from_api)
      console.log(response_from_api.data[0].firstName)
      setFirstName(response_from_api.data[0].firstName)
    })
    .catch(err => {
      console.log(err)
    })
  });
  
  return (
    <>
    <Header />
    <Accordion>
      {firstName}
    </Accordion>
    </>
  )
}

export default App
