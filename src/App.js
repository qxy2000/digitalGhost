import logo from './logo.svg';
import './App.css';
import React from "react";
import ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import { TweenMax, TimelineMax, gsap } from "gsap"; // Also works with TweenLite and TimelineLite
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

import GhostIntro from "./components/GhostIntro";
import Monument from './components/Monument';

// import "./styles/style.scss";
import { CSSRulePlugin, CSSPlugin } from "gsap/all";
// import "imports-loader?define=>false!scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
gsap.registerPlugin(CSSPlugin, CSSRulePlugin);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.controller = new ScrollMagic.Controller({});
  }

  componentDidMount() {
    // gsap.registerPlugin(CSSPlugin);
    // ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
    TweenMax.defaultOverwrite = false;

    let timeline = new TimelineMax();
    //滑动部分，待补充
  }

  render() {
    return (
      <div className="App">
        <section>
          <Monument />
        </section>
      </div>
    );
  }
}


export default App;
