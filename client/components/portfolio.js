import React from 'react'
import styled from 'styled-components'
import RentIcon from './rent-icon'

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`

const ProjectContainer = styled.div`
  display: flex;
  width: 100%;
`
const ImageContainer = styled.div`
  flex-basis: 50%;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`

const ProjectTitle = styled.div`
  flex-basis: 50%;
  background-color: red;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Portfolio = () => {
  return (
    <Container>
      <h2 style={{ textAlign: 'center' }}>Featured Work</h2>
      <ProjectContainer>
        <ProjectTitle>
          <div style={{ textAlign: 'center' }}>
            <h3>ShareLyfe</h3>
            <p>
              <em>A digital marketplace for rental items</em>
            </p>
          </div>
        </ProjectTitle>
        <ImageContainer>
          <Image src="https://images.pexels.com/photos/1255061/pexels-photo-1255061.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        </ImageContainer>
      </ProjectContainer>
    </Container>
  )
}

export default Portfolio
