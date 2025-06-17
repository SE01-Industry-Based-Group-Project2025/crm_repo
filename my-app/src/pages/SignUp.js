import React from 'react';

function SignUp() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Sign Up Page</h1>
      <form className="bg-white p-6 rounded shadow-md w-80">
        <label className="block mb-2">
          Name:
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            placeholder="Enter your name"
          />
        </label>
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
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
