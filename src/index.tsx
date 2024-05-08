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
  //<React.StrictMode>
    <Suspense>
      <RouterProvider router={ROUTES} />
      <GlobalStyles />
    </Suspense>
  //</React.StrictMode>
);

reportWebVitals();
