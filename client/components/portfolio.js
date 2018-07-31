import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`

const TopProjectContainer = styled.div`
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

const BottomProjectContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 100px;
`
const SingleProject = styled.div`
  margin: 0 20px;
  flex-basis: 30%;
`

const Portfolio = () => {
  return (
    <Container>
      <h2 style={{ textAlign: 'center' }}>Featured Work</h2>
      <TopProjectContainer>
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
      </TopProjectContainer>
      <BottomProjectContainer>
        <SingleProject>
          <Image src="https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
          <h4>RECYCLE BLUE</h4>
        </SingleProject>
        <SingleProject>
          <Image src="https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
          <h4>RECYCLE BLUE</h4>
        </SingleProject>
        <SingleProject>
          <Image src="https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
          <h4>RECYCLE BLUE</h4>
        </SingleProject>
      </BottomProjectContainer>
    </Container>
  )
}

export default Portfolio
