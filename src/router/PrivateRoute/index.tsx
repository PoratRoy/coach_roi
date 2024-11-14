import { useAuthContext } from "../../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import router from "../path.json";

const PrivateRoute = () => {
    const { currentUser, userLoggedin } = useAuthContext();
    return userLoggedin && currentUser ? <Outlet /> : <Navigate to={router.login} />;
};

export default PrivateRoute;
