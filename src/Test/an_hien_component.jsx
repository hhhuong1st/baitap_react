import { useState } from "react";

const AnHienComponent = () => {
  const [hienThi, setHienThi] = useState(false)

  const thayDoi = () => {
    setHienThi (truocDo => !truocDo)
  }

  return (
    <>
    <input 
    type="checkbox" 
    checked={hienThi} 
    onChange={thayDoi}
    />
    {hienThi ? 'Đang hiện' : 'Đang ẩn'}
    {hienThi &&( <p>Chào</p> )}
    </>
  )
}

export default AnHienComponent