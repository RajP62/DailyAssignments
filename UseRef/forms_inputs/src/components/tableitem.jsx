export default ({employee})=>{
    return <tr>
         <td>{employee.username}</td>
         <td>{employee.age}</td>
         <td>{employee.address}</td>
         <td>{employee.department}</td>
         <td>{employee.salary}</td>
         <td>{(employee.marriage).toString()}</td>
     </tr>
}