import { useState } from "react";

function Greeting (){
  const [name, setName] = useState("");

  return (
    <>
    <input 
      value={name}
      onChange={e => setName(e.target.value)}
    />
    <p>Hello {name}</p>
    </>
  )
}

export default Greeting