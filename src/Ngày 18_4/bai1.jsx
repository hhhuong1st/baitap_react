// Ở bước này, dù bạn dùng memo, 
// nhưng vì hàm handleClick bị tạo mới liên tục, 
// Child vẫn sẽ render lại.

import React, { useState, memo } from 'react';

// 1. Dùng memo bao bọc Child
const Child = memo(({ onClick }) => {
  console.log("Child render lại!"); // Quan sát console
  return (
    <div style={{ border: '1px solid gray', padding: '10px', marginTop: '10px' }}>
      <p>Con là Component con</p>
      <button onClick={onClick}>Bấm con nhưng tăng count của Cha</button>
    </div>
  );
});

const Parent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Hàm này bị tạo mới mỗi khi Parent render (khi gõ input hoặc tăng count)
  const handleClick = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Cha - Count: {count}</h1>
      
      {/* 2. Gõ vào đây cũng làm Child render lại (Lãng phí) */}
      <input 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Gõ gì đó..."
      />

      <Child onClick={handleClick} />
    </div>
  );
};

export default Parent;