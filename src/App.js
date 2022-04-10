import Accordion from "./components/Accordion"
import Home from "./components/Home"
import Main from "./components/Main"
import BookingButton from "./components/BookingButton"
import AmendButton from "./components/AmendButton"

function App() {
  return (
    <>
      <Main>
        <Home />
        <BookingButton />
        <AmendButton />
      </Main>
    </>
  )

}

export default App
