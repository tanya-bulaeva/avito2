import { Routes, Route } from "react-router-dom";
import Main from "../../pages/main/Main"
import Article from "../../pages/article/Article";
import Profile from "../../pages/profile/Profile";
import SellerProfile from "../../pages/sellerProfile/SellerProfile";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import { ProtectedRoute } from "../protected-route";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/userSlice";
import { useEffect } from "react";


export const AppRoutes = () => {
  const dispatch = useDispatch();

  const setCurrentUser = (value) => dispatch(setUser(value));
  const isAuth = () => {
    const token = localStorage.getItem("access_token");
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) setCurrentUser(user);
    return token && user;
  };

  useEffect(() => {
    isAuth();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/article/:id" element={<Article  />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/seller/:id" element={<SellerProfile/>} />
      <Route element={<ProtectedRoute isAllowed={isAuth} />}>
        <Route path="/profile" element={<Profile />} />
      </Route>



    </Routes>
  );
};
