import { Link } from "react-router-dom";


const ServiceCard = ({service}) => {
    console.log(service)
    const { _id, servicename,serviceimage,username,email ,price,area,description } = service;



    return (
        <div className="card card-side bg-base-100 shadow-xl">
        <figure><img src={serviceimage}  className="h-56 w-96" alt="Movie" /></figure>
        <div className="flex justify-between ml-16 w-full ">
         <div>
                <h2 className="card-title">Name: {servicename}</h2>
                <p>{price}</p>
                <p>{area}</p>
                <p>{description}</p>
            </div>
            <div className="card-actions justify-end">
                <div className="btn-group btn-group-vertical space-y-4">
                    <button className="btn">View</button>
                    <Link >
                    <button className="btn">Edit</button>
                    </Link>
                    <button className="btn bg-orange-500">X</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ServiceCard;