

const AddServices = () => {

    const handleAddProduct = e => {
        e.preventDefault();
      
        const form = e.target;
        const servicename = form.servicename.value;
        const serviceprovideremail= form.serviceprovideremail.value;
        const serviceimage=form.serviceimage.value
        const email = form.email.value;
        const date = form.date.value;
        const price = form.price.value;
        const specialinstruction = form.specialinstruction.value;
        
        const booking={servicename,serviceprovideremail,serviceimage,email,date ,price,specialinstruction,service_id:_id}
      console.log(booking)
       
        
        
      }
      



    return (
        <div className="mt-28">
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
          <span className="label-text">Service Provider email</span>
      </label>
      <label className="input-group">
          <input type="text" name="serviceprovideremail" placeholder="Service Provider email"  className="input input-bordered w-full" />
      </label>
  </div>
  <div className="form-control md:w-1/2 ml-4">
      <label className="label">
          <span className="label-text">User email</span>
      </label>
      <label className="input-group">
          <input  type="text" name="useremail" placeholder="User email"  className="input input-bordered w-full" />
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
          <input  type="text" name="price" placeholder="Price"  className="input input-bordered w-full" />
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
        </div>
    );
};

export default AddServices;