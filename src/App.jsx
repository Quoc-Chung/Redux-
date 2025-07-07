import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Header from "./components/Header";
import About from "./pages/About";
import HomePage from "./components/Home";
import DanhSachSanPham from "./pages/DanhSachSanPham";
import ChiTietSanPham from "./pages/ChiTietSanPham";
import ManageNhanVien from "./pages/ManagerNhanVien";
import ManageUser from "./pages/ManageUser";
import ProtectedRoute from "./components/ProtectedRoute";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.auth.currentUser);
  return (
    <div>
      <Header />
      <Routes>    
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
            <HomePage />
        } />
        <Route path="/about" element={<ProtectedRoute roles={["nhanvien","user", "admin"]}><About /></ProtectedRoute>} />
        
        <Route path="/danh-sach-san-pham" element={<ProtectedRoute roles={["nhanvien","user", "admin"]}><DanhSachSanPham /></ProtectedRoute>} />
        <Route path="/san-pham/:id" element={<ProtectedRoute roles={["nhanvien","user", "admin"]}> <ChiTietSanPham /> </ProtectedRoute>} />
        <Route path="/manage-user" element={
          <ProtectedRoute roles={["nhanvien"]}>
            <ManageUser />
          </ProtectedRoute>
        } />
        <Route path="/manage-nhanvien" element={
          <ProtectedRoute roles={["admin"]}>
            <ManageNhanVien />
          </ProtectedRoute>
        } />
      </Routes>
    </div>
  );
};

export default App;
