import "@lottiefiles/lottie-player";
//import * as LottiePlayer from "@lottiefiles/lottie-player";
import React from "react";
import "./lottie.scss";
//import json from "../../lf30_editor_rviu5hh6.json";
import "../../42807-funky-loader.json";

const AnimatedBar = (props) => {
  return (
    <div className="animated-bar">
      <lottie-player
        autoplay
        //controls
        loop
        speed="1"
        mode="bounce"
        src="https://assets4.lottiefiles.com/packages/lf20_jfchliut.json"
        //"https://assets1.lottiefiles.com/packages/lf20_cfmqvt5b.json"
        //"../../42807-funky-loader.json"
        //
        //"https://lottiefiles.com/share/lecz42ld"
        //
        //{{ json }}
        //"../../lf30_editor_rviu5hh6.json"

        style={{ width: "300px", height: "300px" }}
      ></lottie-player>
    </div>
  );
};

export default AnimatedBar;
