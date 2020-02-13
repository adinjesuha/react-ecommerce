import React from 'react'
import styled from 'styled-components'

import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
  width: 850px;
`

const SignInAndSignUpPage = () => {
  return (
    <Wrapper>
      <SignIn />
      <SignUp />
    </Wrapper>
  )
}

export default SignInAndSignUpPage