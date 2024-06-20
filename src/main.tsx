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
    path: "/dashboard",
    element: <PrivateRoute element={<Dashboard />} />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
