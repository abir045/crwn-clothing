import React, { Component } from "react";
import { HamburgerCollapse } from "react-animated-burgers";

class Animated extends Component {
  state = {
    isActive: false,
  };

  toggleButton = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  };

  render() {
    return (
      <HamburgerCollapse
        isActive={this.state.isActive}
        toggleButton={this.toggleButton}
        //buttonColor="#FFBC67"
        barColor="black"
      />
    );
  }
}

export default Animated;
