import React, { useState } from "react";
import "./authorization.module.css";
import { Form } from "./Form";
import { useDispatch } from "react-redux";
import { TasksActionCreators } from "../../store";

export const LoginContext = React.createContext({ });

const Authorization = (props) => {

  const [user, setUser] = useState({
    login: "",
    pass: "",
  });

  const dispatch = useDispatch();
  const userAuth = () => dispatch(TasksActionCreators.userAuth());

  const [isformReady, SetIsformReady] = useState(false)

  const onHandleForm = ({ target }) => {
    const { login, pass } = user;
    if (target.id === "login") {
      setUser({ pass, login: `${target.value}` });
    }
    if (target.id === "pass") {
      setUser({ login, pass: `${target.value}` });
    }
  };

  const isFormOk = () => {
    const { login, pass } = user;
    if ( login ==='admin' && pass === 'admin' ) {
      userAuth();
    } else {
      SetIsformReady(true);
      alert('Pass or login don"t mutch')
    }
  }
    const { login, pass, } = user;

    return (
        <Form onHandleForm={onHandleForm} isFormOk={isFormOk} isformReady={isformReady} login ={login} pass={pass} />
    );
}

export default Authorization;
