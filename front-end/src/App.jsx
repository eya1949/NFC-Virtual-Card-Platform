import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ForgetPassword from "./components/ForgetPassword";
import ResetPassword from "./components/ResetPassword";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashbord";
import NavBar2 from "./components/NavBar2";
import OnlyAdmineRoute from "./components/OnlyAdmineRoute";

export default function App() {
  const login = window.localStorage.getItem("isLogeIn");
  return (
    <>
      <BrowserRouter>
        <NavBar2 />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/api/auth/signup" element={<SignUp />}></Route>
          <Route path="/api/auth/signin" element={<SignIn />}></Route>
          <Route element={<PrivateRoute />}>
            <Route path="/api/auth/dashboard" element={<Dashboard />}></Route>
          </Route>
          <Route element={<OnlyAdmineRoute />}>
            <Route path="/CreatProduct" element={<Dashboard />}></Route>
          </Route>
          <Route
            path="/api/forgetPassword"
            element={<ForgetPassword />}
          ></Route>
          <Route path="/api/resetPassword" element={<ResetPassword />}></Route>
        </Routes>
        <ToastContainer position="top-center" />
      </BrowserRouter>
    </>
  );
}
