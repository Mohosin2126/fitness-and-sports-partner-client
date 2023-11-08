import { useLoaderData, useParams } from "react-router-dom";


const SingleServiceDetails = () => {

const singleService=useLoaderData()
const {id}=useParams()
const idInt=parseInt(id)
   const services=singleService.find(service=>service.id===idInt)
   console.log(services)
  
    return (
        <div className="relative mt-36">
           <div>
      <div className="relative m-2">
        <img src={services.ServiceImage} className="w-full " alt="" /> 
        <div className="bg-black bg-opacity-80 text-white h-16 w-full absolute bottom-0 lg:bottom-0 lg:h-32"> 
          <button className="btn  ml-4 w-24 lg:w-36 mt-2 lg:mt-12" > 
            Price: {services.ServicePrice}
          </button>
        </div>
      </div>
      <h1 className="text-black text-2xl font-semibold mt-5">{services.ServiceName}</h1> 
      <h3 className="text-black text-base font-normal">{services.ServiceDescription}</h3> 
    </div>
        </div>
    );
};

export default SingleServiceDetails;