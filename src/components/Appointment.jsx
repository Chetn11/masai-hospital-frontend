import React from 'react'
import "../styles/Appointment.css"
import { useNavigate } from 'react-router'
function Appointment() {
    const navigate=useNavigate();
  return (
    <div>
      <h1>Appointment</h1>
      <div id='appointment'>
      <form className='Form'>
      <span>Full Name</span>
        <input type='text' placeholder='Enter Your Name'/>
        <span>Image Url</span>
        <input type='text' placeholder='Image Url'/>
        <span>Specialization</span>
        <input type='text' placeholder='Enter Your Specialization'/>
        <span>Experience</span>
        <input type='text' placeholder='Enter Your Experience'/>
        <span>Location</span>
        <input type='text' placeholder='Enter Your Location'/>
        <span>Date</span>
        <input type='date'/>
        <span>Numbers of Slots</span>
        <input type='text' placeholder='Enter no of Slots'/>
        <span>Fees</span>
        <input type='text' placeholder='Enter Your Fees'/>
        <input type='submit' className='btn'/>
        <button onClick={()=>navigate("/dashboard")}>Go to Doctor Dashboard</button>
      </form>
      </div>
    </div>
  )
}

export default Appointment
