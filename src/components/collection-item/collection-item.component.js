import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { addItem } from '../../redux/cart/cart.actions'
import CustomButton from '../custom-button/custom-button.component'

const Wrapper = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  .image {
    background: url(${({image}) => image});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 95%;
    margin-bottom: 5px;
  }

  .collection-footer {
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;

    .name {
      width: 90%;
      margin-bottom: 15px;
    }

    .price {
      width: 10%;
    }
  }
  > button{
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }
  &:hover{
    .image{
      opacity: 0.8;
    }
    > button {
      opacity: 0.85;
      display: flex;
    }
  }
`

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item
  return(
    <Wrapper image={imageUrl}>
      <div className="image" />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>Add to cart</CustomButton>
    </Wrapper>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)