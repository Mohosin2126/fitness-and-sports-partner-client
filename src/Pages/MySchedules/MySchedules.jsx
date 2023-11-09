import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { useEffect } from "react";
import { useState } from "react";


const MySchedules = () => {

const {user}=useContext(AuthContext)
const [bookings,setBookings]=useState([])

const url=`http://localhost:5000/bookings?email=${user.email}`
useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=>setBookings(data))
},[url])

    return (
        <div className="relative mt-28">
       <h1>{bookings.length}</h1>
        </div>
    );
};

export default MySchedules;