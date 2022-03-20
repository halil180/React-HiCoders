import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPerson from "./components/AddPerson";
import PersonList from "./components/PersonList";
import PersonDetail from './components/PersonDetail'
// ----NOTE----TO USE THE JSON-SERVER TYPE THE FOLLOWING COMMAND IN THE TERMINAL ;
////json-server --watch data/db.json --port 8000
const App = () => {
  /////userlist
  const [list, setList] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  ////input states
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [about, setabout] = useState("");
  const [userId, setuserId] = useState(); ///this state helps us to get the user's id of the clicked user
  const [isEditEnabled, setisEditEnabled] = useState(false); ///if you click the edit symbol the "save edit" button  will appear else add button will be active
  const [userDetail,setuserDetail] = useState([])
  const handleDelete = (pPersonId) => {
    fetch("http://localhost:8000/employee/" + pPersonId, {
      method: "DELETE",
    }).then(() => getData());
  };
  const cleanInputField = () => {
    ////////this will clear the input fields
    setfirstName("");
    setlastName("");
    setemail("");
    setpassword("");
    setabout("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const personList = { firstName, lastName, email, password, about };
    fetch("http://localhost:8000/employee", {
      method: "POST", ////use the POST method to save the infos in the db
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(personList),
    }).then(() => getData());
    cleanInputField();
  };
  /////GET DATA WHEN THE PAGE LOADS (BUT FIRST YOU HAVE TO TYPE json-server --watch data/db.json --port 8000 IN THE TERMINAL )
  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/employee`);
      const data = await response.json();
      setList(data);
      setisLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const handleEdit = (id) => {
    // when you click the edit symbol you will get back to the entered input data to change the user's data
    setisEditEnabled(true);
    setfirstName(id.firstName);
    setlastName(id.lastName);
    setemail(id.email);
    setpassword(id.password);
    setabout(id.about);
  };
  const handleEditSave = async () => {
    setisEditEnabled(false);
    const editedPeronList = { firstName, lastName, email, password, about };
    await fetch("http://localhost:8000/employee/" + userId, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedPeronList),
    }).then(() => getData());
    cleanInputField();
  };
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={
    <div className="App container mt-2">
    <div className="row">
      <div className="addPerson  col-sm-12 col-md-12 col-lg-4  d-flex justify-content-center align-items-center flex-column">
        <AddPerson
          handleSubmit={handleSubmit}
          firstName={firstName}
          setfirstName={setfirstName}
          setlastName={setlastName}
          lastName={lastName}
          setemail={setemail}
          email={email}
          password={password}
          about={about}
          setabout={setabout}
          setpassword={setpassword}
          handleEdit={handleEdit}
          handleEditSave={handleEditSave}
          isEditEnabled={isEditEnabled}
        />
      </div>
      <div className="col-lg-8 col-md-12 col-sm-12 ">
        <h1 className="bg-header text-white">Person List</h1>
        <div id="table-flow">
          <PersonList 
            list={list}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            setuserId={setuserId} 
            setuserDetail={setuserDetail}
          />
          {isLoading && (
            <h1 className="text-white">
              Failed to fetch the server, run json server with the port number
              8000 in the terminal{" "}
            </h1>
          )}
        </div>
      </div>
    </div>
  </div>
      } ></Route>
      <Route path="detail" element={<PersonDetail userDetail={userDetail}/>}> </Route>
    </Routes>
    </BrowserRouter>
  );
};
export default App;
