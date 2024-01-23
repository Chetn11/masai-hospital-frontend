import React from 'react'
import { useNavigate } from 'react-router';

function Dashboard() {
    const navigate=useNavigate();
  return (
    <div style={{display:"flex", justifyContent:"space-between"}}>
      <h1>Doctor Dashboard</h1>
      <button onClick={()=>navigate("/appointments")} className='btn' style={{width:"450px", margin:"auto",}}>Go to Appointment page</button>

    </div>
  )
}

export default Dashboard
