import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

function StudentList() {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/students', {
      auth: { username: 'admin', password: 'password' }
    })
      .then(response => {
        setStudents(response.data);
        setError(null);
      })
      .catch(error => {
        setError(error.message || 'Failed to fetch students');
        console.error('API Error:', error.response ? error.response.status : error.message);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`/api/students/${id}`, {
      auth: { username: 'admin', password: 'password' }
    })
      .then(() => setStudents(students.filter(s => s.id !== id)))
      .catch(error => console.error('Delete Error:', error));
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Students</h2>
      <Link to="/add-student"><Button variant="primary">Add Student</Button></Link>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Roll Number</th>
            <th>DOB</th>
            <th>Address</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.rollNumber}</td>
              <td>{student.dateOfBirth}</td>
              <td>{student.address}</td>
              <td>{student.gender}</td>
              <td>{student.phone}</td>
              <td>{student.email}</td>
              <td>
                <Link to={`/edit-student/${student.id}`}><Button variant="warning" size="sm">Edit</Button></Link>
                <Button variant="danger" size="sm" onClick={() => handleDelete(student.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default StudentList;