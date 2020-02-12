import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;

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

`

const CollectionItem = ({id, name, price, imageUrl}) => (
  <Wrapper image={imageUrl}>
    <div className="image" />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
  </Wrapper>
)

export default CollectionItem