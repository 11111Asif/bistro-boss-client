import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({childern}) => {
    const {user, loading} = useContext(AuthContext)
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user) {
        return childern;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;