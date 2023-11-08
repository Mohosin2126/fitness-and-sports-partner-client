import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const ServiceCard = ({service}) => {
    const { _id, servicename,serviceimage,username,email ,price,area,description } = service;

    const handleDelete = _id => {
        console.log(_id);
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
                console.log("delete confirm ")



fetch(`http://localhost:5000/addservices/${_id}`,{
    method: 'DELETE'
})
.then(res=>res.json())
.then(data=>{
    console.log(data)
    if(data.deletedCount>0){
        Swal.fire(
            'Deleted!',
            'Your Service has been deleted.',
            'success'
        )
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
                    <Link >
                    <button className="btn">Edit</button>
                    </Link>
                    <button onClick={()=>handleDelete(_id)} className="btn bg-orange-500">X</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ServiceCard;