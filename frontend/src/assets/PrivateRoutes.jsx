import { Outlet, Navigate } from "react-router-dom";
import authFunc from "./isAuth";

const PrivateRoutes = () => {

    // const isAuth = authFunc.auth ? authFunc.auth : window.sessionStorage.getItem('LOGIN')
    const isAuth = window.sessionStorage.getItem('LOGIN')
    console.log("PrivateRoutes.jsx", isAuth)

    console.log('session:', window.sessionStorage.getItem('LOGIN'))

    // if(window.sessionStorage.getItem('LOGIN')==true){
    if(isAuth == 'true'){
        console.log('womp')
        return <Outlet />
    }
    if(isAuth == 'false'){
        console.log('boohoo')
        return <Navigate to="/LogIn" />
    }

    // return window.sessionStorage.getItem('LOGIN') ? <Outlet /> : <Navigate to="/LogIn" />
}

export default PrivateRoutes
