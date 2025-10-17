import React, { useState, useEffect } from "react";

const StudentInfo = ({ student }) => {
  const [isWide, setIsWide] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsWide(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerStyle = {
    display: "flex",
    flexDirection: isWide ? "row" : "column",
    gap: "1rem",
    padding: "1rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    maxWidth: "600px",
    margin: "auto",
    backgroundColor: "#fafafa",
  };

  const itemStyle = {
    flex: 1,
    padding: "0.5rem",
    borderBottom: isWide ? "none" : "1px solid #ddd",
  };

  return (
    <div style={containerStyle}>
      <div style={itemStyle}>
        <strong>Name:</strong> {student.name}
      </div>
      <div style={itemStyle}>
        <strong>Email:</strong> {student.email}
      </div>
      <div style={itemStyle}>
        <strong>Course:</strong> {student.course}
      </div>
      <div style={itemStyle}>
        <strong>Year:</strong> {student.year}
      </div>
    </div>
  );
};

// Example usage:
// const student = {
//   name: "Jane Doe",
//   email: "jane.doe@example.com",
//   course: "Computer Science",
//   year: "3rd Year",
// };

// <StudentInfo student={student} />

export default StudentInfo;