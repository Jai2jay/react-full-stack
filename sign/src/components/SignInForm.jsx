import React, { useState } from 'react';

const SignInForm = ({ onSignIn, existingStudents }) => {
  const [name, setName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Trim whitespace for clean validation
    const trimmedName = name.trim();
    const trimmedId = studentId.trim();

    if (!trimmedName || !trimmedId) {
      setError('Please fill out both fields.');
      return;
    }

    // Check for duplicates (based on student ID)
    const duplicate = existingStudents.some(
      (student) => student.studentId === trimmedId
    );

    if (duplicate) {
      setError('This student ID is already signed in.');
      return;
    }

    // Pass data up if valid
    onSignIn({ name: trimmedName, studentId: trimmedId });

    // Clear fields
    setName('');
    setStudentId('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Student ID"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
      />
      <button type="submit">Sign In</button>

      {error && <p style={{ color: 'red', marginTop: '8px' }}>{error}</p>}
    </form>
  );
};

export default SignInForm;
