import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

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

  button {
    margin-top: auto;
  }
`

const CartDropdown = ({cartItems}) => (
  <Wrapper>
    <div className="cart-items" >
      {
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem}/>
          )
        )
      }
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </Wrapper>
)

const mapStateToProps = ({cart: { cartItems}}) => ({
  cartItems
})

export default connect(mapStateToProps)(CartDropdown)