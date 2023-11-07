import { useLoaderData } from "react-router-dom";



const Services = () => {

const services=useLoaderData([])

    return (
        <div className="relative mt-36">
         <div>
            <div className="hero h-96 mt-5" style={{backgroundImage: 'url(https://i.ibb.co/Vq8xx53/slider1.jpg)'}}>
  <div className="hero-overlay bg-opacity-50"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-2xl font-bold text-center ">I Grow By Helping People In Need</h1>
      <div className="flex ">
      <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs " />
      <button className="btn btn-neutral bg-red-500 ">Search</button>
      </div>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Services;