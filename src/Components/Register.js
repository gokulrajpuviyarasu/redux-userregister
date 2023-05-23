import React, { useState } from "react";
import "./Register.css";

import { login, register } from "../features/userSlice";
import { useDispatch } from "react-redux";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      register({
        name: name,
        email: email,
        password: password,
        registerin: true,
      })
    );

    setEmail("");
    setPassword("");
  };

  return (
    <div className="register">
      <form className="register__form" onSubmit={(e) => handleSubmit(e)}>
        <h1> Register Here 🖋️</h1>
        <input
          type="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="register__btn">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;