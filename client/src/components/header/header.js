import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon";

import CartDropdown from "../cart-dropdown/cart-dropdown";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { signOutStart } from "../../redux/user/user.actions";
//import Burger from "../burger-menu/burger";
//import Sidebar from "../reveal-burger/Sidebar";
//import HomePage from "../../pages/homepage/homepage";
//import SimpleSlider from "../slick-carousel/carousel";

import Burger from "../animated-burger/animatedBurger";
import Menu from "../Menu/menu";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  ShopContainer,
  OptionDiv,
} from "./header.styles";

//import './header.scss';

import { ReactComponent as Logo } from "../../assets/alvaro2.svg";

const Header = ({ currentUser, hidden, signOutStart }) => {
  const [open, setOpen] = useState(false);

  return (
    <HeaderContainer>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />

      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>

      {/* <OptionsContainer> */}
      {/* <OptionLink to="/about">About</OptionLink>
      <OptionLink to="/contact">Contact</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={signOutStart}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )} */}
      {/* </OptionsContainer> */}

      <CartIcon />
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,

  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
