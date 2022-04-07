import Accordion from "./components/Accordion"
import Header from "./components/Header"
import Home from "./components/Home"
import Main from "./components/Main"

function App() {
  return (
    <>
      <Header />
      <Main>
        <Home />
        <Accordion>
          {/* {name} */}
        </Accordion>
      </Main>
    </>
  )

}

export default App
