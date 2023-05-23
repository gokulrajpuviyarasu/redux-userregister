import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Logout.css";
import { logout, selectUser } from "../features/userSlice";

const Logout = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logoutUser = (e) => {
    dispatch(logout());
  };

  return (
    <form className="logout">
      <h1 className="home__name">Welcome👋</h1>
      <table>
        <tbody>
          <tr className="user__name">
            <td>Name:</td>
            <td>{user.name}✔️</td>
          </tr>
          <tr className="user__name">
            <td>Email:</td>
            <td>{user.email}</td>
          </tr>
         
        </tbody>
      </table>
      <button className="logout__button" onClick={(e) => logoutUser(e)}>
        Log out
      </button>
    </form>
  );
};

export default Logout;
