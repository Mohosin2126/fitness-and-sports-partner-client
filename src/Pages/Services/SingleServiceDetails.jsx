import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import swal from "sweetalert";

const SingleServiceDetails = () => {
 const services=useLoaderData()
 const{_id,Category,ServiceName,ServiceDescription,ServiceProvider,ServicePrice,ServiceArea,ServiceImage}=services
const {user}=useContext(AuthContext)

const handlePurchaseProduct = e => {
  e.preventDefault();

  const form = e.target;
  const servicename = form.servicename.value;
  const serviceprovideremail= user?.email;
  const serviceimage=form.serviceimage.value
  const email = user?.email;
  const date = form.date.value;
  const price = form.price.value;
  const specialinstruction = form.specialinstruction.value;
  
  const booking={servicename,serviceprovideremail,serviceimage,email,date ,price,specialinstruction,service_id:_id}

 
  fetch('https://fitness-and-sports-partner-server-8oww2jmsq.vercel.app/bookings',{
    method:'POST',
    headers:{
'content-type':'application/json'
    },
    body:JSON.stringify(booking)
  })
  .then(res=>res.json())
  .then(data=>{
    if(data.insertedId){
      swal("Thank you !", "You Booked the Service!", "success");
    }
  })
  
}


  return (
    <div className="relative mt-36 mb-10 ">
      <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={ServiceImage} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title font-serif font-bold text-xl">{ServiceName}</h2>
    <p>{ServiceDescription}</p>
    <div className="flex items-center  gap-4 ">
      <img className="h-10 rounded-xl" src={ServiceProvider.Image}
       alt="" />
       <p className="font-serif ">{ServiceProvider.Name}</p>
    </div>
    <p className="font-serif mt-4 "> Price: {ServicePrice}</p>

    
      <div className="mt-10">
      <div>
<button className="btn btn-outline btn-sm btn-secondary" onClick={()=>document.getElementById('my_modal_5').showModal()}>Book Now</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
<div className="modal-box">
<form onSubmit={handlePurchaseProduct} >

<div className="md:flex mb-8">
  <div className="form-control md:w-1/2">
      <label className="label">
          <span className="label-text">Service Name</span>
      </label>
      <label className="input-group">
          <input  type="text" name="servicename" placeholder="servicename" defaultValue={ServiceName}  readOnly className="input input-bordered w-full" />
      </label>
  </div>
  <div className="form-control md:w-1/2 ml-4">
      <label className="label">
          <span className="label-text">Service Image</span>
      </label>
      <label className="input-group">
          <input type="text" name="serviceimage" defaultValue={ServiceImage} readOnly placeholder="Service Image" className="input input-bordered w-full" />
      </label>
  </div>
</div>
{/* form supplier row */}
<div className="md:flex mb-8">
  <div className="form-control md:w-1/2">
      <label className="label">
          <span className="label-text">Service Provider email</span>
      </label>
      <label className="input-group">
          <input type="text" name="useremail" placeholder="Service Provider email" defaultValue={user?.email} readOnly className="input input-bordered w-full" />
      </label>
  </div>
  <div className="form-control md:w-1/2 ml-4">
      <label className="label">
          <span className="label-text">User email</span>
      </label>
      <label className="input-group">
          <input  type="text" name="useremail" placeholder="User email" defaultValue={user?.email} readOnly className="input input-bordered w-full" />
      </label>
  </div>
</div>
{/* form category and details row */}
<div className="md:flex mb-8">
  <div className="form-control md:w-1/2">
      <label className="label">
          <span className="label-text">Service Taking Date</span>
      </label>
      <label className="input-group">
          <input  type="date" required name="date" placeholder="Service Taking Date" className="input input-bordered w-full" />
      </label>
  </div>
  <div className="form-control md:w-1/2 ml-4">
      <label className="label">
          <span className="label-text">Price</span>
      </label>
      <label className="input-group">
          <input  type="text" name="price" placeholder="Price"  defaultValue={ServicePrice} readOnly className="input input-bordered w-full" />
      </label>
  </div>
</div>
{/* form Photo url row */}
<div className=" mb-8">
  <div className="form-control w-full">
      <label className="label">
          <span className="label-text">Special instruction</span>
      </label>
      <label className="input-group">
          <input  type="text" required name="specialinstruction" placeholder="Special instruction" className="input input-bordered w-full" />
      </label>
  </div>
  
</div>
<input type="submit" value="Purchase" className="btn btn-block" />

</form>
<div className="modal-action">
<form method="dialog">
{/* if there is a button in form, it will close the modal */}
<button className="btn btn-secondary">Close</button>
</form>
</div>
</div>
</dialog>
</div>
      </div>
    </div>
  </div>


</div>
    
  );
};

export default SingleServiceDetails;
