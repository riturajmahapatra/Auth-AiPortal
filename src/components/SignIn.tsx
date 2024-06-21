<<<<<<< HEAD
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';
=======
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
>>>>>>> 929f8e817ac499ed613c0742acac7469bf5683a9

interface SignInCredentials {
  username: string;
  password: string;
  email: string;
}

const SignInForm: React.FC = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState<SignInCredentials>({
    username: "",
    password: "",
    email: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
<<<<<<< HEAD
    if (formState.email === 'demo@gmail.com' && formState.password === 'demo') {
      setIsLoggedIn(true);
      navigate('/dashboard');
=======
    if (formState.email === "demo@gmail.com" && formState.password === "demo") {
      setIsLoggedIn(true);
      localStorage.setItem("authToken", "your-auth-token");
      navigate("/dashboard");
>>>>>>> 929f8e817ac499ed613c0742acac7469bf5683a9
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <div>
          <Dashboard />
<<<<<<< HEAD
          <p>Welcome! You are logged in.</p>
          <button onClick={handleLogout}>Logout</button>
=======
>>>>>>> 929f8e817ac499ed613c0742acac7469bf5683a9
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-xl">
            <h2 className="text-2xl font-bold text-center">Sign In</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formState.password}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <div className="flex flex-col items-center justify-between w-full px-3 py-2 border rounded focus:outline-none">
                  <span className="text-gray-400 text-xl ">
                    demo credentials
                  </span>{" "}
                  email : demo@gmail.com
                  <br />
                  password: demo
                </div>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
export default SignInForm;
