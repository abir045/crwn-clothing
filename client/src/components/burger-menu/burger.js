import React from "react";
import { reveal as Menu } from "react-burger-menu";
import "./burger.scss";
import menu from "../../assets/group3.svg";

class Burger extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div id="outer-container">
        <Menu
          isOpen={false}
          noOverlay
          // noTransition
          width={"100%"}
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
          customBurgerIcon={<img src={menu} />}
        >
          {/* <main id="page-wrap"> */}
          <h3>
            <a id="page-wrap " className="menu-item" href="/">
              Home
            </a>
          </h3>
          <hr
            style={{
              color: "black",
              border: "1px solid black",
              // backgroundColor: color,
            }}
          />
          <h3>
            <a id="page-wrap  " className="menu-item" href="/shop">
              New Arrivals
            </a>
          </h3>
          <hr
            style={{
              color: "black",
              border: "1px solid black",
              // backgroundColor: color,
            }}
          />
          <h3>
            <a id="page-wrap " className="menu-item" href="/shop/mens">
              Men
            </a>
          </h3>
          <hr
            style={{
              color: "black",
              border: "1px solid black",
              // backgroundColor: color,
            }}
          />
          <h3>
            <a id="page-wrap " className="menu-item" href="/shop/womens">
              Women
            </a>
          </h3>
          <hr
            style={{
              color: "black",
              border: "1px solid black",
              // backgroundColor: color,
            }}
          />
          <h3>
            <a id="page-wrap " className="menu-item" href="/shop/hats">
              Accessories
            </a>
          </h3>
          <hr
            style={{
              color: "black",
              border: "1px solid black",
              // backgroundColor: color,
            }}
          />
          <h3>
            <a id="page-wrap " className="menu-item" href="/">
              About
            </a>
          </h3>

          <hr
            style={{
              color: "black",
              border: "1px solid black",
              // backgroundColor: color,
            }}
          />
          {/* &nbsp; */}
          <br />
          <br />
          <h6>
            <a id="page-wrap" className="menu-item" href="/">
              Shipping
              <br />
              Returns/Exchange
              <br />
              Contact
            </a>
          </h6>
        </Menu>
        {/* </Menu> */}
      </div>
    );
  }
}

export default Burger;
