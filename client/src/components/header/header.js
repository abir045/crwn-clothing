import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';



import CartIcon from '../cart-icon/cart-icon';

import CartDropdown from '../cart-dropdown/cart-dropdown';
import { selectCartHidden } from '../../redux/cart/cart.selectors'; 
import {selectCurrentUser } from  '../../redux/user/user.selector';
import { signOutStart} from '../../redux/user/user.actions';

import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink,ShopContainer, OptionDiv }  from './header.styles'

//import './header.scss';

import { ReactComponent as Logo} from '../../assets/crown.svg';

import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown';


const Header = ({currentUser, hidden, signOutStart }) => (
    <HeaderContainer>
        <LogoContainer to='/' >
          <Logo className="logo"/>
        
        </LogoContainer>
      
      <ShopContainer>
          <DropdownButton variant='secondary' id="dropdown-item-button" title="Shop">
 
  <Dropdown.Item href="action-1">
      <OptionLink to='/shop'>Shop</OptionLink>
   
      </Dropdown.Item>
  <Dropdown.Item href="#/action-1">Sale</Dropdown.Item>
  <Dropdown.Item href="#/action-1">T-shirts</Dropdown.Item>
</DropdownButton>

</ShopContainer>
            


            
        
        <OptionsContainer>
            <OptionLink to='/about'>
            About
            </OptionLink>
            <OptionLink to='/contact'>
            Contact
            </OptionLink>
            {
                currentUser? (
                <OptionLink as='div' onClick={signOutStart} >
                    SIGN OUT
                </OptionLink> ) : (
                <OptionLink to='/signin'>
                    SIGN IN
                </OptionLink>)
            }

            <CartIcon />

        </OptionsContainer>
        {
            hidden? null:
           
           <CartDropdown/> 
        }

       
        </HeaderContainer>
)

const mapStateToProps  = createStructuredSelector({
     
    currentUser: selectCurrentUser,

     hidden : selectCartHidden
}) ;


const mapDispatchToProps = dispatch => ({
    signOutStart : () => dispatch(signOutStart())
});


export default  connect(mapStateToProps, mapDispatchToProps)(Header);