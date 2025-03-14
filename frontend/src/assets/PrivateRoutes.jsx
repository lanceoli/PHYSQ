import { Outlet, Navigate } from "react-router-dom";
import authFunc from "./isAuth";

const PrivateRoutes = () => {

    const isAuth = window.sessionStorage.getItem('LOGIN')
    console.log("PrivateRoutes.jsx", isAuth)

    console.log('session:', window.sessionStorage.getItem('LOGIN'))

    if(isAuth == 'true'){
        return <Outlet />
    }
    if(isAuth == 'false'){
        return <Navigate to="/LogIn" />
    }

}

export default PrivateRoutes
