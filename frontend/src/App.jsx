import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import EmployeeForm from './pages/EmployeeForm'
import EmployeeList from './pages/EmployeeList'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element = {<EmployeeList/>} />
          <Route path="/add" element={<EmployeeForm/>}></Route>
          <Route path="/edit/:id" element={<EmployeeForm/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
