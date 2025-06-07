import React from 'react';
import LoginButton from './components/LoginButton';
import Welcome from './components/Welcome';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Trang Đăng nhập</h1>
      <LoginButton />
      <Welcome />
    </div>
  );
}

export default App;
