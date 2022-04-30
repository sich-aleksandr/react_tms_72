import React from "react";
import styles from "../app.module.css";
import Weather from "../weather"
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { TasksSelectors, TasksActionCreators } from "../../store";
import Authorization from "../authorization"

export const HeaderOriginal = (props) => {

    const { auth } = props;
    return (
        <header className={styles.header}>
        <div className={styles.w3}>
          <Weather />
        </div>
        <div className={styles.w3}>
          <ul>
            <li>
              <Link to="/">Главная страница</Link>
            </li>
            <li>
              <Link to="/todos">ToDo</Link>
            </li>
            <li>
              <Link to="/about">О приложении</Link>
            </li>
          </ul>
        </div>
         {auth ? <button onClick={ props.userAuth }>Logout </button> : <Authorization className={styles.w3} /> }
      </header>
    )
}


const mapStateToProps = (state) => ({
    auth: TasksSelectors.getAuth(state),
  });
  
  const mapDispatchToProps = (dispatch) => ({
    userAuth: () => dispatch(TasksActionCreators.userAuth()),
  });
  
  export const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderOriginal);
  
  

