import React, { useEffect, useState } from 'react'
import { addEmployee, getEmployeeById, updateEmployee } from '../Api';
import { useNavigate, useParams } from "react-router-dom";

const EmployeeForm = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const[employee, setEmployee] = useState({
        name: "",
        dateOfBirth: "",
        company: "",
        department: "",
        gender: ""
    });

    useEffect(() => {
        if(id){
            fetchEmployee()
        }
    }, [id])

    const fetchEmployee = async () => {
        const data = await getEmployeeById(id);
        setEmployee(data);
    }

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting Employee:", employee);  // Debugging line to check the object
        if(id) {
            await updateEmployee(id, employee)
        } else{
            await addEmployee(employee);
        }
        navigate("/");
    };

  return (
    <div className='container mx-auto p-5'>
        <h2 className='text-xl font-bold mb-4'>{id ? "Edit Employee" : "Add Employee"}</h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
            <input type="text" name="name"  value={employee.name} onChange={handleChange} placeholder='Name' className="border p-2 w-full" required/>
            <input type="text" name="dateOfBirth"  value={employee.dateOfBirth} onChange={handleChange} className="border p-2 w-full" required/>
            <input type="text" name="company" value={employee.company} onChange={handleChange} placeholder='Company' className="border p-2 w-full" required/>
            <input type="text" name="department"  value={employee.department} onChange={handleChange} placeholder='Department' className="border p-2 w-full" required/>
            <select name="gender" value={employee.gender} onChange={handleChange} className="border p-2 w-full" required>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
                <button type='submit' className='bg-green-500 text-white px-3 py-2 rounded'>{id ? "Update" : "Add"}</button>
        </form>

    </div>
  )
}

export default EmployeeForm