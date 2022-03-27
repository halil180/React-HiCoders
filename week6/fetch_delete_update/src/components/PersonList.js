import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'
/////PERSON TABLE 
const  PersonList = ({ list, handleDelete,handleEdit,setuserId })=> {
  return (
    <table id="customers">
      <thead>
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Email</th>
          <th>Password</th>
          <th>About</th>
          <th colSpan={2}>Edit</th>
        </tr>
      </thead>
      <tbody>
        {list.map((x) => (
          <tr key={x.id}>
            <td>{x.firstName}</td>
            <td>{x.lastName}</td>
            <td>{x.email}</td>
            <td>{x.password}</td>
            <td>{x.about}</td>
            <td>
              {" "}
              <button onClick={() => handleDelete(x.id)} className='btn bg-btn'><FontAwesomeIcon icon={faTrash} /></button>
            </td>
            <td>  <button onClick={() => {handleEdit(x);setuserId(x.id)} } className='btn bg-btn'><FontAwesomeIcon icon={faEdit} /></button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default PersonList;