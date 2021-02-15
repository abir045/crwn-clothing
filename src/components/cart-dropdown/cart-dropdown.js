import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item';
import CustomButton from '../custom-button/custom-button';
import { selectCartItems } from '../../redux/cart/cart.selectors';  


import './cart-dropdown.scss';


const CartDropdown = (props) => (

    <div className='cart-dropdown'>
        <div className='cart-items'>

        {  props.cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem}/>
            )
            )}
         </div>

        <CustomButton>
            GO TO CHECKOUT
        </CustomButton>
        

    </div>
)

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
}
) ;


export default connect(mapStateToProps)(CartDropdown);
