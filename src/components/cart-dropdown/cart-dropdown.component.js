import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'

const Wrapper = styled.div`

  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  .cart-items {
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
  }

  .empty-message{
    font-size: 18px;
    margin: 50px auto;
  }

  button {
    margin-top: auto;
  }

`

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <Wrapper>
    <div className="cart-items" >
      {
        cartItems.length 
        ? cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem}/>
            )
          )
        : <span className="empty-message">Your cart is empty</span>
      }
    </div>
    <CustomButton onClick={() => {
      history.push('/checkout')
      dispatch(toggleCartHidden())
    }}>GO TO CHECKOUT</CustomButton>
  </Wrapper>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))