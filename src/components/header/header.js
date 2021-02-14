import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon';

import CartDropdown from '../cart-dropdown/cart-dropdown';

import './header.scss';

import { ReactComponent as Logo} from '../../assets/crown.svg';

const Header = ({currentUser, hidden}) => (
    <div className="header">
        <Link className="logo-container" to='/' >
          <Logo className="logo"/>

        </Link>
        <div className="options">
            <Link className="option" to='/shop'>
            shop
            </Link>
            <Link className="option" to='/contact'>
            Conatct
            </Link>
            {
                currentUser? <div 
                className="option" onClick={()=>auth.signOut()} >
                    SignOut
                </div> : <Link className="option" to='/signin'></Link>
            }

            <CartIcon/>

        </div>
        {
            hidden? null:
           <CartDropdown/> 
        }



    </div>
)

const mapStateToProps = ({user: {currentUser}, cart:{ hidden} }) => ({
     currentUser,
     hidden
}) 



export default  connect(mapStateToProps)(Header);