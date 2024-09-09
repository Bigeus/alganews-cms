import {
    createBrowserRouter,
  } from "react-router-dom";
  import App from './App';
  import HomeView from './App/Views/Home.view';
  import EditorsListView from './App/Views/EditorsList.view';
  import PostCreateView from './App/Views/PostCreate.view';
  import PostEditView from './App/Views/PostEdit.view';
  import EditorProfileView from './App/Views/EditorProfile.view';
  import NotFound404View from './App/Views/NotFound404.view';
  
  // Definindo as rotas e estruturando-as dentro do componente App
  export const ROUTES = createBrowserRouter([
    {
      path: "/",
      element: <App />,  // App como layout principal
      children: [
        {
          path: "/",
          element: <HomeView />,
        },
        {
          path: "editores",
          element: <EditorsListView />,
        },
        {
          path: "editores/:id",
          element: <EditorProfileView />,
        },
        {
          path: "posts/criar",
          element: <PostCreateView />,
        },
        {
          path: "posts/editar/:id",
          element: <PostEditView />,
        },
        {
          path: "*",
          element: <NotFound404View />,
        },
      ],
    },
  ]);
  
  