import React from "react";
import styles from "./Login.module.css";
import logo from "../../logo.png";
import { FcGoogle } from "react-icons/fc";

function Login() {
  return (
    <div className={styles.login}>
      <div className="container h-100  d-flex justify-content-center align-items-center">
        <div className={styles.login_box}>
          <img src={logo} alt="" />
          <h3>Welcome Back</h3>
          <form>
            <div className={styles.user_box}>
              <input required="" name="" type="text" placeholder="Email" />
            </div>
            <div className={styles.user_box}>
              <input
                required=""
                name=""
                type="password"
                placeholder="Password"
              />
            </div>
            <a href="/#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Sign In
            </a>
          </form>
          <p>
            Don't have an account?
            <a href="/#" className={styles.a2}>
              Sign up
            </a>
          </p>
          <button className={styles.google_btn}>
            <FcGoogle />
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
