import React from 'react'
import styled from 'styled-components'

import Directory from '../../components/directory/directory.component'

const Homepage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`


const HomePage = () => (
  <Homepage>
    <Directory />
  </Homepage>
)

export default HomePage