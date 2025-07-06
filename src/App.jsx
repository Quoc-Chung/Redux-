import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeToCart ,increment ,  decrease} from './cartSlide';

/**
 * Dữ liệu ban đầu 
 */
const products = [
  { id: 1, name: 'Táo', price: 10 },
  { id: 2, name: 'Nho', price: 20 },
  { id: 3, name: 'Dưa hấu', price: 30 }
];



const App = () => {
  const dispatch  = useDispatch(); 
  const cart = useSelector((state) => state.cart.items);
  const total = cart.reduce((tong, value) => tong + value.price * value.quantity, 0 );


  return (
    <div >
       <h2> Danh sach san pham </h2>
       {products.map((p) => (
        <div key={p.id} style={{ marginBottom: 10 }}>
          {p.name} - ${p.price}
          <button onClick={() => dispatch(addToCart(p))}>Thêm vào giỏ</button>
        </div>
      ))}

      <h2>🧺 Giỏ hàng</h2>
      {cart.map((item) => (
        <div key={item.id}>
          {item.name} - ${item.price} x {item.quantity}
          <button onClick={() => dispatch(increment(item.id))}>+</button>
          <button onClick={() => dispatch(decrease(item.id))}>-</button>
          <button onClick={() => dispatch(removeToCart(item.id))}>🗑️</button>
        </div>
      ))}
        

        <h3>Tổng tiền: ${total}</h3>
    </div>
  )
}

export default App