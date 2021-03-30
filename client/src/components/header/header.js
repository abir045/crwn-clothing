import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon";

import CartDropdown from "../cart-dropdown/cart-dropdown";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { signOutStart } from "../../redux/user/user.actions";

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

import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>

    {/* <ShopContainer>
          <DropdownButton variant='dark' id="dropdown-item-button" title="Shop">
 
  <Dropdown.Item href="#/action-1">New Arrivals</Dropdown.Item>
  <Dropdown.Item href="#/action-2"> Sale</Dropdown.Item>
  
  
  <Dropdown.Item href="#/action-2">
      <OptionLink to='/shop/mens'>T-shirts</OptionLink>
     
 </Dropdown.Item>
 <Dropdown.Item href="#/action-2">
 <OptionLink to='/shop/hats'>Accessories</OptionLink>
 </Dropdown.Item>

  <Dropdown.Item href="#/action-2">
  <OptionLink to='/'>Home</OptionLink>
  </Dropdown.Item>

 <Dropdown.Item href="#/action-3"> Men </Dropdown.Item>
 <Dropdown.Item href="#/action-4"> Women </Dropdown.Item>
 <Dropdown.Item href="#/action-5"> Kids </Dropdown.Item>
 <Dropdown.Item href="#/action-6"> Collections </Dropdown.Item>

 <Dropdown.Item href="#/action-6">
      <OptionLink to='/shop/jackets'>Fall-Winter 2022</OptionLink>
     
 </Dropdown.Item>

  <Dropdown.Item href="#/action-6">
      <OptionLink to='/shop/sneakers'>Spring-Summer 2022</OptionLink>
     
 </Dropdown.Item>

</DropdownButton>


</ShopContainer> */}

    {/* <OptionsContainer>
      <OptionLink to="/about">About</OptionLink>
      <OptionLink to="/contact">Contact</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={signOutStart}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
    </OptionsContainer> */}

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
