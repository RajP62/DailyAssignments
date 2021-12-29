import logo from './logo.svg';
import './App.css';
import Employee from './components/employee';
import { useEffect, useState } from 'react';
import Table from "./components/table"

function App() {
  const [employees, setEmployee] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:3000/employees").then(res=>res.json()).then(data=>{
      console.log(`data is ${data}`);
      setEmployee(data);
    })
  },[])
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
