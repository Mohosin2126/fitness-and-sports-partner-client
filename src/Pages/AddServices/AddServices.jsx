import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import swal from "sweetalert";


const AddServices = () => {
    const { user }=useContext(AuthContext)
    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const servicename = form.servicename.value;
        const serviceimage=form.serviceimage.value
        const username= form.username.value;
        const email =  user?.email;
        const price = form.price.value;
        const area=form.area.value
        const description= form.description.value;
      
      const service={servicename,serviceimage,username,email ,price,area,description}
      form.reset(" ")
  fetch('http://localhost:5000/addservices',{
method:"POST",
headers:{
    'content-type':"application/json"
},
body:JSON.stringify(service)
  })
  .then(res=>res.json())
  .then(data=>{
    if(data.insertedId){
        swal("Thank You !", "You Have Added a Service", "success");
    }
  })
 


       
      }
      

    return (
        <div className="mt-28 mb-10">

            <h1 className="text-center font-serif text-2xl my-10">Add a Service</h1>
           <form onSubmit={handleAddProduct} >

<div className="md:flex mb-8">
  <div className="form-control md:w-1/2">
      <label className="label">
          <span className="label-text">Service Name</span>
      </label>
      <label className="input-group">
          <input  type="text" name="servicename" placeholder="servicename" className="input input-bordered w-full" />
      </label>
  </div>
  <div className="form-control md:w-1/2 ml-4">
      <label className="label">
          <span className="label-text">Service Image</span>
      </label>
      <label className="input-group">
          <input type="text" name="serviceimage" placeholder="Service Image" className="input input-bordered w-full" />
      </label>
  </div>
</div>
{/* form supplier row */}
<div className="md:flex mb-8">
  <div className="form-control md:w-1/2">
      <label className="label">
          <span className="label-text">User Name</span>
      </label>
      <label className="input-group">
          <input type="text" name="username" placeholder="User Name" defaultValue={user?.displayName}  readOnly className="input input-bordered w-full" />
      </label>
  </div>
  <div className="form-control md:w-1/2 ml-4">
      <label className="label">
          <span className="label-text">User email</span>
      </label>
      <label className="input-group">
          <input  type="email" name="email" placeholder="User email" defaultValue={user?.email} readOnly className="input input-bordered w-full" />
      </label>
  </div>
</div>
{/* form category and details row */}
<div className="md:flex mb-8">
  <div className="form-control md:w-1/2">
      <label className="label">
          <span className="label-text">Price </span>
      </label>
      <label className="input-group">
          <input  type="text" required name="price" placeholder="Price" className="input input-bordered w-full" />
      </label>
  </div>
  <div className="form-control md:w-1/2 ml-4">
      <label className="label">
          <span className="label-text">Service Area</span>
      </label>
      <label className="input-group">
          <input  type="text" name="area" placeholder="Service Area"  className="input input-bordered w-full" />
      </label>
  </div>
</div>
{/* form Photo url row */}
<div className=" mb-8">
  <div className="form-control w-full">
      <label className="label">
          <span className="label-text">Description</span>
      </label>
      <label className="input-group">
          <input  type="text" required name="description" placeholder="Description" className="input input-bordered w-full" />
      </label>
  </div>
 
</div>
<input type="submit" value="Add Service" className="btn btn-block" />

</form>
        </div>
    );
};

export default AddServices;