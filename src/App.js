import React from "react";
import Login from "./Components/Login";
import Register from "./Components/Register";
import "./App.css";

import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import Logout from "./Components/Logout";

const App = () => {
  const user = useSelector(selectUser);
  console.log(user);
  <div>
  <Register/>
  </div>

  return <div>{user  ? <Logout /> : <Login />}</div>;
};

export default App;