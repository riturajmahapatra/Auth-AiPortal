import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Dashboard, Error, PrivateRoutes, SignInForm } from './views';
import { ThemeToggle } from './Themes/index.ts';
import { store } from './Redux-Toolkits/Store/store.ts';

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
    element: <PrivateRoutes element={<Dashboard />} />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeToggle>
        <RouterProvider router={router} />
      </ThemeToggle>
    </Provider>
  </React.StrictMode>,
);
