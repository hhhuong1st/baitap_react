
import React from 'react';
import Card from './Card';

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Ví dụ Layout với Children</h2>
      <Card>
        <h3>Áo thun</h3>
        <p>199.000 VNĐ</p>
      </Card>

      <Card>
        <h3>Quần Jean</h3>
        <p>450.000 VNĐ</p>
        <button>Xem chi tiết</button>
      </Card>
    </div>
  );
};

export default App;