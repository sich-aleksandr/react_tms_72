import React from "react";
import "./add-todo.css";

export default class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  onValueChange = ({target}) => {
    this.setState({text: target.value})
  }

  onAdd = () => {
    this.props.onAdd(this.state.text)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div className="add-panel">
        <form>
          <input type="text" className="add-input" placeholder="What we need Todo?" 
          onChange={this.onValueChange}
          value={this.state.text}
          />
          <button type="button"
          onClick={this.onAdd}>
            Add
          </button>
        </form>
      </div>
    );
  }

}  
