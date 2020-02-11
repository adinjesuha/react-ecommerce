import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

const MenuItemEl = styled.div`
  min-width: 30%;
  height: ${props => props.size ? '380px' : '240px'};
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover{
    cursor: pointer;
    .background-image{
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    .content{
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  .background-image{
    background: url(${({image}) => image});
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
  }

  .content {
    background-color: white;
    opacity: 0.7;
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    position: absolute;
    .title {
      font-weight: bold;
      margin-bottom: 6px;
      font-size: 22px;
      color: #4a4a4a;
    }
    .subtitle {
      font-weight: lighter;
      font-size: 16px;
    }
  }
`

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => {
  return (
    <MenuItemEl 
      size={size} 
      image={imageUrl}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div className="background-image"/>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </MenuItemEl>
  )
}

export default withRouter(MenuItem);