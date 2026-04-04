import { useState } from "react";

const updateObject = () => {
  const [user, setUser] = useState ({
    name: "Huỳnh Huyền Hương", age: 20
  })


const tangage = () => {
  setUser(prev => ({
      ...prev,
      age: prev.age + 1
    }));
  };

  return (
    <div>
      <h2>Thông tin User</h2>
      <p>Tên: <strong>{user.name}</strong></p>
      <p>Tuổi: <strong>{user.age}</strong></p>
      
      <button onClick={tangage}>
        Tăng tuổi
      </button>
    </div>
  );
}
export default updateObject