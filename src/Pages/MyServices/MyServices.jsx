import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";


const MyServices = () => {

const loadedservices=useLoaderData()
const [services,setServices]=useState(loadedservices)


    return (
        <div className="relative mt-28">
        
        <div  className='grid md:grid-cols-2  gap-4'>
        {
          services.map(service=><ServiceCard
            key={service._id}
            service={service}
            ></ServiceCard>)
        }
        </div>
      </div>
   
      
    );
};

export default MyServices;