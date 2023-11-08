import { useEffect } from "react";
import { useState } from "react";
import Service from "../../Pages/Services/Service";
import { Link } from "react-router-dom";

const PopularServices = () => {
    const [services,setServices]=useState([])
useEffect(()=>{
    fetch("http://localhost:5000/services")
    .then(res=>res.json())
    .then(data=>setServices(data))
},[])
    return (
        <div className="mt-12">
            <h1 className="text-2xl font-semibold font-serif text-center">Popular Services</h1>
            <p className="text-center font-medium mt-2">Explore the most sought-after fitness and sports services tailored to your specific goals, all in one convenient place</p>
        
        <div className="grid grid-cols-2 gap-5 mt-10">
            {
                services.slice(7).map(service=><Service service={service} key={service.id}></Service>)
            }
        </div>
        <div>
            <Link to={"/services"}> <button className="btn btn-outline btn-secondary flex mx-auto mt-5 btn-sm">Show All </button></Link>
        
        </div>
        </div>
    );
};

export default PopularServices;