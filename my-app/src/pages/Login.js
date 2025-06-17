import React from 'react';

function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Login Page</h1>
      <form className="bg-white p-6 rounded shadow-md w-80">
        <label className="block mb-2">
          Email:
          <input
            type="email"
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            placeholder="Enter your email"
          />
        </label>
        <label className="block mb-4">
          Password:
          <input
            type="password"
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            placeholder="Enter your password"
          />
        </label>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
