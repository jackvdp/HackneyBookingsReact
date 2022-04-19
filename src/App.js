import React from "react"
import "./styles/index.scss"
import Routing from "./routes/Routing";
import Main from "./components/Resuables/Main/Main";
import Footer from "./components/Resuables/Main/Footer";


function App() {
  return (
    <>
    <Main>
      <Routing />
    </Main>
    <Footer />
    </>
  )

}

export default App
