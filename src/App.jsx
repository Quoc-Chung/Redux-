import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { them } from './reducer/studentSlice';

const diemTrungBinh = (diem) => {
  return ((diem.toan + diem.ly + diem.hoa) / 3).toFixed(2);
};


const App = () => {

  const dispatch = useDispatch();
  const students = useSelector((state) => state.student.lstStudent);

   const [form, setForm] = useState({
    id: '',
    name: '',
    email: '',
    diem: {
      toan: 0,
      ly: 0,
      hoa: 0
    }
  });


  const handleSubmit = (e) => {
    e.preventDefault();

    if(form){
      dispatch(them(form));
    }
  

    setForm({
      id: '',
      name: '',
      email: '',
      diem: { toan: 0, ly: 0, hoa: 0 }
    });
  };


  return (
    <>
    <div className='mt-4 flex  justify-center items-center gap-5 flex-wrap '>
      {students.map((value) => (
        <div className="relative border w-[350px] px-10 py-2 rounded-3xl bg-green-300" key={value.id}>
       
          <h3 className='text-xl font-bold uppercase text-center'>{value.name}</h3>
           <h1 className='bg-blue-400 absolute top-5 right-5 w-10 h-10  border flex items-center justify-center rounded-full '>  {value.id}</h1>
          <p><b>Email:</b> {value.email}</p>
          <p><b>Điểm Toán:</b> {value.diem.toan}</p>
          <p><b>Điểm Lý:</b> {value.diem.ly}</p>
          <p><b>Điểm Hóa:</b> {value.diem.hoa}</p>
          <p><b>Trung bình:</b> {diemTrungBinh(value.diem)}</p>
        </div>
      ))}
    </div>

    <div>
       <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-10 p-6 border rounded-lg bg-slate-100 shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">📝 Thêm học sinh mới</h2>

      <input name="id" value={form.id} onChange={(e) => (setForm({...form, id: e.target.value}))}
        className="w-full p-2 mb-3 border rounded" placeholder="Mã học sinh" required />

      <input name="name" value={form.name} onChange={(e) => (setForm({...form, name: e.target.value}))}
        className="w-full p-2 mb-3 border rounded" placeholder="Họ tên" required />

      <input name="email" value={form.email} onChange={(e) => (setForm({...form, email: e.target.value}))}
        className="w-full p-2 mb-3 border rounded" placeholder="Email" required />

      <div className="grid grid-cols-3 gap-3 mb-4">
        <input name="toan" type="number" value={form.diem.toan} onChange={(e) => (setForm({...form,diem:{...form.diem, toan : parseFloat(e.target.value)} }))}
          className="p-2 border rounded" placeholder="Toán" min={0} max={10} step={0.1} />

        <input name="ly" type="number" value={form.diem.ly} onChange={(e) => (setForm({...form,diem:{...form.diem, ly : parseFloat(e.target.value)} }))}
          className="p-2 border rounded" placeholder="Lý" min={0} max={10} step={0.1} />

        <input name="hoa" type="number" value={form.diem.hoa} onChange={(e) => (setForm({...form,diem:{...form.diem, hoa : parseFloat(e.target.value)} }))}
          className="p-2 border rounded" placeholder="Hóa" min={0} max={10} step={0.1} />
      </div>

      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-full">
        ➕ Thêm học sinh
      </button>
    </form>  

    </div>
    </> 


  );
};

export default App;
