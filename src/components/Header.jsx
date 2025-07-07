import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.auth.currentUser);

  return (
    <header className="p-4 bg-gray-200 mb-4">
      <ul className="flex gap-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/danh-sach-san-pham">Sản phẩm</Link></li>
        {user?.role === 'nhanvien' && <li><Link to="/manage-user">QL Người Dùng</Link></li>}
        {user?.role === 'admin' && <li><Link to="/manage-nhanvien">QL Nhân Viên</Link></li>}
      </ul>
    </header>
  );
};

export default Header;