import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface SignInCredentials {
  username: string;
  password: string;
  email: string;
}

const SignInForm: React.FC = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState<SignInCredentials>({
    username: '',
    password: '',
    email: '',
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
    if (formState.email === 'demo@gmail.com' && formState.password === 'demo') {
      // Simulating successful login
      setIsLoggedIn(true);
      // Navigate to the dashboard route
      // navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    window.location.reload();
  };

  return (
    <>
      {isLoggedIn ? (
        <div>
          <p>Welcome! You are logged in.</p>
          <button onClick={handleLogout}>Logout</button>
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
