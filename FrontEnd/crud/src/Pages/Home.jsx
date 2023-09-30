import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';


function Home() {
    const [data, setData] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8080/")
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    },[])

    const handleDelete = ((id) =>{
        axios.delete("http://localhost:8080/Delete/"+id)
        .then(res => {
            location.reload();
        })
        .catch(err => console.log(err))
    })
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <h2>
                Student List
            </h2>
            <div className='d-flex justify-content-end'>
                <Link to="/Create" className='btn btn-success'> 
                    Create +
                </Link>
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>
                            Id
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((crud, index) =>{
                        return <tr key={index}>
                            <td>
                                {crud.id}
                            </td>
                            <td>
                                {crud.name}
                            </td>
                            <td>
                                {crud.emai}
                            </td>
                            <td>
                                <Link to={`/Read/${crud.id}`} className='btn btn-sm btn-info'>Read</Link>
                                <Link to={`/Edit/${crud.id}`}className='btn btn-sm btn-primary mx-2'>Edit</Link>
                                <button onClick={() => handleDelete(crud.id)} className='btn btn-sm btn-danger'>Delete</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Home