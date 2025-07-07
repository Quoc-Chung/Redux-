import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-sm mx-auto">
      <h2 className="text-xl mb-4">Đăng nhập</h2>
      <input type="email" placeholder="Email" className="border p-2 w-full mb-2" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" className="border p-2 w-full mb-2" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Đăng nhập</button>
    </form>
  );
};

export default Login;