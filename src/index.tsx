import ReactDOM from 'react-dom/client';
import './Core/Imports.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
} from "react-router-dom";
import HomeView from './App/Views/Home.view';
import EditorsListView from './App/Views/EditorsList.view';
import PostCreateView from './App/Views/PostCreate.view';
import NotFound404View from './App/Views/NotFound404.view';
import EditorProfileView from './App/Views/EditorProfile.view';
import App from './App';
import PostEditView from './App/Views/PostEdit.view';
import { Provider } from 'react-redux';
import store from './Core/store';

export const ROUTES = createBrowserRouter([
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
  {
    path: '/posts/editar/:id',
    element: <PostEditView />
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);



root.render(
  //<React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  //</React.StrictMode>
);

reportWebVitals();
