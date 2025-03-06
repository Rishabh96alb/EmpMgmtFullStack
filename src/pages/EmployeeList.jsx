import React, { useEffect, useState } from 'react'
import { deleteEmployee, getAllEmployees } from '../Api';
import { Link } from 'react-router-dom';

const EmployeeList = () => {
    const[employees, setEmployees] = useState([]);

    useEffect(() => {
       fetchEmployees();
    })

    const fetchEmployees = async () => {
        const data = await getAllEmployees();
        setEmployees(data);
    }

    const handleDelete = async (id) => {
        await deleteEmployee(id);
        fetchEmployees();
    }

  return (
    <div className='container mx-auto p-5'>
        <h1 className='text-2xl font-bold mb-4'>Employee List</h1>
        <Link to="/add" className="bg-blue-500 text-white px-3 py-2 rounded mb-3 inline-block">
        Add Employee
        </Link>
        <table className='table-auto w-full border-collapse border border-gray-400'>
            <thead>
                <tr className='bg-gray-200'>
                    <th className="border p-2">ID</th>
                    <th className="border p-2">Name</th>
                    <th className="border p-2">Date Of Birth</th>
                    <th className="border p-2">Gender</th>
                    <th className="border p-2">Company</th>
                    <th className="border p-2">Department</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((emp) => (
                    <tr key={emp.id} className='border'>
                        <td className='border p-2'>{emp.id}</td>
                        <td className='border p-2'>{emp.name}</td>
                        <td className='border p-2'>{emp.dateOfBirth}</td>
                        <td className='border p-2'>{emp.gender}</td>
                        <td className='border p-2'>{emp.company}</td>
                        <td className='border p-2'>{emp.department}</td>
                      
                            <Link to={`/edit/${emp.id}`} className="bg-yellow-500 text-white px-2 py-1 rounded mr-6">
                            Edit
                            </Link>
                            <button onClick={()=> handleDelete(emp.id)} className='bg-red-500 text-white px-2 py-1 rounded'>
                                Delete
                            </button>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default EmployeeList