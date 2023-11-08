import { Link } from "react-router-dom";


const Service = ({service}) => {
   const{_id,Category,ServiceName,ServiceDescription,ServiceProvider,ServicePrice,ServiceArea,ServiceImage}=service
console.log(service)
    return (
        <div >
            <div className="relative flex w-full h-96 flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
    <img
      src={ServiceImage}
      alt="image"
      className="object-cover w-full h-full"
    />
  </div>
  <div className="p-6">
    <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
     {ServiceName}
    </h6>
   
    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
      {ServiceDescription}
    </p>
    <h4 className="block mb-2 font-sans  antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
     {ServicePrice}
    </h4>
 <div>
   <img src="" alt="" />
   <p>{ServiceProvider.Name}</p>
 </div>


 <Link to={`/services/${_id}`}> <button
        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        View Detail
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          aria-hidden="true"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path>
        </svg>
      </button></Link>
      
    
  </div>
</div>
        </div>
    );
};

export default Service;