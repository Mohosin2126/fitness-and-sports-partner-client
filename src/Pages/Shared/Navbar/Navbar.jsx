import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(() =>{})
        .catch( error => console.log(error))
    }


    const navItems = <>

<li>
<NavLink
  to="/"
  style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "red" : "red",
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }}
>
Home
</NavLink>
</li>
<li>
<NavLink
  to="/services"
  style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "red" : "red",
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }}
>
Services
</NavLink>
</li>






        {/* <li><Link to="/">Home</Link> </li>
        <li> <Link to="/services">Services</Link> </li> */}
        { user?.email ?  <>
            <li tabIndex={0}>
        <details>
          <summary>Dashboard</summary>
          <ul className="p-2">
          <li>
<NavLink
  to={"/myschedules"}
  style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "red" : "red",
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }}
>
My Schedules
</NavLink>
</li>

<li>
<NavLink
  to={"/addservices"}
  style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "red" : "red",
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }}
>
Add a Service
</NavLink>
</li>
<li>
<NavLink
 to={"/myservices"}
  style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "red" : "red",
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }}
>
My Service
</NavLink>
</li>
          {/* <li><Link to={"/myschedules"}>My Schedules</Link></li>
            <li><Link to={"/addservices"}>Add a Service</Link></li>
            <li><Link to={"/myservices"}>My Service</Link></li> */}
        
         </ul>
        </details>
      </li>
           
            <li><button onClick={handleLogOut}>Log out</button></li>
        </> 
         : <li> <NavLink
to="/login"
  style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "red" : "red",
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }}
>
Login
</NavLink>
</li>
       }
    </>

    return (
        <div className="navbar space-x-96 h-28 mb-4">
            <div >
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img className="h-14 w-20 border rounded-md " src="https://i.ibb.co/tKVcqLv/0e783e2aee4a11fe95bed070fbb93e30.jpg" alt="" />
                </Link>
            </div>
            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div >
            <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
            </div>
        </div>
    );
};

export default Navbar;
