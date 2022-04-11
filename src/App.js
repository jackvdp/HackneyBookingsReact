import Accordion from "./components/Accordion/Accordion"
import Home from "./components/Home/Home"
import Main from "./components/Main"
import BookingButton from "./components/BookingButton/BookingButton"
import AmendButton from "./components/AmendButton/AmendButton"

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
