import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home"
import Login from "./pages/login/login";

export const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  )
}