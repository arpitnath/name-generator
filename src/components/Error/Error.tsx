import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  color: white;
  text-align: center;
  max-width: 1100px;
  margin-top: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 30vw;
  height: fit-content;
`

const Error: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <h3>Something went wrong </h3>
      {children}
    </Wrapper>
  )
}

export default Error
