import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const ServiceCard = ({service,services,setServices}) => {
    const { _id, servicename,serviceimage,price,area,description } = service;

    const handleDelete = _id => {
    
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
        .then((result) => {
            if (result.isConfirmed){
              



fetch(`https://fitness-and-sports-partner-server-8oww2jmsq.vercel.app/addservices/${_id}`,{
    method: 'DELETE'
})
.then(res=>res.json())
.then(data=>{
    if(data.deletedCount>0){
        Swal.fire(
            'Deleted!',
            'Your Service has been deleted.',
            'success'
        )
        const remaining =services.filter(ser=> ser._id !== _id)
        setServices(remaining)
    }
})

            }
        
        })


              

            
        }
    

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
                    <Link to={`/updateservice/${_id}`}>
                    <button className="btn">Edit</button>
                    </Link>
                    <button onClick={()=>handleDelete(_id)} className="btn btn-warning">X</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ServiceCard;