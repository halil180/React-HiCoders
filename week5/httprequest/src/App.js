import React, { useEffect, useState } from "react";
import AddPerson from "./components/AddPerson";
import PersonList from "./components/PersonList";
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
  const handleDelete = (pPersonId) => {
    fetch("http://localhost:8000/employee/" + pPersonId, {
      method: "DELETE",
    }).then(() => getData());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const personList = { firstName, lastName, email, password, about };
    fetch("http://localhost:8000/employee", {
      method: "POST", ////use the POST method to save the infos in the db
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(personList),
    }).then(() => getData());
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
  return (
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
          />
        </div>
        <div className="col-lg-8 col-md-12 col-sm-12 ">
          <h1 className="bg-header text-white">Person List</h1>
          <div >
            <PersonList list={list} handleDelete={handleDelete} />
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
  );
};
export default App;