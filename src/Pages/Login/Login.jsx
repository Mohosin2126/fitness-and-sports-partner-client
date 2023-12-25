import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";


const Login = () => {
    const {signIn , googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
  
    const handleGoogle=()=>{
        googleSignIn()
        .then(result=>{
        console.log(result)
            navigate(location?.state? location.state:"/")
        })
      } 
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

    
        signIn(email, password)
        .then(result=>{
            console.log(result)
            navigate(location?.state? location.state:"/")
        })
        .catch(error=>{
            console.log(error.message)
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12 mt-20 ">
                    <img src="https://i.ibb.co/pKPY1CD/3293465.jpg" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-outline btn-secondary btn-md ml-4" type="submit" value="Login" />
                            </div>
                        </form>
                        <div className="form-control mt-6">
                        <button type="button" className="text-white btn btn-outline  btn-md ml-4 font-semibold  text-center text-xl bg-[#2f5137] hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 rounded-lg  inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
<svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
<path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd"/>
</svg>
Sign in with Google
</button>
                     {/* <button  
                     onClick={ handleGoogle} 
                      className="btn btn-primary">Google Login</button> */}
                 </div>
                        <p className='my-4 text-center'>New to Fitness and Sports  <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;