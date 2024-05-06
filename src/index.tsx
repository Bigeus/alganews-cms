import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './Core/Imports.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomeView from './App/Views/Home.view';
import GlobalStyles from './Core/GlobalStyles';
import EditorsListView from './App/Views/EditorsList.view';
import PostCreateView from './App/Views/PostCreate.view';
import NotFound404View from './App/Views/NotFound404.view';
import EditorProfileView from './App/Views/EditorProfile.view';

const ROUTES = createBrowserRouter([
  {
    path: "/",
    element: <HomeView />,
    errorElement: <NotFound404View />,
  },
  {
    path: '/editores',
    element: <EditorsListView />
  },
  {
    path: '/editores/:id',
    element: <EditorProfileView />
  },
  {
    path: '/posts/criar',
    element: <PostCreateView />
  },
  
]);

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
