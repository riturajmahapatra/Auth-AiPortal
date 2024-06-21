import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './components/Error.tsx';
import SignInForm from './components/SignIn.tsx';
import Dashboard from './components/Dashboard.tsx';

// const [isLogged, setIsLogged] = useState(false);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: '/error',
    element: <Error />,
  },
  {
    path: '/signin',
    element: <SignInForm />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
