import React from "react";
import "./authorization.module.css";
import { Form } from "./Form";
import { connect } from "react-redux";
import { TasksSelectors, TasksActionCreators } from "../../store";

export const LoginContext = React.createContext({ });

 class AuthorizationOriginal extends React.Component {
  state = {
    user: {
      login: "",
      pass: "",
    },
    isformReady: false,
  };

  onHandleForm = ({ target }) => {
    const { user } = this.state;
    if (target.id === "login") {
      this.setState({ user: { ...user, login: `${target.value}` } });
    }
    if (target.id === "pass") {
      this.setState({ user: { ...user, pass: `${target.value}` } });
    }
  };

  isFormOk = () => {
    const { login, pass } = this.state.user;
    if ( login ==='admin' && pass === 'admin' ) {
      this.props.userAuth();
    } else {
      this.setState({ isformReady: true });
      alert('Pass or login don"t mutch')
    }
  }

  render() {

    const {  isformReady } = this.state;
    const { login, pass, } = this.state.user;

    return (
        <Form onHandleForm={this.onHandleForm} isFormOk={this.isFormOk} isformReady={isformReady} login ={login} pass={pass} />
    );
  }
}


const mapStateToProps = (state) => ({
  auth: TasksSelectors.getAuth(state),
});

const mapDispatchToProps = (dispatch) => ({
  userAuth: () => dispatch(TasksActionCreators.userAuth()),
});

const Authorization = connect(mapStateToProps, mapDispatchToProps)(AuthorizationOriginal);


export default Authorization;
