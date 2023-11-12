import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { useEffect } from "react";
import { useState } from "react";
import MyBookings from "./MyBookings";


const MySchedules = () => {

const {user}=useContext(AuthContext)
const [bookings,setBookings]=useState([])
console.log(bookings)

const url=`http://localhost:5000/bookings?email=${user.email}`
useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=>setBookings(data))
},[url])

    return (
        <div className="relative mt-28 mb-10">
     <h1 className="text-center font-serif text-3xl mt-5">My Bookings</h1>
     <div className="flex w-40 mx-auto mt-3">
                <h1 className="border  w-14"></h1>
                <h1 className="border w-16 border-red-500"></h1>
                <h1 className="border  w-14"></h1>
            </div>

<div className="grid md:grid-cols-3 gap-5 mt-14">
    
{
        bookings.map(booking=><MyBookings booking={booking} key={booking._id}></MyBookings>)
    }

</div>

        </div>
    );
};

export default MySchedules;