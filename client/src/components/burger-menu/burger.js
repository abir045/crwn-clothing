import React from "react";
import { reveal as Menu } from "react-burger-menu";
import "./burger.scss";

class Burger extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div id="outer-container">
        <Menu
          width={"100%"}
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
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
          <h3>
            <a id="page-wrap" className="menu-item" href="/">
              Shipping Returns/Exchange
              <br />
              Contact
            </a>
          </h3>
          {/* 
          <a onClick={this.showSettings} className="menu-item--small" href="">
            Settings
          </a> */}
          {/* </main> */}
        </Menu>
        {/* </Menu> */}
      </div>
    );
  }
}

export default Burger;
