import React from "react";
import ScrollButton from "react-scroll-button";

const ScrollComponent = () => {
  return (
    <ScrollButton
      behavior={"smooth"}
      buttonBackgroundColor={"red"}
      iconType={"arrow-down"}
      style={{ fontSize: "24px" }}
    />
  );
};

export default ScrollComponent;
