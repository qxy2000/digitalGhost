import React from "react";

class Monument extends React.Component {
  
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
}

export default Monument;