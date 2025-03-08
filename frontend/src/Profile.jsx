import authFunc from "./assets/isAuth";
import { Link } from "react-router-dom";

export default function Profile() {
  const handleLogout = () => {
    authFunc.auth = false;
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="flex items-center space-x-6">
        <div className="w-[500px] h-[500px] rounded-full bg-gray-500" />
        <div className="h-[500px] w-px bg-gray-600" />
        <div className="flex flex-col space-y-4">
          <span className="text-6xl font-bold">RAYMOND CRUZ</span>
          <span className="text-2xl text-gray-300">rayray@gmail.com</span>
          <Link to="/" onClick={handleLogout}>
            <button className="bg-[#FFB100] text-black font-bold text-xl px-8 py-3 rounded-full hover:bg-orange-300 transition transform hover:scale-105 duration-300 shadow-lg">
              Log-out
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
