import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon";

import CartDropdown from "../cart-dropdown/cart-dropdown";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { signOutStart } from "../../redux/user/user.actions";
//import Burger from "../burger-menu/burger";
import Sidebar from "../reveal-burger/Sidebar";
import HomePage from "../../pages/homepage/homepage";
import SimpleSlider from "../slick-carousel/carousel";

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

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>

    <ShopContainer>
      {/* <div id="outer-container">
        <Sidebar
          noOverlay
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
          width={"100%"}
        />
        <div id="page-wrap">
          <SimpleSlider />
          <HomePage />
        </div>
      </div> */}

      {/* <Burger /> */}
    </ShopContainer>

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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,

  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
