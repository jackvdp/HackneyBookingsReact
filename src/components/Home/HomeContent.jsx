import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import LHBButton from "../Resuables/LHBButton";

export default function HomeContent() {

  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios.get("https://hackney-bookings-api.herokuapp.com/categories")
      .then(res => {
        setCategory(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  return (
    <div>
      <header className='App-header'>
        <h1 className='App-title'>Book Hackney Facilities and Services</h1>
      </header>
      <h4>Welcome to the Hackney Council booking page. The current categories available for booking are as follows:</h4>
      {category.map(c => (
        <div key={c.categoryId}>
          <div>
            <h4><li>{c.name}</li></h4>
          </div>
        </div>
      ))}
      <Link to="/booking"><LHBButton >Create a Booking</ LHBButton></Link>
    <Link to="/amend"><LHBButton >Amend a Booking</ LHBButton></Link>
    </div>
  )
}