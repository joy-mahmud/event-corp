import { useContext } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Login = () => {
    const authInfo = useContext(AuthContext)
    const location = useLocation()
   
    const navigate = useNavigate()
    const {signInUser,signInWithGoogle} = authInfo;

    const handlSubmit=(e)=>{
        e.preventDefault();
        const password = e.target.password.value;
        const email = e.target.email.value;
    
        signInUser(email,password)
        .then(() =>{
          
            e.target.reset()
            toast("you logged in successfully")
            setTimeout(function() {
                navigate(location?.state?location.state:"/")
              }, 2000);
           

        })
        .catch(error =>{
            toast("invalid email or password! please enter correct one")
        })


    }
   
    const handleGoogleSignIn =()=>{
        signInWithGoogle()
        .then(result=>{
            toast("you logged in successfully")
            setTimeout(function() {
                navigate(location?.state?location.state:"/")
              }, 2000);
        })
        .catch(()=>toast("something goes wrong!"))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Signin now!</h1>
                   
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handlSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            <ToastContainer />
                        </div>
                        <label className="label">
                        <Link to={'/register'}><p href="#" className="label-text-alt link link-hover text-[16px] mt-2">Don't have an account? please register</p></Link>
                            </label>
                            <button onClick={handleGoogleSignIn} className="btn text-red-500">Sign in with google</button>    
                    </form>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Login;