import React, { useEffect, useState } from "react";
import "./App.css";
import Details from "./components/Details";
import { users } from "./data";
import { getUser } from "./Api/api";

function App() {
  const [users, setUsers] = useState("");
  useEffect(() => {
    getUser((callback) => {
      console.log(callback);
      setUsers(callback);
    });
  }, []);
  return (
    <div className="App container">
      {users != ""
        ? users.members.map((data) => <Details users={data} />)
        : null}
    </div>
  );
}

export default App;
