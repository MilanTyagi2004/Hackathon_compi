import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Email and Password are required!");
      return;
    }

    try {
      if (email === "test@user.com" && password === "password") {
        navigate("/dashboard");
      } else {
        setError("Invalid email or password");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-sky-100 to-indigo-100 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="backdrop-blur-xl bg-white/30 shadow-2xl border border-white/20 rounded-3xl p-10 max-w-md w-full"
      >
        <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-8">Welcome Back 👋</h2>

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-red-100 border border-red-300 text-red-700 text-sm px-4 py-2 rounded-md mb-4 text-center"
          >
            {error}
          </motion.div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-3.5 text-blue-500" />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/70 border border-blue-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-4 top-3.5 text-blue-500" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/70 border border-blue-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold hover:from-blue-700 hover:to-blue-600 transition-all duration-200 shadow-md"
          >
            Login
          </motion.button>
        </form>

        <div className="text-center text-sm text-gray-700 mt-6">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-blue-600 font-medium cursor-pointer hover:underline"
          >
            Signup
          </span>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;
