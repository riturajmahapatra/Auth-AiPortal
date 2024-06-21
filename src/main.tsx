import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './app/store.ts';
import { Dashboard, Error, PrivateRoutes, SignInForm } from './views/index.ts';

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
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
