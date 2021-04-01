import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./menu.styled";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">Home</a>
      {/* </h3> */}

      <hr
        style={{
          color: "black",
          border: "1px solid black",
          width: "80%",
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
          width: "80%",
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
          width: "80%",
        }}
      />
      {/* <h3> */}
      <a href="/shop/womens">Women</a>
      {/* </h3> */}
      <hr
        style={{
          color: "black",
          border: "1px solid black",
          width: "80%",
        }}
      />
      {/* <h3> */}
      <a href="/shop/hats">Accessories</a>
      {/* </h3> */}
      <hr
        style={{
          color: "black",
          border: "1px solid black",
          width: "80%",
        }}
      />
      {/* <h3> */}
      <a href="/">About</a>
      {/* </h3> */}

      <hr
        style={{
          color: "black",
          border: "1px solid black",
          width: "80%",
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
      {/* <a href="/">
        <span role="img" aria-label="about us">
          &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
        </span>
        About us
      </a>
      <a href="/">
        <span role="img" aria-label="price">
          &#x1f4b8;
        </span>
        Pricing
      </a>
      <a href="/">
        <span role="img" aria-label="contact">
          &#x1f4e9;
        </span>
        Contact
      </a> */}
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
