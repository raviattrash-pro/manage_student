import React from 'react'; // Add this line
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/add-student" element={<StudentForm />} />
          <Route path="/edit-student/:id" element={<StudentForm />} />
          {/* Add routes for attendance, grades, etc., as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;