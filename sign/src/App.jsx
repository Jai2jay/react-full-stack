import React, { useState } from 'react';
import SignInForm from './components/SignInForm';
import StudentList from './components/StudentList';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);

  const handleSignIn = (student) => {
    setStudents((prev) => [...prev, { ...student, id: Date.now() }]);
  };

  const handleRemove = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <div className="app-container">
      <h1>Lab Sign-In</h1>
      <SignInForm onSignIn={handleSignIn} existingStudents={students} />
      <StudentList students={students} onRemove={handleRemove} />
    </div>
  );
}

export default App;
