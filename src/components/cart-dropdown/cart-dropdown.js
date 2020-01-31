import React from 'react';

import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';
import { connect } from 'react-redux';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className="cart-item"> 
         {
            cartItems.map(cartItems => ( 
            <CartItem key={cartItem.id} item={cartItem} /> 
            
        ))}
        </div>
        <CustomButton>CHECKOUT</CustomButton>
    </div>

);

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cart-item
})

export default connect(mapStateToProps) (CartDropdown);