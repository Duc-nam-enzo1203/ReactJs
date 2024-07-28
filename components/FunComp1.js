import React from "react";

//Props có thể là danh sách nhưng ít dùng
export default function FunComp1({ renderData, renderStudents }) {
  return (
    <div className="alert alert-danger">
      <p>Danh sách thuộc tính:</p>
      <p>Data: {renderData}</p>
      <p>Students list: {renderStudents}</p>
    </div>
  );
}
