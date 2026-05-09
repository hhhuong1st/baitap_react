import { useState, useCallback, useMemo } from 'react';

const useStudentManager = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Nguyễn Văn A', age: 20, className: 'CNTT1' },
    { id: 2, name: 'Trần Thị B', age: 21, className: 'CNTT2' },
    { id: 3, name: 'Lê Văn C', age: 22, className: 'CNTT1' }
  ]);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [editingId, setEditingId] = useState(null);
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    className: ''
  });

  // Handle Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Add or Update Student
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.age || !formData.className) return;

    if (editingId) {
      // Update
      setStudents(prev => prev.map(s => 
        s.id === editingId ? { ...formData, id: editingId, age: Number(formData.age) } : s
      ));
      setEditingId(null);
    } else {
      // Add
      const newStudent = {
        ...formData,
        id: Date.now(),
        age: Number(formData.age)
      };
      setStudents(prev => [...prev, newStudent]);
    }

    // Reset Form
    setFormData({ name: '', age: '', className: '' });
  };

  // Delete Student
  const deleteStudent = useCallback((id) => {
    setStudents(prev => prev.filter(s => s.id !== id));
  }, []);

  // Set form for editing
  const startEdit = useCallback((student) => {
    setFormData({
      name: student.name,
      age: student.age.toString(),
      className: student.className
    });
    setEditingId(student.id);
  }, []);

  const cancelEdit = () => {
    setEditingId(null);
    setFormData({ name: '', age: '', className: '' });
  };

  // Helper function to remove Vietnamese accents
  const removeAccents = (str) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D");
  };

  // Filtered List
  const filteredStudents = useMemo(() => {
    const normalizedQuery = removeAccents(searchQuery.toLowerCase());
    return students.filter(s => {
      const normalizedName = removeAccents(s.name.toLowerCase());
      return normalizedName.includes(normalizedQuery);
    });
  }, [students, searchQuery]);

  return {
    students: filteredStudents,
    searchQuery,
    setSearchQuery,
    formData,
    editingId,
    handleInputChange,
    handleSubmit,
    deleteStudent,
    startEdit,
    cancelEdit
  };
};

export default useStudentManager;
