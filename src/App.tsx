import * as React from "react";
import { Navigate, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Voting from "./pages/Voting";
import SignIn from "./components/SignIn";
import DetailPage from "./components/homePage/DetailPage";
import SignUp from "./components/SignUp";
import Admin from "./pages/admin/Admin";
import ListPaslon from "./components/dashboard/ListPaslon";
import ListPartai from "./components/dashboard/ListPartai";
import AddPaslon from "./components/dashboard/addButton/AddPaslon";
import AddPartai from "./components/dashboard/addButton/AddPartai";
import { IAuth } from "./types/types";

function App() {
  const [isLogin, setIsLogin] = React.useState<boolean>(false);
  const [isAdminLogin, setIsAdminLogin] = React.useState<boolean>(false);
  const [form, setForm] = React.useState<IAuth>({
    username: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const navigate = useNavigate();

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.username === "admin" && form.password === "cai") {
      console.log("Admin login success");
      setIsAdminLogin(true);
      setIsLogin(false);
      setIsLoggedIn(true);
      localStorage.setItem("isAdminLogin", "true");
      localStorage.setItem("isLogin", "false");
      localStorage.setItem("isLoggedIn", "true");

      if (location.pathname === "/list-partai") {
        navigate("/list-partai");
      } if (location.pathname === "/list-paslon") {
        navigate("/list-paslon");
      } if (location.pathname === "/add-partai") {
        navigate("/add-partai");
      } if (location.pathname === "/add-paslon") {
        navigate("/add-paslon");
      } else {
        navigate("/admin");
      }

    } else if (form.username !== "" && form.password !== "") {
      console.log("User login success");
      setIsAdminLogin(false);
      setIsLogin(true);
      setIsLoggedIn(true);
      localStorage.setItem("isAdminLogin", "false");
      localStorage.setItem("isLogin", "true");
      localStorage.setItem("isLoggedIn", "true");

      if (location.pathname === "/voting") {
        navigate("/voting");
      } else {
        navigate("/");
      }
    }
  };

  React.useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const storedIsAdminLogin = localStorage.getItem("isAdminLogin") === "true";
    const storedIsLogin = localStorage.getItem("isLogin") === "true";

    setIsLoggedIn(storedIsLoggedIn);
    setIsAdminLogin(storedIsAdminLogin);
    setIsLogin(storedIsLogin);

    if (storedIsLoggedIn && location.pathname === "/voting") {
      navigate("/voting");
    } else if (storedIsLoggedIn && location.pathname === "/list-partai") {
      navigate("/list-partai");
    } else if (storedIsLoggedIn && location.pathname === "/list-paslon") {
      navigate("/list-paslon");
    } else if (storedIsLoggedIn && location.pathname === "/add-parta") {
      navigate("/add-partai");
    } else if (storedIsLoggedIn && location.pathname === "/add-paslon") {
      navigate("/add-paslon");
    }

  }, [location.pathname]);

  React.useEffect(() => {
    if (isAdminLogin && location.pathname !== "/list-partai" && location.pathname !== "/list-paslon" && location.pathname !== "/add-partai" && location.pathname !== "/add-paslon") {
      navigate("/admin");
    } else if (isLogin && location.pathname !== "/voting") {
      navigate("/");
    }
  }, [isAdminLogin, isLogin, location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/admin" element={<Admin />} />
        <Route path="/list-paslon" element={<ListPaslon />} />
        <Route path="/list-partai" element={<ListPartai />} />
        <Route path="/add-paslon" element={<AddPaslon />} />
        <Route path="/add-partai" element={<AddPartai />} />
        <Route
          path="/signin"
          element={<SignIn handleChange={handleForm} login={login} />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/voting" element={<Voting />} />
      </Routes>
    </>
  );
}

export default App;
