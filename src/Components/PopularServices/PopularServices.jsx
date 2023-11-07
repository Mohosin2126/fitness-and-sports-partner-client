import { useEffect } from "react";
import { useState } from "react";
import Service from "../../Pages/Services/Service";

const PopularServices = () => {
    const [services,setServices]=useState([])
useEffect(()=>{
    fetch("../../../public/data.json")
    .then(res=>res.json())
    .then(data=>setServices(data))
},[])
    return (
        <div className="mt-12">
            <h1 className="text-2xl font-semibold font-serif text-center">Popular Services</h1>
            <p className="text-center font-medium mt-2">Explore the most sought-after fitness and sports services tailored to your specific goals, all in one convenient place</p>
        
        <div>
            {
                services.slice(2).map(service=><Service service={service} key={service.id}></Service>)
            }
        </div>
        </div>
    );
};

export default PopularServices;