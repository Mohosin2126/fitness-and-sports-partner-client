

const AllServices = ({allservice}) => {
    const{id,Category,ServiceName,ServiceDescription,ServiceProvider,ServicePrice,ServiceArea,ServiceImage}=allservice
    return (
        <div>
             <div className=" flex flex-col h-56 lg:flex-row">
    <img src={ServiceImage} className="w-96 h-56 rounded-lg shadow-2xl" />
    <div className=" bg-slate-800">
      <h1 className="text-xl  font-bold font-serif ml-4">{ServiceName}</h1>
      <h4 className="text-red-400 ml-4">Body Builder</h4>
      <p className="py-6 ml-4">{ServiceDescription}</p>

    </div>
  </div>
        </div>
    );
};

export default AllServices;