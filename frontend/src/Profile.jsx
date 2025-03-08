import authFunc from "./assets/isAuth"

export default function Profile() {
    return (
    <>
    <div className="p-6 text-center">Profile</div>

    <button onClick={authFunc.auth = false}> logout </button>
    
    </>
    )
  }