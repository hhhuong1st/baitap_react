import React from 'react';
import './StudentManager.css';
import useStudentManager from './hooks/useStudentManager';

const StudentManager = () => {
  const {
    students,
    searchQuery,
    setSearchQuery,
    formData,
    editingId,
    handleInputChange,
    handleSubmit,
    deleteStudent,
    startEdit,
    cancelEdit
  } = useStudentManager();

  return (
    <div className="student-manager-container">
      <header className="manager-header">
        <h1>Student Manager</h1>
      </header>

      <div className="manager-grid">
        {/* Left Column: Form */}
        <div className="glass-card">
          <h2 className="card-title">
            {editingId ? '📝 Cập nhật thông tin' : 'Thêm học sinh mới'}
          </h2>
          <form className="student-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Họ và tên</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Nhập tên học sinh..."
                required
              />
            </div>
            <div className="input-group">
              <label>Tuổi</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                placeholder="Nhập tuổi..."
                required
              />
            </div>
            <div className="input-group">
              <label>Lớp</label>
              <input
                type="text"
                name="className"
                value={formData.className}
                onChange={handleInputChange}
                placeholder="Nhập lớp (VD: CNTT1)..."
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              {editingId ? 'Lưu thay đổi' : 'Thêm học sinh'}
            </button>
            {editingId && (
              <button type="button" className="btn btn-secondary" onClick={cancelEdit}>
                Hủy bỏ
              </button>
            )}
          </form>
        </div>

        {/* Right Column: List and Search */}
        <div className="list-section">
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Tìm kiếm theo tên học sinh..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="glass-card">
            <h2 className="card-title">Danh sách học sinh ({students.length})</h2>
            <div className="student-list">
              {students.length > 0 ? (
                students.map((student) => (
                  <div key={student.id} className="student-item">
                    <div className="student-info">
                      <h4>{student.name}</h4>
                      <p>{student.age} tuổi • Lớp {student.className}</p>
                    </div>
                    <div className="student-actions">
                      <button
                        className="action-btn btn-edit"
                        title="Sửa"
                        onClick={() => startEdit(student)}
                      >
                        ✏️
                      </button>
                      <button
                        className="action-btn btn-delete"
                        title="Xóa"
                        onClick={() => deleteStudent(student.id)}
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="empty-state">
                  <p>Không tìm thấy học sinh nào.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentManager;
