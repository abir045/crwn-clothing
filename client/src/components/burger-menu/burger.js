import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./burger.scss";
import menu from "../../assets/group3.svg";

class Burger extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu
        noOverlay
        disableAutoFocus
        isOpen={false}
        //width={"100%"}
        customBurgerIcon={<img src={menu} />}
      >
        {/* <h3> */}
        <a className="menu-item" href="/">
          Home
        </a>
        {/* </h3> */}
        <hr
          style={{
            color: "black",
            border: "1px solid black",
          }}
        />
        {/* <h3> */}
        <a className="menu-item" href="/shop">
          New Arrivals
        </a>
        {/* </h3> */}
        <hr
          style={{
            color: "black",
            border: "1px solid black",
          }}
        />
        {/* <h3> */}
        <a className="menu-item" href="/shop/mens">
          Men
        </a>
        {/* </h3> */}
        <hr
          style={{
            color: "black",
            border: "1px solid black",
          }}
        />
        {/* <h3> */}
        <a className="menu-item" href="/shop/womens">
          Women
        </a>
        {/* </h3> */}
        <hr
          style={{
            color: "black",
            border: "1px solid black",
          }}
        />
        {/* <h3> */}
        <a className="menu-item" href="/shop/hats">
          Accessories
        </a>
        {/* </h3> */}
        <hr
          style={{
            color: "black",
            border: "1px solid black",
          }}
        />
        {/* <h3> */}
        <a className="menu-item" href="/">
          About
        </a>
        {/* </h3> */}

        <hr
          style={{
            color: "black",
            border: "1px solid black",
          }}
        />

        <br />
        <br />
        {/* <h6> */}
        <a className="menu-item" href="/">
          Shipping
          <br />
          Returns/Exchange
          <br />
          Contact
        </a>
        {/* </h6> */}
      </Menu>
    );
  }
}

export default Burger;
