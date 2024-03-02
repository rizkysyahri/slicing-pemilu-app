import * as React from "react";
import logo from "../../assets/logo_dumbways.png";
import { Link, useNavigate } from "react-router-dom";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import { IAuth } from "../../types/types";

const Navbar: React.FC = () => {
  const [form, setForm] = React.useState<IAuth>({
    username: "",
    password: "",
  });
  const [isLogin, setIsLogin] = React.useState<boolean>(false);
  const [isAdminLogin, setIsAdminLogin] = React.useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const navigate = useNavigate();

  const [showModal, setShowModal] = React.useState(false);
  const [isActive, setIsActive] = React.useState("signin");

  const handleSignInClick = () => {
    setShowModal(true);
    setIsActive("signin");
    window.history.pushState(null, "", "/signin");
  };

  const handleSignUpClick = () => {
    setShowModal(true);
    setIsActive("signup");
    window.history.pushState(null, "", "/signup");
  };

  const handleCloseModalClick = () => {
    setShowModal(false);
    window.history.pushState(null, "", "/");
  };

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
    setShowModal(false)
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
      <div className="flex items-center justify-between px-[2vw] py-2 bg-black text-white">
        <div className="flex items-center gap-2">
          <img src={logo} alt="" className="w-10 h-10" />

          {isLogin || isAdminLogin ? (
            <>
              {isLogin ? (
                <>
                  <span className="font-semibold">
                    <Link to="/">PEMILU PRESIDEN DUMBWAYS.ID</Link>
                  </span>
                </>
              ) : (
                <>
                  <span className="font-semibold">
                    <Link to="/admin">DASHBOARD</Link>
                  </span>
                </>
              )}
            </>
          ) : (
            <span className="font-semibold">
              <Link to="/">PEMILU PRESIDEN DUMBWAYS.ID</Link>
            </span>
          )}
        </div>
        <div className="flex items-center gap-4">
          {isLogin || isAdminLogin ? (
            <>
              {isLogin ? (
                <>
                  <span>Partai</span>
                  <span>|</span>
                  <span>Paslon</span>
                  <span>|</span>
                  <span>
                    <Link to="/voting">Voting</Link>
                  </span>
                </>
              ) : (
                <>
                  {" "}
                  <>
                    <Link to="/list-partai">Partai</Link>
                    <span>|</span>
                    <Link to="/list-paslon">Paslon</Link>
                  </>
                </>
              )}
            </>
          ) : (
            <>
              <span>Partai</span>
              <span>|</span>
              <span>Paslon</span>
              <span>|</span>
              <span>
                <Link to="/voting">Voting</Link>
              </span>
            </>
          )}

          <>
            {isLogin || isAdminLogin ? (
              <p className="bg-white text-black h-9 w-9 rounded-full flex items-center justify-center">
                {isLogin ? "U" : "A"}
              </p>
            ) : (
              <button
                className="bg-white text-black px-4 py-1 rounded-md ml-5"
                onClick={handleSignInClick}
              >
                Login
              </button>
            )}

            {showModal ? (
              <>
                <div className="block justify-center items-center overflow-x-hidden fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm bg-opacity-35">
                  <div className="relative w-auto my-10 mx-auto max-w-sm">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-white w-full outline-none focus:outline-none">
                      <div className="flex items-start justify-end p-5 border-gray-300 rounded-t">
                        <button
                          className="bg-transparent border-0 text-black float-right"
                          onClick={handleCloseModalClick}
                        >
                          <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                            x
                          </span>
                        </button>
                      </div>
                      {isActive === "signin" ? (
                        <h3 className="text-3xl font-semibold text-[#5E5400] text-center">
                          LOGIN
                        </h3>
                      ) : (
                        <h3 className="text-3xl font-semibold text-[#5E5400] text-center">
                          Register
                        </h3>
                      )}

                      {isActive === "signin" ? (
                        <SignIn handleChange={handleForm} login={login} />
                      ) : (
                        <SignUp />
                      )}

                      <>
                        {isActive === "signin" ? (
                          <p className="text-black text-center mb-5">
                            Belum memiliki akun?{" "}
                            <button
                              onClick={handleSignUpClick}
                              className="underline underline-offset-4 text-[#0092A6] italic"
                            >
                              Sign Up
                            </button>
                          </p>
                        ) : (
                          <p className="text-black text-center mb-5">
                            <button
                              onClick={handleSignInClick}
                              className="underline underline-offset-4 text-[#0092A6] italic"
                            >
                              Sign In
                            </button>
                          </p>
                        )}
                      </>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
          </>
        </div>
      </div>
    </>
  );
};

export default Navbar;
