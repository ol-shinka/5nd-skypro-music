import { Routes, Route } from "react-router-dom";
import { Main } from "../../pages/main";
import { NotFound404 } from "../../pages/not-found/index";
import { Collections } from "../../pages/collections";
import { Category } from "../../pages/category";
import { AuthPage } from "../../pages/AuthPage/AuthPage";
import { ProtectedRoute } from "./ProtectedRoute";

export function AppRoutes({ setUser, user }) {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage setUser={setUser} />} />

      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/" element={<Main />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/category/:id" element={<Category />} />
      </Route>
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  );
}
