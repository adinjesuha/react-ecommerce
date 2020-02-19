import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { auth } from '../../firebase/firebase.util'
import { connect } from 'react-redux'

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
      cursor: pointer;
    }
  }
`

const Header = ({currentUser}) => {
  return (
    <Wrapper>
      <Link to="/" className="logo-container">
        <Logo  className="logo"/>
      </Link>
      <div className="options">
        <Link to="/shop" className="option">SHOP</Link>
        <Link to="/contact" className="option">CONTACT</Link>
        {
          currentUser 
          ? <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
          : <Link className="option" to="/signin">SIGN IN</Link>  
        }
      </div>
    </Wrapper>
  )
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header)