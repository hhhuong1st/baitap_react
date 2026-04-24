import React, {useState, useEffect} from 'react'

const ProductSearch = () => {
  const products = [
    { id: 1, name: 'iPhone 15' },
    { id: 2, name: 'Samsung S24' }
  ];

  const [noiDung, setNoiDung] = useState('')
  const [loc, setLoc] = useState(products)

  useEffect (() => {
    const time = setTimeout(()=>{

      const ketQua = products.filter(product => 
        product.name.toLowerCase().includes(noiDung.toLowerCase())
      )
      setLoc(ketQua);
    },500)

    return () => {
      clearTimeout(time)
    }
  }, [noiDung])

  return (
    <>
    <h2>Tim kiem sp</h2>
    <input type="text" placeholder="Nhap ten san pham" value={noiDung} 
    onChange={(e) => setNoiDung(e.target.value)}/>

    {loc.length > 0 ? (
      loc.map(item =>(
        <div key={item.id}>
          {item.name}
        </div>
      ))
    ) : (
      <p>Khong tim thay san pham</p>
    )}
    </>
  )
}
export default ProductSearch;