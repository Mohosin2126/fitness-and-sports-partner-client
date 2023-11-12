import { useState, useEffect } from "react";

import ServiceCard from "./ServiceCard";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const MyServices = () => {
  const { user } = useContext(AuthContext);
  const [services, setServices] = useState([]);

  useEffect(() => {
    const url = `https://fitness-and-sports-partner-server-8oww2jmsq.vercel.app/addservices?email=${user.email}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setServices(data));
  }, [user.email]);

  return (
    <div className="relative mt-28 mb-16">
      <div>
        {
          services.length>0 ?  <div className='grid md:grid-cols-2 gap-4'>
          {
            services.map(service => (
              <ServiceCard
                key={service._id}
                service={service}
                services={services}
                setServices={setServices}
              />
            ))
          }
        </div> :<h1 className="text-2xl font-serif text-center "> Please Add Your service First!! </h1>
        }
      </div>
     
    </div>
  );
};

export default MyServices;
