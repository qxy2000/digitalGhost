import React from "react";
import leftTombstone1 from '../assets/lefttombstone/lefttombstone1.svg'

class GhostIntro extends React.Component {

    myfunction() {
      console.log("CLICKED");
    }
    
    render() {
      return (
        <div>
          <h1>Hello, {this.props.name}</h1>
          <button><img src={leftTombstone1} alt="my image" onClick={this.myfunction} /></button>
        </div>
      )
      
    }
  }

export default GhostIntro;