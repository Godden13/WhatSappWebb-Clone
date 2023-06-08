import React from "react";
import Styles from "../../styles/Login.module.css";
import { BsPersonFill } from "react-icons/bs";

const Login = () => {
  return (
    <form className={Styles.loginForm}>
      <div className={Styles.loginheader}>
        <div className={Styles.login__headericon}>
          <BsPersonFill className={Styles.loginIcon} />
        </div>
      </div>
      <div className={Styles.login__innerContainer}>
        <div className={Styles.form_container}>
          <label className={Styles.label__login} htmlFor="name">
            Email:
          </label>
          <input type="email" id="email" placeholder="enter Email" name="email" className={Styles.login__input} 
          required/>
        </div>
        <div className={Styles.form_container}>
          <label className={Styles.label__login} htmlFor="name">
            Password:
          </label>
          <input type="password" id="password" name="password" placeholder="enter your password here"  className={Styles.login__input}
          required/>
        </div>

        <div className={Styles.bottom__container}>
          <p className={Styles.redirectp}>Do you already have an account?,Signin </p>
          <button type="submit" className={Styles.button}>
            Register
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
