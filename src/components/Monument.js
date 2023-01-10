import React from "react";
import './Monument.less'
import leftTombstone1 from '../assets/lefttombstone/lefttombstone1.png'

class Monument extends React.Component {

    myfunction() {
        console.log("CLICKED");
    }

    render() {
      return (
        <div className="monumentBlock">
             <h1>Hello</h1>
             {/* <div className="tombstone1">
                <button><img src={leftTombstone1} alt="my image" onClick={this.myfunction} /></button>
             </div> */}
        </div>
      )
    }
    
}

export default Monument;