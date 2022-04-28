import React from "react";

export  class Cork extends React.Component {
    render() {
        console.log(this.props);
      const { lable1, lable2 } = this.props;
      return (
        <>
        <h2>{lable1}</h2>
        <h3>{lable2}</h3> 
        </>
    );
    }
  }
