<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './components/Error.tsx';
import SignInForm from './components/SignIn.tsx';
import Dashboard from './components/Dashboard.tsx';
=======
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/Error.tsx";
import SignInForm from "./components/SignIn.tsx";
import PrivateRoute from "./components/PrivateRoutes.tsx";
import Dashboard from "./components/Dashboard.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
>>>>>>> 929f8e817ac499ed613c0742acac7469bf5683a9

// const [isLogged, setIsLogged] = useState(false);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/error",
    element: <Error />,
  },
  {
    path: "/signin",
    element: <SignInForm />,
  },
  {
<<<<<<< HEAD
    path: '/dashboard',
    element: <Dashboard />,
=======
    path: "/dashboard",
    element: <PrivateRoute element={<Dashboard />} />,
>>>>>>> 929f8e817ac499ed613c0742acac7469bf5683a9
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
