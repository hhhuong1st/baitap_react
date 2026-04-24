import React, {useCallback, memo, useState} from 'react'

const ProductCart = memo(({product, onAddToCart}) => {
  console.log("Render lai: ", product.name)

  return (
    <>
    {product.name} - {product.price}
    <button onClick={()=> onAddToCart(product)}> Add</button>
    </>
  )
})

const ProductList = () => {
  const [product] = useState([
    { id: 1, name: 'iPhone', price: 1000 },
    { id: 2, name: 'Samsung', price: 900 }
  ])
  const [cart, setCart] = useState([])
  const [text, setText] = useState("")

  const handleAdd = useCallback((p) =>{
    setCart(curr => [...curr, p])
  },[])

  return (
    <>
    <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
    </>
  )
}