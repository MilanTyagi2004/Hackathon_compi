import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

function Navbar({ isLoggedIn, handleLogout }) {
  return (
    <nav className="bg-blue-600 text-white px-6 py-3 shadow flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold tracking-wide">
        <span className="text-yellow-300">Ed</span>Tech <span className="text-yellow-300">AI</span>
      </Link>
      <div className="flex items-center gap-5">
        {isLoggedIn ? (
          <>
            <Link to="/dashboard" className="hover:underline">Dashboard</Link>
            <button
              onClick={handleLogout}
              className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-200"
            >
              Logout
            </button>
            <FaUserCircle size={28} />
          </>
        ) : (
          <>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/signup" className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-200">
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
