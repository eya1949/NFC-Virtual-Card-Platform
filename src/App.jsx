import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashbord from "./components/Dashbord";
import Home from "./components/Home";
import ForgetPassword from "./components/ForgetPassword";
import ResetPassword from "./components/ResetPassword";
import Productspage from "./pages/Productspage";
import ProductPageLamps from "./pages/ProductPageLamps";
import MainLayout from "./layout/MainLayout";

export default function App() {
  return (
    <>
    <BrowserRouter>
    <MainLayout/>
    <Routes>
      <Route path="/api/V1/auth/register" element={<Signup/>}></Route>
      <Route path="/api/V1/auth/login" element={<Login/>}></Route>
      <Route path="/dashbord" element={<Dashbord/>}></Route>
      <Route path="/forget-password" element={<ForgetPassword/>}></Route>
      <Route path="/reset-password/:id/:token" element={<ResetPassword/>}></Route>
      <Route index element={<Home/>}></Route>
      <Route path="/product" element={<Productspage/>}></Route>
      <Route path="/productLamps" element={<ProductPageLamps/>}></Route>
    </Routes>
    </BrowserRouter>
    </> 
  )
}