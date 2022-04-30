import React from "react";
import { connect } from "react-redux";
import { TasksSelectors, TasksActionCreators } from "../store";
import { Routes, Route } from "react-router-dom";
import About from "../Commponents/About";
import Todo from "../Commponents/Todo/app";
import { Cork } from "./common/cork"
import { TodoOneItem } from "./Todo/todo-one-item"
import { Header } from "./Header/Header";

const m1 = "You don't have access to this page";
const m2 = 'Please lon In';

function AppOriginal(props) {
   
  const { auth } = props;
  return (
    <div className="App">
      <Header />
        <main>
          <Routes>
            <Route path="/" element={<h2>
              Главная страница
            </h2>} />
            <Route exact path="/todos" element={auth ? <Todo /> : <Cork lable1={m1} lable2={m2} />} />
            <Route exact path="/todo/:Id" element={<TodoOneItem />} />
            <Route exact path="/about" element={<About />} />
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
