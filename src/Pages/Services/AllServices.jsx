

const AllServices = ({allservice}) => {
    const{id,Category,ServiceName,ServiceDescription,ServiceProvider,ServicePrice,ServiceArea,ServiceImage}=allservice
    return (
        <div>
             <div className=" flex flex-col h-56 lg:flex-row">
    <img src={ServiceImage} className="w-96 h-56 rounded-lg shadow-2xl" />
    <div className=" bg-slate-800">
      <h1 className="text-xl  font-bold font-serif ml-4">{ServiceName}</h1>
    <div className="flex ">
        {/* <img src={ServiceProvider.Name} alt="" /> */}
    <h4 className="text-red-400 ml-4">{ServiceProvider.Name}</h4>
    <h4 className="text-red-400 ml-4">{ServiceProvider.Name}</h4>
    </div>
      <p className="py-6 ml-4">{ServiceDescription}</p>
      <p className="ml-4">{ServicePrice}</p>
      <button className="btn btn-outline btn-secondary btn-sm ml-4 ">View Detail</button>
    </div>
  
  </div>
  
        </div>
    );
};

export default AllServices;