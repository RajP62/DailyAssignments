import logo from './logo.svg';
import './App.css';
import Employee from './components/employee';
import { useState } from 'react';
import Table from "./components/table"

function App() {
  const [employees, setEmployee] = useState([]);
  const getEmployee = (data)=>{
    setEmployee([
      ...employees,data
    ]);
  }
  return (
    <>
    <Employee getEmployee={getEmployee} />
    <Table data={employees}/>
    </>
  );
}

export default App;
