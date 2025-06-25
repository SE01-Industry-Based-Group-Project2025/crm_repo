import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false); // 👈

  const navigate = useNavigate();

  const handleLogin = async (e) => {
  e.preventDefault();

  if (email === "admin1@gmail.com" && password === "admin01") {
    // Redirect to backend-served Thymeleaf home.html
    window.location.href = "http://localhost:8083/";
    return;
  }

  try {
    const response = await fetch("http://localhost:8083/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.text();
    const trimmedData = data.trim().toLowerCase();
    setMessage(data);

    if (trimmedData === "login successful") {
      setTimeout(() => navigate('/profile'), 1500);
    }

  } catch (error) {
    setMessage("Login failed.");
  }
};


  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 bg-cover bg-center relative" style={{ backgroundImage: "url('/new home.jpg')" }}>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="w-1/2 flex justify-center items-center bg-lime-950">
        <form onSubmit={handleLogin} className="bg-white/30 backdrop-blur-md border border-white/20 shadow-2xl p-8 rounded-2xl w-96 space-y-4">
          <h2 className="text-3xl font-extrabold text-center text-lime-600">Welcome</h2>

          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400 transition" required />

          <input type={showPassword ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400 transition" required />

          {/* Show Password Toggle */}
          <div className="text-sm text-gray-200 flex items-center">
            <input type="checkbox" id="showPassword" checked={showPassword} onChange={() => setShowPassword(!showPassword)} className="mr-2" />
            <label htmlFor="showPassword">Show Password</label>
          </div>

          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 hover:scale-105 transition duration-200 ease-in-out">
            Login
          </button>
    
          <p className="text-center text-sm text-gray-950">
            Don't have an account
            <span className="inline-block px-1 text-blue-500 hover:underline">
              <a href='/signup'>Sign Up</a>
            </span>
            now
          </p>

          {message && <p className="text-center text-red-600">{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default Login;
