import { useContext } from "react";

import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";


const SignUp = () => {
   const { createUser }=useContext(AuthContext)

   const handleSignUp=e=>{
    e.preventDefault()
   const form=e.target 
   const name=form.name.value 
   const email=form.email.value 
   const password =form.password.value 
   const photourl=form.PhotoURL.value
   console.log(name,email,password,photourl)

   createUser(email, password)
   .then(result => {
     console.log(result.user)
   })
   .catch(error => console.log(error))


   }

    
    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content flex-col mt-28 lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src="https://i.ibb.co/nk04681/360-F-122719641-V0yw2c-AOrfxs-ON3-He-Wi2-Sf4i-Vxhv27-QO.jpg" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Sign Up</h1>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' required placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='PhotoURL' required placeholder="PhotoURL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>Already Have an Account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;