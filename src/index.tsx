import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './Core/Imports.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  LoaderFunction,
  RouterProvider,
  useLoaderData,
} from "react-router-dom";

import NavBar from './Components/NavBar';
import CalcView from './App/Views/Calc.view';
import ContactView from './App/Views/Contact.view';
import UserView from './App/Views/User.view';
import HomeView from './App/Views/Home.view';
import ErrorView from './App/Views/ErrorPage.view';
import ErrorPage from './App/Views/ErrorPage.view';
import GlobalStyles from './Core/GlobalStyles';

const ROUTES = createBrowserRouter([
  {
    path: "/",
    element: <HomeView />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/contact',
        element: <ContactView />
      },
      {
        path: '/user/:userId',
        element: <UserView />
      },
      {
        path: '/calc/:a/:b',
        element: <CalcView />
      }
    ]
  }]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <Suspense>

      <RouterProvider router={ROUTES} />
      <GlobalStyles />
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
