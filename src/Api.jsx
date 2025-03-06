import axios from 'axios';

const API_URL = "http://localhost:8080/api/employees";
const SINGLE_EMPLOYEE_URL = "http://localhost:8080/api/employee";

export const getAllEmployees = async () => {
    const response = await axios.get(API_URL);
    return response.data;
}

export const getEmployeeById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
}

export const addEmployee = async (employee) => {
    const response = await axios.post(SINGLE_EMPLOYEE_URL, employee);
    return response.data;
}

export const updateEmployee = async (id, employee) => {
    const response = await axios.put(`${API_URL}/${id}`, employee);
    return response.data;
}

export const deleteEmployee = async (id) => {
    await axios.delete(`${SINGLE_EMPLOYEE_URL}/${id}`);
}