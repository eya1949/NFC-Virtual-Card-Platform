import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashbord from "./components/Dashbord";
import Home from "./components/Home";
import ForgetPassword from "./components/ForgetPassword";
import ResetPassword from "./components/ResetPassword";
import Productspage from "./pages/Productspage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";


export default function App() {
  const login = window.localStorage.getItem("isLogeIn");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/api/auth/signup" element={<SignUp />}></Route>
          <Route path="/api/auth/signin" element={<SignIn />}></Route>
          <Route path="/api/dashbord" element={<Dashbord />}></Route>
          <Route path="/api/forgetPassword" element={<ForgetPassword />}></Route>
          <Route
            path="/api/resetPassword"
            element={<ResetPassword />}
          ></Route>

          <Route path="/api/procut" element={<Productspage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
