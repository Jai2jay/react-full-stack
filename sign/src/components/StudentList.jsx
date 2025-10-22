import React from 'react';

const StudentList = ({ students, onRemove }) => {
  return (
    <div>
      <h2>Signed-In Students</h2>
      {students.length === 0 ? (
        <p>No students signed in yet.</p>
      ) : (
        <ul>
          {students.map(student => (

            
            <li key={student.id}>
              <strong>{student.name}</strong> (ID: {student.studentId})
              <button 
                onClick={() => onRemove(student.id)} 
                style={{ marginLeft: '10px' }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StudentList;
