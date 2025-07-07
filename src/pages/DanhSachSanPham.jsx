// src/pages/DanhSachSanPham.jsx
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Gấu Bông Teddy', price: '200.000đ', desc: 'Gấu bông siêu mềm' },
  { id: 2, name: 'Thỏ Trắng', price: '150.000đ', desc: 'Thỏ dễ thương, ôm ngủ' },
  { id: 3, name: 'Chó Pug Bông', price: '180.000đ', desc: 'Chó bông lười lười cute' },
  { id: 4, name: 'Gấu Trúc', price: '220.000đ', desc: 'Gấu trúc gấu trúc' },
  { id: 5, name: 'Khủng Long Nhồi Bông', price: '250.000đ', desc: 'Khủng long xinh xắn' }
];

export default function DanhSachSanPham() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Danh sách sản phẩm</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((sp) => (
          <div key={sp.id} className="border p-4 rounded shadow hover:shadow-md">
            <h2 className="text-xl font-semibold">{sp.name}</h2>
            <p>{sp.desc}</p>
            <p className="text-green-600 font-bold">{sp.price}</p>
            <Link
              to={`/san-pham/${sp.id}`}
              className="mt-2 inline-block text-blue-600 hover:underline"
            >
              Xem chi tiết
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
