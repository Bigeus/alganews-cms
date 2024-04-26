import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  LoaderFunction,
  RouterProvider,
  useLoaderData,
} from "react-router-dom";
import { json } from 'stream/consumers';

const Home = React.lazy(() => import('./Views/Home.view'));
const UserView = React.lazy(() => import('./Views/User.view'));
const CalcView = React.lazy(() => import('./Views/Calc.view'));
const NavBar = React.lazy(() => import('./Components/NavBar'));
const ContactView = React.lazy(() => import('./Views/Contact.view'));

const ROUTES = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [

      {
        index: true,
        path: 'home',
        element: <Home />,

      },
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

    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
