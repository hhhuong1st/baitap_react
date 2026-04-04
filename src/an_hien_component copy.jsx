import { useState } from "react";

const HienAnComponent = () => {
  const [hienThi, setHienThi] = useState(false);

  const thayDoiTrangThai = () => {
    setHienThi(truocDo => !truocDo); 
  };

  return (
    <>
        <input 
          type="checkbox" 
          checked={hienThi} 
          onChange={thayDoiTrangThai} 
        />
        {hienThi ? " Đang hiện" : " Đang ẩn"}

      {hienThi && (<p>Chào</p>)}
    </>
  );
};

export default HienAnComponent;