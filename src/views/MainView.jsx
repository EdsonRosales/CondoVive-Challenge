import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
    text-align: center;
    color: #009DD4;
    margin: 2rem;
`

const MainView = () => {
  return (
      <Title>
          Conway's Game of Life (CondoVive Challenge)
      </Title>
  )
}

export default MainView