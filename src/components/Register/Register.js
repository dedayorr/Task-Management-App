import React, { useState } from "react";
import styles from "./Register.module.css";

const Register = ({ func }) => {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    tel: "",
    password: "",
  });

  const { firstname, lastname, email, tel, password } = state;

  console.log(state);

  function handleChange(e) {
    // const {name, value, type} = e.target;
    setState(e.target.value);
  }
  return (
    <div>
      <form className={styles.formed}>
        <p>REGISTER</p>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={firstname}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={lastname}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="tel"
          placeholder="Tel"
          value={tel}
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
        />
        <button className={styles.btn_two}>Submit</button>
        <div className={styles.regLink} onClick={() => func(true)}>
          Already have an account? Login
        </div>
      </form>
    </div>
  );
};

export default Register;
