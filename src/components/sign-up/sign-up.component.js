import React, { useState } from 'react'
import styled from 'styled-components'
import { auth, createUserProfileDocument } from '../../firebase/firebase.util'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  .title{
    margin: 10px 0;
  }
`

const SignUp = () => {
  const [ user, setUser ] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleSubmit = async event => {

    event.preventDefault()
    const {displayName, email, password, confirmPassword} = user
    if(password !== confirmPassword) {
      alert("password don't match");
      return;
    }
    try{
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
      
      await createUserProfileDocument(user, {displayName});

      setUser({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })

    }catch (error) {
      console.error(error);
    }

  }
  
  const handleChange = event => {
    const { value, name } = event.target
    setUser({
      ...user,
      [name]: value
    }) 
  }

  const {displayName, email, password, confirmPassword} = user
  return (
    <Wrapper>
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput 
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput 
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput 
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput 
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </Wrapper>
  )
}

export default SignUp