import React from 'react'
import styled from 'styled-components'

import SignIn from '../../components/sign-in/sign-in.component'

const Wrapper = styled.div`

`

const SignInAndSignUpPage = () => {
  return (
    <Wrapper>
      SIGN IN
      <SignIn />
    </Wrapper>
  )
}

export default SignInAndSignUpPage