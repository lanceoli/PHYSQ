import { useState, useEffect } from "react";

const authFunc = () => {

    // const [auth, setAuth] = useState(false);
    const data = window.sessionStorage.getItem('LOGIN')
    const [auth, setAuth] = useState(JSON.parse(data))
    // if ( data !== null || data !== undefined) {
    //     const [auth, setAuth] = useState(JSON.parse(data));
    // }
    
}
export default authFunc 