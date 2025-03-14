import { Outlet, Navigate } from "react-router-dom";
import authFunc from "./isAuth";

const PrivateRoutes = () => {

    const isAuth = authFunc.auth ? authFunc.auth : window.sessionStorage.getItem('LOGIN')
    console.log("PrivateRoutes.jsx", isAuth)

    return isAuth ? <Outlet /> : <Navigate to="/LogIn" />
}

export default PrivateRoutes
