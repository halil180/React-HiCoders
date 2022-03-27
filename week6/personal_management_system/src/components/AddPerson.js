import React from "react";
///FORM SECTION
const  AddPerson = ({
handleSubmit,
firstName,
setfirstName,
setlastName,
lastName,
setemail,
email,
password,
about,
setabout,
setpassword,
handleEditSave,isEditEnabled
}) =>{
    return (
    <>
        <div className="col-12 ">
        <h1 className="bg-header text-white">Add Person</h1>
        <form onSubmit={handleSubmit}>
            <input
            className="col-12  p-2 m-1"
            type="text"
            placeholder="First Name"
            required
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}/>
            <input
            className="col-12 p-2 m-1"
            type="text"
            placeholder="Last Name"
            required
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}/>
            <input
            className="col-12 p-2 m-1"
            type="text"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setemail(e.target.value)} />
            <input
            className="col-12 p-2 m-1"
            type="password"
            placeholder="Password"
            name="password" autoComplete="on"
            required
            value={password}
            onChange={(e) => setpassword(e.target.value)}/>
            <textarea
            className="col-12 p-2 m-1"
            placeholder="About"
            cols="35"
            rows="10"
            required
            value={about}
            onChange={(e) => setabout(e.target.value)}>
            </textarea>
            <div className="text-end  col-7 m-2 ">
            {isEditEnabled ? null : <button type="submit" className="bg-btn btn">Add</button> }
            {isEditEnabled ?  <button  type="button" onClick={handleEditSave} className="bg-btn btn">Save edit</button> : null}
            </div>
        </form>
        </div>
    </>
);
}
export default AddPerson;