import React from "react";
import { reveal as Menu } from "react-burger-menu";

import "./Slidebar.scss";
import menu from "../../assets/group3.svg";

export default (props) => {
  return (
    <Menu customBurgerIcon={<img src={menu} />} noOverlay width={"100%"}>
      <a className="menu-item" href="/">
        Home
      </a>
      <hr
        style={{
          color: "black",
          border: "1px solid black",
          // backgroundColor: color,
        }}
      />
      <a className="menu-item" href="/shop">
        New Arrivals
      </a>

      <hr
        style={{
          color: "black",
          border: "1px solid black",
        }}
      />
      <a className="menu-item" href="/shop/mens">
        Men
      </a>
      <hr
        style={{
          color: "black",
          border: "1px solid black",
        }}
      />
      <a className="menu-item" href="/shop/womens">
        Women
      </a>
      <hr
        style={{
          color: "black",
          border: "1px solid black",
        }}
      />

      <a className="menu-item" href="/shop/hats">
        Accessories
      </a>

      <hr
        style={{
          color: "black",
          border: "1px solid black",
        }}
      />

      <a className="menu-item" href="/">
        About
      </a>

      <hr
        style={{
          color: "black",
          border: "1px solid black",
          // backgroundColor: color,
        }}
      />

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
  );
};
