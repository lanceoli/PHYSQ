import authFunc from "./assets/isAuth"
import { Link } from "react-router-dom"

export default function Profile() {
    return (
    <>
    <div className="p-6 text-center">Profile</div>

    <Link
          className="btn btn-circle bg-white text-black border-none hover:bg-gray-200"
          // to={ authFunc.auth ? "/Profile" : "/LogIn" }
          to='/'
        >
    <button onClick={authFunc.auth = false}> logout </button>
    </Link>

    </>
    )
  }