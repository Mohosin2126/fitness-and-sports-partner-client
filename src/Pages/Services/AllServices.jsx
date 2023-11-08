import { Link } from "react-router-dom";


const AllServices = ({allservice}) => {
    const{_id,ServiceName,ServiceDescription,ServiceProvider,ServicePrice,ServiceArea,ServiceImage}=allservice
    return (
        <div>
             <div className=" flex flex-col h-60 lg:flex-row">
    <img src={ServiceImage} className="w-72 h-60 shadow-2xl rounded-lg" />
    <div className=" bg-slate-800">
      <h1 className="text-xl  font-bold font-serif ml-4">{ServiceName}</h1>
      <div className="flex items-center ml-4 mt-3 gap-4 ">
      <img className="h-10 rounded-xl" src={ServiceProvider.Image}
       alt="" />
       <p className="font-serif ">{ServiceProvider.Name}</p>
    </div>
      <p className="py-6 ml-4">{ServiceDescription}</p>
      <p className="ml-4">{ServicePrice}</p>
     <Link to={`/services/${_id}`}> <button className="btn btn-outline btn-secondary btn-sm ml-4 ">View Detail</button></Link>
    </div>
  
  </div>
  
        </div>
    );
};

export default AllServices;