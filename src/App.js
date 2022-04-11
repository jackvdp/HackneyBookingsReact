import Accordion from "./components/Accordion/Accordion"
import Home from "./components/Home/Home"
import Main from "./components/Main"
import BookingButton from "./components/BookingButton/BookingButton"
import AmendButton from "./components/AmendButton/AmendButton"
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Main>
        <Home />
        <Link to="/booking"><BookingButton /></Link>
        <AmendButton />
      </Main>
    </>
  )

}

export default App
