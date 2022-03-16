import React from "react";
/////PERSON TABLE 
const  PersonList = ({ list, handleDelete })=> {
  return (
    <table id="customers" >
      <thead>
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Email</th>
          <th>Password</th>
          <th>About</th>
          <th>Edit</th>
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
              <button onClick={() => handleDelete(x.id)} className='btn bg-btn'>delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default PersonList;