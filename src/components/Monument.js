import React from "react";
import './Monument.less'
import leftTombstone1 from '../assets/lefttombstone/lefttombstone1.png'
import soulImage from '../assets/soul.png'
import {doubanUsers} from '../data/doubanData'
import GhostIntro from "./GhostIntro";

class Monument extends React.Component {
    constructor () {
        super();
        this.state = {
          showModal: "none",
          soulIndex: 0,
        };
        
        // this.handleOpenModal = this.handleOpenModal.bind(this);
        // this.handleCloseModal = this.handleCloseModal.bind(this);
      }
      
      handleOpenModal (index) {
        console.log(index)
        this.setState({ 
                showModal: "inline",
                soulIndex: index - 1
        });
      }
      
      handleCloseModal () {
        this.setState({ showModal: "none" });
      }

    myfunction() {
        console.log("CLICKED");
    }

    render() {
      return (
        <div className="monumentBlock">
             {/* <h1>Hello</h1> */}
             <div className="tombstone1">
                <img src={leftTombstone1} alt="my image" onClick={this.handleOpenModal.bind(this, 1)} />
                <div className = "stone1-text1">{doubanUsers[0].name}</div>
                <div className = "stone1-text2">{doubanUsers[0].lifeTimeStr}</div>
                <div className = "soul1">
                    <img className = "soul-img" src={soulImage} alt="" />
                </div>
             </div>
             <div style={{display: this.state.showModal}}>
                <div className="singleSoulIntroPage">
                    <a href="#" className="close" onClick={this.handleCloseModal.bind(this)}/>
                    <GhostIntro isShow = {this.state.showModal} soulIndex = {this.state.soulIndex}></GhostIntro>
                </div>
             </div>
        </div>
      )
    }
    
}

export default Monument;