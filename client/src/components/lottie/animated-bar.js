import "@lottiefiles/lottie-player";
//import * as LottiePlayer from "@lottiefiles/lottie-player";
import React from "react";
import "./lottie.scss";
import json from "../../lf30_editor_rviu5hh6.json";

const AnimatedBar = (props) => {
  return (
    <div className="animated-bar">
      <lottie-player
        autoplay
        //controls
        loop
        speed="0.5"
        mode="bounce"
        src="https://assets1.lottiefiles.com/packages/lf20_cfmqvt5b.json"
        //"https://lottiefiles.com/share/lecz42ld"
        //
        //{{ json }}
        //"../../lf30_editor_rviu5hh6.json"

        style={{ width: "100px", height: "100px" }}
      ></lottie-player>
    </div>
  );
};

export default AnimatedBar;
