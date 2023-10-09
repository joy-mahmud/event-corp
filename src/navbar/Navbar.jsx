import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";

const Navbar = () => {
    const location = useLocation()
   
    const pathName = location.pathname
    const userinfo = useContext(AuthContext)
    const { user, logOut } = userinfo;

    

    const navLinks = <>
        <li className="text-[18px] font-medium"><Link to={'/'}>Home</Link></li>
        <li className="text-[18px] font-medium"><Link to={'/services'}>Services</Link></li>
        <li className="text-[18px] font-medium"><Link to={'/gallary'}>gallary</Link></li>
        <li className="text-[18px] font-medium"><Link to={'/blog'}>Blog</Link></li>
        <li  className="text-[18px] font-medium"><Link to={'/contact'}>Contact Us</Link></li>
       
    
        
    </>
    const handleSignOut = () => {
        logOut()
            .then(() => {
                console.log('user logged out successfully')
            })
            .catch(error => console.error(error))
    }


    return (
        <div className="navbar bg-base-100 container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <a className="font-semibold text-3xl">CorpEvent<span className="bg-red-500 rounded-lg px-2 text-white">Pro</span> </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                    
                        {user.displayName}<img className="w-7 ml-2 rounded-full" src={`${user.photoURL}`}></img>
                        <a onClick={handleSignOut} className="btn btn-sm ml-2">Log Out</a>
                    </> : <Link to="/login"><button className="btn btn-sm">Log in</button></Link>
                }

            </div>
        </div>
    );
};

export default Navbar;