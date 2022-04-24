import React from "react";
import styles from "./authorization.module.css";

export const Form = ({ onHandleForm, isFormOk, isformReady, login, pass }) => {
  return (
    <div>
      <form>
        <input type="" placeholder="Login" id="login" onChange={onHandleForm} />
        {login.length < 5 && isformReady && (
          <span className={styles.red}>Минимальная длинна поля 5 символов</span>
        )}
        <input
          type=""
          placeholder="Password"
          id="pass"
          onChange={onHandleForm}
        />
        {pass.length < 5 && isformReady && (
          <span className={styles.red}>Минимальная длинна поля 5 символов</span>
        )}
        <div>
          <button type="button" onClick={isFormOk}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
