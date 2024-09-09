import { useEffect, useMemo } from "react";
import { Route, useNavigate, useLocation, Navigate } from "react-router-dom";
import { Authentication } from "../auth/Auth";
import AuthService from "../auth/Authorization.service";
import useAuth from "../Core/Hooks/useAuth";
import info from "../Core/Utils/info";
import { jwtDecode } from "jwt-decode";
import Home from "./Views/Home.view";
import EditorsListView from "./Views/EditorsList.view";
import EditorProfileView from "./Views/EditorProfile.view";
import PostCreateView from "./Views/PostCreate.view";
import PostEditView from "./Views/PostEdit.view";
import NotFound404View from "./Views/NotFound404.view";
import { Routes } from "react-router-dom";
import Loading from "../Components/Loading";

export default function App() {
  const location = useLocation();

  const navigate = useNavigate();

  const { user, fetchUser } = useAuth();

  useEffect(() => {
    window.onunhandledrejection = function (error: PromiseRejectionEvent) {
      console.log(error);
      info({
        title: error.reason.response?.data.title || "Erro",
        description: error.reason.response?.data.detail || error.reason.message,
      });
    };
  }, []);

  useEffect(() => {
    async function identify() {
      const isInAuthorizationRoute = window.location.pathname === "/authorize";
      const code = new URLSearchParams(window.location.search).get("code");

      const codeVerifier = AuthService.getCodeVerifier();
      const accessToken = AuthService.getAccessToken();

      if (!accessToken && !isInAuthorizationRoute) {
        AuthService.imperativelySendToLoginScreen();
      }

      if (isInAuthorizationRoute) {
        if (!code) {
          info({
            title: "Erro",
            description: "Código de autorização não informado",
          });
          AuthService.imperativelySendToLoginScreen();
          return;
        }

        if (!codeVerifier) {
          AuthService.imperativelySendToLogout();
          return;
        }

        // busca o primeiro token de acesso
        const {
          access_token,
          refresh_token,
        } = await AuthService.getFirstAccessTokens({
          code,
          codeVerifier,
          redirectUri: `${process.env.REACT_APP_BASE_URL}/authorize`,
        });

        AuthService.setAccessToken(access_token);
        AuthService.setRefreshToken(refresh_token);

        const decodedToken: Authentication.AccessTokenDecodedBody = jwtDecode(
          access_token
        );
        fetchUser(decodedToken["alganews:user_id"]);
        navigate("/");
      }

      if (accessToken) {
        const decodedToken: Authentication.AccessTokenDecodedBody = jwtDecode(
          accessToken
        );
        fetchUser(decodedToken["alganews:user_id"]);
      }
    }

    identify();
  }, [navigate, fetchUser]);

  const isAuthorizationRoute = useMemo(
    () => location.pathname === "/authorize",
    [location.pathname]
  );

  if (isAuthorizationRoute || !user) return <Loading show />;

  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/editores" Component={EditorsListView} />
      <Route path="/editores/:id" Component={EditorProfileView} />
      <Route path="/posts/criar" Component={PostCreateView} />
      <Route path="/posts/editar/:id" Component={PostEditView} />
      <Route Component={NotFound404View} />
    </Routes>
  );
}