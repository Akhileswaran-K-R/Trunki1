import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert(errorData.detail || "Login failed");
        return;
      }

      const data = await res.json();
      localStorage.setItem("teacher_token", data.access_token);
      navigate("/teacherDashboard");
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-600 px-6">
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center text-pink-600 mb-2">
          Teacher Login
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Only teachers need to sign in
        </p>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          <input
            type="email"
            placeholder="Teacher Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            className="px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 disabled:opacity-60"
            required
          />

          {/* Password with toggle */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              className="w-full px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 disabled:opacity-60"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              disabled={loading}
              className="absolute right-4 top-3.5 text-gray-500 disabled:opacity-60"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="bg-yellow-400 hover:bg-yellow-500 disabled:opacity-60 disabled:cursor-not-allowed
                       text-gray-800 font-bold py-4 rounded-full text-xl shadow-lg transition transform hover:scale-105"
          >
            {loading ? "Logging in..." : "Login as Teacher"}
          </button>

          {/* Spinner */}
          {loading && (
            <div className="flex justify-center">
              <div className="w-6 h-6 border-4 border-pink-500 border-t-transparent rounded-full animate-spin" />
            </div>
          )}
        </form>

        {/* Divider */}
        <div className="flex items-center my-8">
          <div className="flex-grow h-px bg-gray-300" />
          <span className="px-4 text-gray-400 text-sm">OR</span>
          <div className="flex-grow h-px bg-gray-300" />
        </div>

        {/* Student Entry */}
        <button
          onClick={() => navigate("/student")}
          disabled={loading}
          className="w-full bg-pink-600 hover:bg-pink-700 disabled:opacity-60
                     text-white font-bold py-4 rounded-full text-xl shadow-lg transition transform hover:scale-105"
        >
          Continue as Student
        </button>

        <p className="text-center text-gray-500 mt-6">
          New teacher?{" "}
          <span
            onClick={() => !loading && navigate("/signup")}
            className="text-pink-600 font-bold cursor-pointer hover:underline"
          >
            Create an account
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
