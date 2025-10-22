import React, { useState } from 'react';

const SignInForm = ({ onSignIn }) => {
  const [name, setName] = useState('');
  const [studentId, setStudentId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !studentId) return;

    onSignIn({ name, studentId });
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
        required
      />
      <input 
        type="text" 
        placeholder="Student ID" 
        value={studentId} 
        onChange={(e) => setStudentId(e.target.value)} 
        required
      />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignInForm;
