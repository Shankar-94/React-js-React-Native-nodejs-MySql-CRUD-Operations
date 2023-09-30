import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Read() {
    const {id} = useParams();
    const [student, setStudent] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:8080/Read/"+id)
        .then(res => {
            console.log(res)
            setStudent(res.data[0])
        })
        .catch(err => console.log(err))
    },[])
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <h2>Student Detail</h2>
            <h2>Id: {student.id}</h2>
            <h2>Name: {student.name}</h2>
            <h2>Email: {student.emai}</h2>
            <Link to="/Home" className='btn btn-primary me-2'>Back</Link>
            <Link to={`/Edit/${student.id}`} className='btn btn-info'>Edit</Link>
        </div>
    </div>
  )
}

export default Read