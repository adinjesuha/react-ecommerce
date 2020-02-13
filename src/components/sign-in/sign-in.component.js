import React, { useState } from 'react'
import styled from 'styled-components'

import { auth, signInWithGoogle } from '../../firebase/firebase.util'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

const Wrapper = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  
  .title{
    margin: 10px 0;
  }
  .buttons{
    display: flex;
    justify-content: space-between;
  }
`

const SignIn = () => {
  const [ user, setUser ] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = async e => {

    e.preventDefault()

    const { email, password } = user;
    try{
      await auth.signInWithEmailAndPassword(email, password);
      setUser({
        email: '',
        password: ''
      })
    }catch (error) {
      console.log(error);
    } 
  }
  
  const handleChange = event => {
    const { value, name } = event.target
    setUser({
      ...user,
      [name]: value
    }) 
  }
  const { email, password } = user;
  return (
    <Wrapper>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput 
          type="email" 
          name="email" 
          value={email} 
          handleChange={handleChange}
          label="email"
          required
        /> 
        <FormInput 
          type="password" 
          name="password" 
          value={password} 
          handleChange={handleChange}
          label="password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google </CustomButton>
        </div>
      </form>
    </Wrapper>
  )
}

export default SignIn