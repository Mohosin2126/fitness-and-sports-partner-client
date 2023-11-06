import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../Firebase/AuthProvider";
// import { useContext } from "react";

const Navbar = () => {

//   const { user, logOut } = useContext(AuthContext);
//   const handleSignOut = () => {
//     logOut()
//         .then()
//         .catch()
// }



    return (
 
        <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/addproduct"}>Add product</NavLink>
              <NavLink to={"/mycart"}>My Cart</NavLink>
              <NavLink to={"/login"}>Login</NavLink>
              
            
            </ul>
          </div>
          <img className=" w-20 border rounded-md" src="https://i.ibb.co/dfS2SmX/automotive-industry-neon-sign-24908-57005.jpg" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal  gap-10 px-1">
          <NavLink to={"/"} style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "red" : "black",
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }}>Home</NavLink>
              <NavLink to={"/addproduct"} style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "red" : "black",
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }}>Add product</NavLink>
              <NavLink to={"/mycart"} style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "red" : "black",
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }}>My Cart</NavLink>
              <NavLink to={"/login"} style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "red" : "black",
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }}>Login</NavLink>
   
  
          </ul>
        </div>
        <div className="dropdown dropdown-end ml-52">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          {/* <img src={user?.photoURL}
/> */}
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1]  shadow menu menu-sm dropdown-content bg-base-100 rounded-box ">
        <li>
          
        </li>
        <li><a> <p>{user?.email}</p></a></li>

        {
                    user ?
                        <button onClick={handleSignOut} className="btn">Sign Out</button>
                        :
                        <Link to="/login">
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
Login
</button>

                        </Link>
                }
      </ul>
    </div>
      </div>
    )
};

export default Navbar;