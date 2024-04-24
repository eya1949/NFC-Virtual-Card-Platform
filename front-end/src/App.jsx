import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";

export default function App() {
  return (
     <>
    <Navbar/>
    <Searchbar/>
    </>
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashbord from "./components/Dashbord";
import Home from "./components/Home";
import ForgetPassword from "./components/ForgetPassword";
import ResetPassword from "./components/ResetPassword";

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/api/V1/auth/register" element={<Signup/>}></Route>
      <Route path="/api/V1/auth/login" element={<Login/>}></Route>
      <Route path="/dashbord" element={<Dashbord/>}></Route>
      <Route path="/forget-password" element={<ForgetPassword/>}></Route>
      <Route path="/reset-password/:id/:token" element={<ResetPassword/>}></Route>
      <Route path="/" element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
    </> 
  )
}