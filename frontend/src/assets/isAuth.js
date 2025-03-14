import { useState, useEffect } from "react";

const authFunc = () => {

    const data = window.sessionStorage.getItem('LOGIN')
    const [auth, setAuth] = useState(JSON.parse(data))

}
export default authFunc 