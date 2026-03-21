import React, { useState } from 'react';

export default function luuTru() {
  const [count, setCount] = useState(0); 
  const [hienThi, setHienThi] = useState(false); 
  const [noiDung, setNoiDung] = useState(''); 
  const [danhSach, setDanhSach] = useState([]); 
  const [ten, setTen] = useState(''); 
  const [tuoi, setTuoi] = useState(''); 

  // BÀI 1
  function tang() {
    setCount(count + 1);
  }

  function giam() {
    if (count > 0) { 
      setCount(count - 1); 
    }
  }

  // BÀI 2
  function thayDoiTrangThai() {
    setHienThi(!hienThi);
  }

  // BÀI 3
  function xuLyNhapLieu(event) {
    setNoiDung(event.target.value);
  }

  // BÀI 4
  function themSV(event) {
    event.preventDefault();
    if (ten !== '' && tuoi !== '') {
      const SVmoi = { 
        id: Date.now(), 
        tenSV: ten, 
        tuoiSV: tuoi 
      };
      setDanhSach([...danhSach, SVmoi]);
      setTen('');
      setTuoi('');
    }
  }

  // BÀI 5
  function xoaSV(idCanXoa) {
    const mangMoi = danhSach.filter(function(item) {
      return item.id !== idCanXoa;
    });
    setDanhSach(mangMoi);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '20px'}}>
      <h1>Huỳnh Huyền Hương</h1>
      {/* BÀI 1: Counter */}
      <div style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '10px', width: '350px' }}>
        <h2>Bài 1: Counter</h2>
        <p>Giá trị ban đầu = 0: {count}</p> 
        <button onClick={tang}>Tăng (+)</button>
        <button onClick={giam} style={{ marginLeft: '5px' }}>Giảm (-)</button>
      </div>

      {/* BÀI 2: Toggle nội dung */}
      <div style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '10px', width: '350px' }}>
        <h2>Bài 2: Toggle nội dung</h2>
        <button onClick={thayDoiTrangThai}>Show/Hide</button> 
        {hienThi == true && <p>Welcome to ReactJS Test</p>} 
      </div>

      {/* BÀI 3: Input Realtime */}
      <div style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '10px', width: '350px' }}>
        <h2>Bài 3: Input realtime</h2>
        <input 
          type="text" 
          onChange={xuLyNhapLieu} 
          value={noiDung} 
          placeholder="Gõ gì đó..." 
        />
        <p>You typed: {noiDung}</p>
      </div>

      {/* BÀI 4 & 5: Quản lý sinh viên */}
      <div style={{ border: '1px solid #ccc', padding: '15px', width: '350px' }}>
        <h2>Bài 4 & 5: Quản lý sinh viên</h2>
        <form onSubmit={themSV}>
          <input 
            placeholder="Tên" 
            value={ten} 
            onChange={function(e){ setTen(e.target.value) }} 
            style={{ marginBottom: '5px', display: 'block' }}
          />
          <input 
            placeholder="Tuổi" 
            value={tuoi} 
            type="number" 
            onChange={function(e){ setTuoi(e.target.value) }} 
            style={{ marginBottom: '5px', display: 'block' }}
          />
          <button type="submit">Add</button>
        </form>

        <ul style={{ marginTop: '15px' }}>
          {danhSach.map(function(sv) {
            return (
              <li key={sv.id} style={{ marginBottom: '5px' }}>
                {sv.tenSV} – {sv.tuoiSV}
                <button 
                  onClick={function(){ xoaSV(sv.id) }} 
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