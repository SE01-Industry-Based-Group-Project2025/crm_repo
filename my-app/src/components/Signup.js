import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const [plan, setPlan] = useState(''); // Plan state
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
  const response = await fetch("http://localhost:8081/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: fName,
          lastName: lName,
          email,
          password,
          role,
          plan // Send plan to backend
        }),
      });

      const data = await response.text();
      setMessage(data);

      if (data === "User registered successfully") {
        // Save user info in localStorage
        localStorage.setItem('userName', fName + ' ' + lName);
        localStorage.setItem('userRole', role);
        // Redirect to dashboard based on role
        if (role === 'TEACHER') {
          setTimeout(() => navigate('/teacher-dashboard-pro'), 1000);
        } else if (role === 'BUSINESSMAN') {
          setTimeout(() => navigate('/professional-dashboard'), 1000);
        } else {
          setTimeout(() => navigate('/profile'), 1000);
        }
      }
    } catch (error) {
      setMessage("Signup failed.");
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side: Form */}
      <div className="w-1/2 flex justify-center items-center bg-black">
        <form onSubmit={handleSignup}   className="bg-white/30 backdrop-blur-md border border-white/20 shadow-2xl p-8 rounded-2xl w-96 space-y-4">

        <h2 className="text-3xl font-extrabold text-center bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          Sign Up
        </h2>
          <input
            type="text"
            placeholder="First Name"
            value={fName}
            onChange={(e) => setFName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            required
          />

          <input
            type="text"
            placeholder="Last Name"
            value={lName}
            onChange={(e) => setLName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            required
          />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            required
          />

        <input
        type={showPassword ? "text" : "password"}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded"
          required
        />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          >
            <option value="" disabled>--Select a Role--</option>
            <option value="TEACHER">TEACHER</option>
            <option value="BUSINESSMAN">BUSINESSMAN</option>
            {/* <option value="ADMIN">ADMIN</option> */}
          </select>

          {/* Plan Dropdown */}
          <select
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            required
          >
            <option value="" disabled>--Select a Plan--</option>
            <option value="BASIC">BASIC</option>
            <option value="PRO">PRO</option>
            <option value="BUSINESS">BUSINESS</option>
          </select>

      {/* Show Password Toggle */}
       <div className="flex items-center space-x-2">
  <input
    type="checkbox"
    id="showPassword"
    checked={showPassword}
    onChange={() => setShowPassword(!showPassword)}
    className="cursor-pointer"
  />
  <label htmlFor="showPassword" className="text-sm text-white cursor-pointer">
    Show Password
  </label>
</div>

          <button
            type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-xl shadow-md hover:shadow-lg transition transform hover:scale-105"
          >
            Sign Up
          </button>

          {message && <p className="text-center text-sm text-red-600">{message}</p>}
        </form>
      </div>

      {/* Right Side: Background Image */}
      <div
        className="w-1/2 bg-cover bg-center"
        style={{ backgroundImage: "url('/signup.jpeg')" }}
      />
    </div>
  );
}

export default Signup;
