import React from "react";
import { connect } from "react-redux";
import { TasksSelectors, TasksActionCreators } from "../store";
// import Weather from "./weather"
import Authorization from "./authorization"
import {Link, Routes, Route } from "react-router-dom";
import styles from "./app.module.css";
import About from "../Commponents/About";
import Todo from "../Commponents/Todo/app";
import { Cork } from "./common/cork"
import { TodoOneItem } from "./Todo/todo-one-item"

const m1 = "You don't have access to this page";
const m2 = 'Please lon In';


function AppOriginal(props) {
   
  const { auth } = props;
  return (
    <div className="App">
      <header className={styles.header}>
          <div className={styles.w3}>Weather</div>
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
        <main>
          <Routes>
            <Route path="/" element={<h2>
              Главная страница
            </h2>} />
            <Route path="/todos" element={auth ? <Todo /> : <Cork lable1={m1} lable2={m2} />} />
            <Route path="/todo/:Id" element={<TodoOneItem />} />
            <Route path="/about" element={<About />} />
            {/* <Weather /> */}
          </Routes>
        </main>
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: TasksSelectors.getAuth(state),
});

const mapDispatchToProps = (dispatch) => ({
  userAuth: () => dispatch(TasksActionCreators.userAuth()),
});

export const App = connect(mapStateToProps, mapDispatchToProps)(AppOriginal);


export default App;
