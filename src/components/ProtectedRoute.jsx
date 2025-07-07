import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
/**
 * 
 * @param {*} roles mảng chua các vai trò được truy cập vào dữ liệu
 * @Param {*} children đại diên cho component sẽ được render ra nếu thỏa mãn 
 * @returns 
 */
const ProtectedRoute = ({ children, roles }) => {
  const user = useSelector((state) => state.auth.currentUser);

  if (!user) return <Navigate to="/login" />;

  if (roles && !roles.includes(user.role)) return <Navigate to="/" />;

  return children;
};

export default ProtectedRoute;