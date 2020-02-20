import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  img {
    width: 30%;
  }

  .item-details {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;

    .name {
      font-size: 16px;
    }
  }
`

const CartItem = ({ item: {imageUrl, price, name, quantity} }) => (
  <Wrapper>
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <div className="name">{name}</div>
      <div className="price">{quantity} x ${price}</div>
    </div>
  </Wrapper>
)

export default CartItem