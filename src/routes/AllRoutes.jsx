import { Route, Routes } from "react-router";
import Login from "../components/Login";
import Appointment from "../components/Appointment";
import Dashboard from "../components/Dashboard";
const AllRoutes=()=>{
     
    return(
        <>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/appointments" element={<Appointment/>}></Route>
                <Route path="/dashboard" element={<Dashboard/>}></Route>
            </Routes>
        </>
    )
}
export default AllRoutes;