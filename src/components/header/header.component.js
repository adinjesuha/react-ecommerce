import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { ReactComponent as Logo } from '../../assets/crown.svg'

const Wrapper = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  .logo-container {
    height: 100%;
    width: 70px;
    padding: 25px;
  }

  .options {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .option {
      padding: 10px 15px;
    }
  }
`

const Header = () => {
  return (
    <Wrapper>
      <Link to="/" className="logo-container">
        <Logo  className="logo"/>
      </Link>
      <div className="options">
        <Link to="/shop" className="option">Shop</Link>
        <Link to="/contact" className="option">Contact</Link>
      </div>
    </Wrapper>
  )
}

export default Header