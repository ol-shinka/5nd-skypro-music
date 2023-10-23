import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthUser } from "./store/slices/UserLS";

export const useLogout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return () => {
    dispatch(setAuthUser(null));
    navigate("/login");
  };
};

export const useAuthSelector = () => {
  const auth = useSelector((store) => store.auth);
  return auth;
};
