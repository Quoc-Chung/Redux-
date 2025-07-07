import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/authSlice';

export default function HomePage() {
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <h1>Trang chủ</h1>
      <button onClick={() => dispatch(logout())}>Đăng xuất</button>
    </div>
  );
}
