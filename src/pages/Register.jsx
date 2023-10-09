import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { getAuth, updateProfile } from "firebase/auth";




const Register = () => {

    const authInfo = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const { createUser } = authInfo

    const handlSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const name = e.target.name.value
        const checkUppercase = /[A-Z]/;
        const checkSpecialChar = /[\W_]/;
        const auth = getAuth();
        if (!checkUppercase.test(password)) {

            return toast("Password should have atkeast one uppercase letter")
        } else if (!checkSpecialChar.test(password)) {
            return toast("Password should have at least one special character")
        } else {
            createUser(email, password)
                .then(() => {
                    e.target.reset()
                    toast("you registered successfully")
                    
                    
                    updateProfile(auth.currentUser, {
                        displayName: name,
                    }).then(() => {
                        console.log("Profile updated successfully")
                    }).catch((error) => {
                        
                    });
                    setTimeout(function () {
                        navigate(location?.state ? location.state : "/")
                    }, 2000);

                })
                .catch(() => toast("password should be at least 6 characters"))
        }



    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Signup now!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handlSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your name" className="input input-bordered" />
                        </div>
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
                        <Link to={'/login'}><p href="#" className="label-text-alt link link-hover text-[16px] mt-2">Already have an account? please login</p></Link>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                            <ToastContainer></ToastContainer>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;