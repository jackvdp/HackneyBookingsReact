import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function SuccessContent() {

    const location = useLocation()

    const [booking, setBookingRef] = useState("")
    const [bookingLocation, setLocation] = useState("")
    const [time, setTime] = useState("")

    useEffect(() => {
        const booking = location.state.booking
        setBookingRef(booking)
        const timeString = getDate(booking.slot.startTime, booking.slot.endTime)
        setTime(timeString)
        console.log(booking)
        getLocation(booking.slot.locationId)
    })

    return(
        <div class="govuk-panel govuk-panel--confirmation lbh-panel">
            <h1 class="govuk-panel__title">Successfully created a booking.</h1>
            <div class="govuk-panel__body">Your booking:</div>
            <p>Ref: {booking.bookingReference}</p>
            <p>Name: {booking.firstName + " " + booking.lastName}</p>
            <p>Email: {booking.email}</p>
            <p>Location: {bookingLocation}</p>
            <p>Time: {time}</p>
        </div>
    )

    function getLocation(id) {
        axios.get("https://hackney-bookings-api.herokuapp.com/locations/" + id)
        .then(res => {
          console.log(res)
          setLocation(res.data.name)
        })
        .catch(err => {
          console.log(err)
        })
    }

    function getDate(start, end) {

        console.log(start);
        console.log(end);

        const startDate = new Date(start)
        const endDate = new Date(end)

        const startTime = startDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        const endTime = endDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

  
        return startTime + " – " + endTime
    }
}