import React from 'react';
import { useSelector } from 'react-redux';

function Welcome() {
  const userInfo = useSelector(state => state.user.userInfo);
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  if (!isLoggedIn) return null;

  return (
    <h2>Xin chào: {userInfo.name}</h2>
  );
}

export default Welcome;
