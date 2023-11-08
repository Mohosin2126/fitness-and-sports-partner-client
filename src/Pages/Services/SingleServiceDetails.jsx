import { useLoaderData } from "react-router-dom";

const SingleServiceDetails = () => {
 const services=useLoaderData([])


const handlePurchaseProduct = e => {
  e.preventDefault();

  const form = e.target;
  const servicename = form.servicename.value;
  const serviceprovideremail= form.serviceprovideremail.value;
  const serviceimage=form.serviceimage.value
  const useremail = form.useremail.value;
  const servicetakingdate = form.servicetakingdate.value;
  const price = form.price.value;
  const specialinstruction = form.specialinstruction.value;
  
  const services={servicename,serviceprovideremail,serviceimage,useremail,servicetakingdate ,price,specialinstruction}
console.log(services)
 
  
  
}


  return (
    <div className="relative mt-36">
      <div>
        <div className="relative m-2">
          
              <img src={services.ServiceImage} className="w-full" alt="" />
              <div className="bg-black bg-opacity-80 text-white h-16 w-full absolute bottom-0 lg:bottom-0 lg:h-32">
              <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>Book Now</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <form onSubmit={handlePurchaseProduct} >
            
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
                        <input type="text" name="serviceprovideremail" placeholder="Service Provider email" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">User email</span>
                    </label>
                    <label className="input-group">
                        <input  type="text" name="useremail" placeholder="User email" className="input input-bordered w-full" />
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
                        <input  type="date" name="servicetakingdate" placeholder="Service Taking Date" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <label className="input-group">
                        <input  type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
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
                        <input  type="text" name="specialinstruction" placeholder="Special instruction" className="input input-bordered w-full" />
                    </label>
                </div>
                
            </div>
            <input type="submit" value="Purchase" className="btn btn-block" />

        </form>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        {/* <button className="btn">Close</button> */}
      </form>
    </div>
  </div>
</dialog>
              </div>
              <h1 className="text-black text-2xl font-semibold mt-5">
                {services.ServiceName}
              </h1>
              <h3 className="text-black text-base font-normal">
                {services.ServiceDescription}
              </h3>
          
         
        </div>
      </div>
    </div>
  );
};

export default SingleServiceDetails;
