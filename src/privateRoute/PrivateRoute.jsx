import { useContext } from "react";

import { Navigate, useLocation, } from "react-router-dom";
import PropTypes from 'prop-types'; 
import { AuthContext } from "../components/AuthProvider";

const PrivateRoute = ({children}) => {
   const location = useLocation()

    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
         return children
    }else{
        return <Navigate state={location.pathname} to="/login"></Navigate>
    }
    
    
};
PrivateRoute.propTypes={
    children:PropTypes.node
}
export default PrivateRoute;