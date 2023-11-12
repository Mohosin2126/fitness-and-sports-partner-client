import { useLoaderData } from "react-router-dom";
import AllServices from "./AllServices";
import { useState } from "react";



const Services = () => {

const loadedServices=useLoaderData([])

const[services,setServices]=useState(loadedServices)

const [isShow, setIsShow] = useState(false);
const [searchText,setSearchText]=useState("")

const handleSearchButton=()=>{

  fetch(`https://fitness-and-sports-partner-server-8oww2jmsq.vercel.app/servicesbytext/${searchText}`)
  .then(res=>res.json())
.then(data=>setServices(data))

}





    return (
        <div className="relative mt-36 mb-10">
         <div>
            <div className="hero h-96 mt-5" style={{backgroundImage: 'url(https://i.ibb.co/Vq8xx53/slider1.jpg)'}}>
  <div className="hero-overlay bg-opacity-50"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-2xl font-bold text-center ">Everything You Want All Are Here !</h1>
      <div className="flex ">
      <input onBlur={(e)=>setSearchText(e.target.value)} type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs " />
      <button onClick={handleSearchButton} className="btn btn-neutral bg-red-500 ">Search</button>
      </div>
    </div>
  </div>
</div>
        </div>
        <div className="mt-10">
            <h1 className="text-2xl font-semibold font-serif text-center">Our Services</h1>
            <p className="text-center font-medium mt-2">Explore the most sought-after fitness and sports services tailored to your specific goals, all in one convenient place</p>
        </div>
        <div className="space-y-5 mt-8 mb-8">
          {
          isShow ?services.map(allservice=><AllServices allservice={allservice} key={allservice._id}></AllServices>):services.slice(0,6).map(allservice=><AllServices allservice={allservice} key={allservice._id}></AllServices>)
          }
        </div>
        {services.length >= 6 && !isShow && ( <button
                            className="btn btn-outline flex mx-auto btn-secondary btn-sm  "
                            onClick={() => setIsShow(true)}
                        >
                            More 
                        </button>
                    )}
        </div>
    );
};

export default Services;