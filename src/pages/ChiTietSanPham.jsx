// src/pages/ChiTietSanPham.jsx
import { useParams } from 'react-router-dom';

const products = [
  { id: 1, name: 'Gấu Bông Teddy', price: '200.000đ', desc: 'Gấu bông siêu mềm' },
  { id: 2, name: 'Thỏ Trắng', price: '150.000đ', desc: 'Thỏ dễ thương, ôm ngủ' },
  { id: 3, name: 'Chó Pug Bông', price: '180.000đ', desc: 'Chó bông lười lười cute' },
  { id: 4, name: 'Gấu Trúc', price: '220.000đ', desc: 'Gấu trúc gấu trúc' },
  { id: 5, name: 'Khủng Long Nhồi Bông', price: '250.000đ', desc: 'Khủng long xinh xắn' }
];

export default function ChiTietSanPham() {
  const { id } = useParams(); // lấy id từ URL
  const product = products.find((p) => p.id === parseInt(id)); 

  if (!product) {
    return <div className="p-6 text-red-600">Không tìm thấy sản phẩm!</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <p className="mb-1">{product.desc}</p>
      <p className="text-green-600 font-bold mb-4">{product.price}</p>
      <img
        src={`https://via.placeholder.com/300x200?text=${encodeURIComponent(product.name)}`}
        alt={product.name}
        className="rounded shadow"
      />
    </div>
  );
}
