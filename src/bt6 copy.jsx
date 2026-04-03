import React, {useState} from 'react';

const chonSanPham = () => {
  const danhSachHnag = [
    {id: 1, ten: "Iphone", gia:"15tr"},
    {id: 2, ten: "SS", gia:"18tr"},
  ]

  const [maSoDangChon, setMaSoDangChon] = useState(null);

  return (
    <>
    {DanhSachGioHang.map((monHang) => {
      const dangChon = monHang.id === maSoDangChon;
      return (
        <div
        key = {monHang.id}
        onClick = {() => setMaSoDangChon(monHang.id)}
        className = {`product-cart ${dangChon ? 'active': 'normal'}`}
        >
          <h3>{monHang.ten}</h3>
          <p>{monHang.gia}</p>
        </div>
      )

    })}
    
    </>

  )
}