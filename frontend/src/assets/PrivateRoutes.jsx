import { Outlet, Navigate } from "react-router-dom";
import authFunc from "./isAuth";

const PrivateRoutes = () => {
    const isAuth = authFunc.auth

    return isAuth ? <Outlet /> : <Navigate to="/LogIn" />
}

export default PrivateRoutes
