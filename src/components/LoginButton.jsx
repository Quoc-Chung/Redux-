import React from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/userSlice';

function LoginButton() {
  const dispatch = useDispatch();

  const handleLogin = () => {
    const user = { name: 'Hưng', role: 'admin' };
    dispatch(loginSuccess(user));
  };

  return <button onClick={handleLogin}>Đăng nhập</button>;
}

export default LoginButton;
