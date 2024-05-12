import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { ToastContainer } from "react-toastify";
import Dashboard from "./pages/Dashbord";
import HeroSection from "./pages/HeroSection";
import NavBar from "./components/NavBar";
import PrivateRoute from "./components/Dashboard/PrivateRoute";
import OnlyAdmineRoute from "./components/Dashboard/OnlyAdmineRoute";

export default function App() {
  const login = window.localStorage.getItem("isLogeIn");
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/home" element={<HeroSection/>}></Route>
          <Route path="/api/auth/signup" element={<SignUp />}></Route>
          <Route path="/api/auth/signin" element={<SignIn />}></Route>
          <Route element={<PrivateRoute />}>
            <Route path="/api/auth/dashboard" element={<Dashboard />}></Route>
          </Route>
          <Route element={<OnlyAdmineRoute />}>
            <Route path="/CreatProduct" element={<Dashboard />}></Route>
          </Route>
        </Routes>
        <ToastContainer position="top-center" />
      </BrowserRouter>
    </>
  );
}
