import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const isAuthRoute = location.pathname === "/login" || location.pathname === "/signup";
  return (
    <nav className="bg-neutral-700 border-b-4 border-black px-8 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Link
          to={user ? "/dashboard" : "/"}
          className="text-2xl font-extrabold text-black px-4 py-2 border-4 border-black rounded-lg bg-stone-400 hover:bg-black hover:text-stone-200 transition"
        >
        🗒️ JSR Notes
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        {isAuthRoute ? (
          <>
            <Link
              to="/login"
              className="font-bold text-black bg-stone-300 border-2 border-black rounded px-3 py-1 shadow-[2px_2px_0_0_#000] hover:bg-teal-200 transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="font-bold text-black bg-stone-300 border-2 border-black rounded px-3 py-1 shadow-[2px_2px_0_0_#000] hover:bg-teal-200 transition"
            >
              Signup
            </Link>
          </>
        ) : user ? (
          <>
            {/* <h3 className="font-mono text-black bg-white border-2 border-black rounded px-3 py-1">
              {user.email}
            </h3> */}
            <Link
              to="/dashboard"
              className="font-bold text-black bg-neutral-300 border-2 border-black rounded px-3 py-1 shadow-[2px_2px_0_0_#000] hover:bg-stone-400 transition"
            >
              Dashboard
            </Link>
            <Link
              to={user && user._id ? `/profile/${user._id}` : "#"}
              className="font-bold text-black bg-neutral-300 border-2 border-black rounded px-3 py-1 shadow-[2px_2px_0_0_#000] hover:bg-stone-400 transition"
            >
              Profile
            </Link>
            <Link
              onClick={logout}
              className="font-bold text-black bg-neutral-300 border-2 border-black rounded px-3 py-1 shadow-[2px_2px_0_0_#000] hover:bg-red-500 transition"
            >
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="font-bold text-black bg-stone-200 border-2 border-black rounded px-3 py-1 shadow-[2px_2px_0_0_#000] hover:bg-teal-200 transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="font-bold text-black bg-stone-200 border-2 border-black rounded px-3 py-1 shadow-[2px_2px_0_0_#000] hover:bg-teal-200 transition"
            >
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
