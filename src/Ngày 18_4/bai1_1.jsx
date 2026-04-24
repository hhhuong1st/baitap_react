import React, { useState, memo, useCallback } from 'react';

const Child = memo(({ onClick }) => {
  console.log("Child render lại!");
  return (
    <>
      <p>Con (Đã tối ưu)</p>
      <button onClick={onClick}>Bấm tăng count</button>
    </>
  );
});

const Parent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []); 

  return (
    <>
      <h1>Cha - Count: {count}</h1>
      <input 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Gõ sẽ không làm con render lại"
      />
      <Child onClick={handleClick} />
    </>
  );
};

export default Parent;