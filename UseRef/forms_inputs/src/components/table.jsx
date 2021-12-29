import { useRef, useState } from 'react'
import EmployeeRow from './tableitem'
import { v4 as uuidv4 } from 'uuid';
export default ({data})=>{
    console.log(data)
    return <>
    <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Marital Status</th>
        </tr>
        </thead>
        <tbody>
        {data.map(el => 
            <EmployeeRow key={uuidv4()} employee={el}/>
        )}
        </tbody>
    </table>
    </>
}