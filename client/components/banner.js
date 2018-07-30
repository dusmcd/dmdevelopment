import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
`

const ImageContainer = styled.div`
  width: 100%;
  height: 350px;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`

const Header = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
`

const Banner = () => {
  return (
    <Container>
      <Header>
        <h1>DMDevelopment</h1>
        <h3>
          <em>Making You Awesome</em>
        </h3>
      </Header>
      <ImageContainer>
        <Image src="https://images.pexels.com/photos/714051/pexels-photo-714051.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
      </ImageContainer>
    </Container>
  )
}

export default Banner
