import React, { useState } from 'react';

export default function LuuTru() {
  const [count, setCount] = useState(0); 
  const [HienThi, setHienThi] = useState(false); 
  const [NoiDung, setNoiDung] = useState(''); 
  const [DanhSach, setDanhSach] = useState([]); 
  const [Ten, setTen] = useState(''); 
  const [Tuoi, setTuoi] = useState(''); 

  // BÀI 1
  function Tang() {
    setCount(count + 1);
  }

  function Giam() {
    if (count > 0) { 
      setCount(count - 1); 
    }
  }

  // BÀI 2
  function ThayDoiTrangThai() {
    setHienThi(!HienThi);
  }

  // BÀI 3
  function XuLyNhapLieu(event) {
    setNoiDung(event.target.value);
  }

  // BÀI 4
  function ThemSV(event) {
    event.preventDefault();
    if (Ten !== '' && Tuoi !== '') {
      const SVmoi = { 
        id: Date.now(), 
        tenSV: Ten, 
        tuoiSV: Tuoi 
      };
      setDanhSach([...DanhSach, SVmoi]);
      setTen('');
      setTuoi('');
    }
  }

  // BÀI 5
  function XoaSV(idCanXoa) {
    const MangMoi = DanhSach.filter(function(item) {
      return item.id !== idCanXoa;
    });
    setDanhSach(MangMoi);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '20px'}}>
      <h1>Huỳnh Huyền Hương</h1>
      {/* BÀI 1: Counter */}
      <div style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '10px', width: '350px' }}>
        <h2>Bài 1: Counter</h2>
        <p>Giá trị ban đầu = 0: {count}</p> 
        <button onClick={Tang}>Tăng (+)</button>
        <button onClick={Giam} style={{ marginLeft: '5px' }}>Giảm (-)</button>
      </div>

      {/* BÀI 2: Toggle nội dung */}
        <h2>Bài 2: Toggle nội dung</h2>
        <button onClick={ThayDoiTrangThai}>Show/Hide</button> 
        {HienThi === true && <p>Welcome to ReactJS Test</p>} 

      {/* BÀI 3: Input Realtime */}
      <div style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '10px', width: '350px' }}>
        <h2>Bài 3: Input realtime</h2>
        <input 
          type="text" 
          onChange={XuLyNhapLieu} 
          value={NoiDung} 
          placeholder="Gõ gì đó..." 
        />
        <p>You typed: {NoiDung}</p>
      </div>

      {/* BÀI 4 & 5: Quản lý sinh viên */}
      <div style={{ border: '1px solid #ccc', padding: '15px', width: '350px' }}>
        <h2>Bài 4 & 5: Quản lý sinh viên</h2>
        <form onSubmit={ThemSV}>
          <input 
            placeholder="Tên" 
            value={Ten} 
            onChange={function(e){ setTen(e.target.value) }} 
            style={{ marginBottom: '5px', display: 'block' }}
          />
          <input 
            placeholder="Tuổi" 
            value={Tuoi} 
            type="number" 
            onChange={function(e){ setTuoi(e.target.value) }} 
            style={{ marginBottom: '5px', display: 'block' }}
          />
          <button type="submit">Add</button>
        </form>

        <ul style={{ marginTop: '15px' }}>
          {DanhSach.map(function(sv) {
            return (
              <li key={sv.id} style={{ marginBottom: '5px' }}>
                {sv.tenSV} – {sv.tuoiSV}
                <button 
                  onClick={function(){ XoaSV(sv.id) }} 
                  style={{ marginLeft: '10px', color: 'red' }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>

    </div>
  );
}