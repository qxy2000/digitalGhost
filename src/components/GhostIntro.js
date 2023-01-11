import React from "react";
import "./GhostIntro.less"
import {doubanUsers} from '../data/doubanData'
import { Maps } from "./Map.js";
import {ChartRadialBar} from './ChartRadialBar.js'
import { AntvChart } from "./AntvChart";

class GhostIntro extends React.Component {

    myfunction() {
      console.log("CLICKED");
    }

    render() {
      console.log(this.props.isShow)
      console.log(this.props.soulIndex)
      console.log(doubanUsers[this.props.soulIndex])
      const singleSoulData = doubanUsers[this.props.soulIndex]
      const singleSoulRead = [
        {type: "读过", num: singleSoulData.hRead, list: singleSoulData.hReadList},
        {type: "想读", num: singleSoulData.wRead, list: singleSoulData.wReadList},
        {type: "在读", num: singleSoulData.iRead, list: singleSoulData.iReadList},
      ]
      const singleSoulWatch = [
        {type: "看过", num: singleSoulData.hWatch, list: singleSoulData.hWatchList},
        {type: "想看", num: singleSoulData.wWatch, list: singleSoulData.wWatchList},
        {type: "在看", num: singleSoulData.iWatch, list: singleSoulData.iWatchList},
      ]
      const singleSoulListen = [
        {type: "听过", num: singleSoulData.hListen, list: singleSoulData.hListenList},
        {type: "想听", num: singleSoulData.wListen, list: singleSoulData.wListenList},
        {type: "在听", num: singleSoulData.iListen, list: singleSoulData.iListenList},
      ]
      if(this.props.isShow === "inline"){
        return (
          <div className="soulIntroPage">
            {/* soulIntroPage */}
            <div className="leftSection"></div>
            <div className="rightSection">
                <div className="soulMap">
                  <Maps mapData = {doubanUsers[this.props.soulIndex].mapData}></Maps>
                </div>
                <div className="soulLike">
                    <div className="soulLikeBook">
                      <AntvChart renderChart = {ChartRadialBar} data = {singleSoulRead} dataType = "书籍"></AntvChart>
                    </div>
                    <div className="soulLikeMovie">
                      <AntvChart renderChart = {ChartRadialBar} data = {singleSoulWatch} dataType = "电影"></AntvChart>
                    </div>
                    <div className="soulLikeMusic">
                      <AntvChart renderChart = {ChartRadialBar} data = {singleSoulListen} dataType = "音乐"></AntvChart>
                    </div>
                </div>
            </div>
          </div>
        )
      }
      // return (
      //     <div className="soulIntroPage">
      //       soulIntroPage
      //     </div>
      // )
      
    }
  }

export default GhostIntro;