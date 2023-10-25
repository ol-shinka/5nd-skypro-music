import { Route, Routes } from "react-router-dom";
import MainPage from "../../pages/main/index";
import NotFound404 from "../../pages/not-Found/index";
import CollectionsPage from "../../pages/collections/index";
import CategoryPage from "../../pages/category/index";
import ProtectedRoute from "./ProtectedRoute";
import AuthPage from "../../pages/AuthPage/AuthPage";
import SamplePage from "../SamplePage/SamplePage";
import AppWallpaper from "../AppWallpaper/AppWallpaper";

export default function AppRoutes({ isLoggedIn, setIsLoggedIn }) {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <AuthPage
            isLoginMode={true}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          ></AuthPage>
        }
      ></Route>
      <Route
        path="/register"
        element={
          <AuthPage
            isLoginMode={false}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          ></AuthPage>
        }
      ></Route>

      <Route element={<ProtectedRoute />}>
        <Route element={<AppWallpaper></AppWallpaper>}>
          <Route
            path="/"
            element={
              <SamplePage showCategory={true}>
                <MainPage
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                ></MainPage>
              </SamplePage>
            }
          ></Route>
          <Route
            path="/category/:id"
            element={
              <SamplePage>
                <CategoryPage></CategoryPage>
              </SamplePage>
            }
          ></Route>
          <Route
            path="/collections"
            element={
              <SamplePage>
                <CollectionsPage></CollectionsPage>
              </SamplePage>
            }
          ></Route>
        </Route>
      </Route>

      <Route path="*" element={<NotFound404></NotFound404>}></Route>
    </Routes>
  );
}
