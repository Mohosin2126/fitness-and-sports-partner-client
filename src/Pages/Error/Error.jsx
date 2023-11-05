import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="h-screen">
            <img src="https://i.ibb.co/c8rZ8BG/a3be7bf75029c1eb317746fa5bc021b3.jpg"  className=" flex mx-auto justify-center items-center mt-20" alt="" />
            <div className="flex mx-auto"> 
            <Link to="/" className="flex   mx-auto mt-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Go Back to Home
</Link>
            </div>
        </div>
    );
};

export default Error;