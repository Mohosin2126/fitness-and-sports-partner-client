import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { useEffect } from "react";


const MySchedules = () => {

const {user}=useContext(AuthContext)

const url=`http://localhost:5000/bookings?email=${user.email}`

useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=>console.log(data))
},[])

    return (
        <div className="relative mt-28">
            hello there this is me 
        </div>
    );
};

export default MySchedules;