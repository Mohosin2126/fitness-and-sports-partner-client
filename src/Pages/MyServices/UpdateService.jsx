
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useContext } from "react";

const UpdateService = () => {
  const loadedService = useLoaderData();
  const { _id, servicename, serviceimage, username, email, price, area, description } =
    loadedService;

  const { user } = useContext(AuthContext);
  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedService = {
      servicename: form.servicename.value,
      serviceimage: form.serviceimage.value,
      price: form.price.value,
      area: form.area.value,
      description: form.description.value,
    };
    form.reset();

    console.log(updatedService);

    fetch(`http://localhost:5000/addservices/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedService),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Service Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="mt-28 mb-10">
      <h1 className="text-center font-serif text-2xl">Update {servicename}</h1>
      <form onSubmit={handleUpdateProduct}>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Service Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="servicename"
                placeholder="servicename"
                defaultValue={servicename}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Service Image</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="serviceimage"
                placeholder="Service Image"
                defaultValue={serviceimage}
                className="input input-bordered w-full"
              />
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
              <input
                type="text"
                name="username"
                placeholder="User Name"
                defaultValue={user?.displayName}
                readOnly
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">User email</span>
            </label>
            <label className="input-group">
              <input
                type="email"
                name="email"
                placeholder="User email"
                defaultValue={user?.email}
                readOnly
                className="input input-bordered w-full"
              />
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
              <input
                type="text"
                required
                name="price"
                placeholder="Price"
                defaultValue={price}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Service Area</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="area"
                placeholder="Service Area"
                defaultValue={area}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form Photo url row */}
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                required
                name="description"
                defaultValue={description}
                placeholder="Description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Update Service" className="btn btn-block" />
      </form>
    </div>
  );
};

export default UpdateService;
