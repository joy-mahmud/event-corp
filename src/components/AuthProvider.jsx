import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword, signOut, } from "firebase/auth";
import PropTypes from 'prop-types'; 
import auth from "../firebase/firebase.config";


//creating context api
export const AuthContext = createContext(null)

const Googleprovider = new GoogleAuthProvider();



const AuthProvider = ({children}) => {
    
   const [user,setUser] = useState(null)
   const [loading,setLoading] = useState(true)
   const [servicedata, setServiceData] = useState([])
  
   
   const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
   }

   const signInUser = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
   }

   const signInWithGoogle = ()=>{
    if(!user){
        return signInWithPopup(auth, Googleprovider)
    }
    
   }

   const logOut = ()=>{
    setLoading(true)
     return signOut(auth)
   }
   useEffect(()=>{
    fetch("../../public/services.json")
            .then(res => res.json())
            .then(data => setServiceData(data))
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            console.log('current value of the current user',currentUser)
            setUser(currentUser)
            setLoading(false)

        })
        
        return ()=>{
            unSubscribe();
        }
   },[])

   const authInfo = {user,createUser,signInUser,logOut,loading,signInWithGoogle,servicedata}

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};
AuthProvider.propTypes={
    children:PropTypes.node
}
export default AuthProvider;