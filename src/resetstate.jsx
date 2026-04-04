import React, {useState} from "react";

const ResetTrangThai = ()  => {
  const giaTriGoc = 0
  const [soDem, setSoDem] = useState(giaTriGoc)

  const tangSo = () => {
    setSoDem(truocDo => truocDo +1)
  }
  
  const giamSo = () => {
    setSoDem (truocDo => truocDo -1 )
  }
  const resetBanDau = () => {
    setSoDem(giaTriGoc)
  }

  return (
    <>
    <h2>Số hiện tại {soDem}</h2>
    <button onClick={giamSo}>
    -
    </button>
    <button onClick={tangSo}>
      +
    </button>
    <button onClick={resetBanDau}>
      Reset ban đầu
    </button>
    </>
  )
}

export default ResetTrangThai