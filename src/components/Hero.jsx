import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'


const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;

`

const Container = styled.div`
height: 100vh;
scroll-snap-align: center;
width: 1400px;
display: flex;
justify-content: space-between;
align-items: center;
`

const Left = styled.div`
flex: 2;
display: flex;
flex-direction: column;
justify-content: center;
`

const Right = styled.div`
flex: 3;
display: flex;
justify-content: center;
align-items: center;
position: relative;
`

const Title = styled.h1`
font-size: 60px;
font-weight: bold;
color: #E33E6A;

span {
    color: #FFE5CA;
}
`


const Desc = styled.div`
display: flex;
align-items: center;
gap: 5px;
`
const Line = styled.img`
width: 15px;
`
const Subtitle = styled.h3`
font-size: 25px;
font-weight: bold;
color: #FA9884;
`

const Button = styled.div`
width: 150px;
border: 2px solid #E33E6A;
border-radius: 10px;
padding: 10px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
transition: all 0.5s ease;
margin-top: 20px;

a {
    text-decoration: none;
    color: #E33E6A;
    font-weight: bold;
    font-size: 20px;
}

&:hover {
    background-color: #E33E6A;
    a {
        color: white;
    }
}
`

const Img = styled.img`
width: 800px;
height: 600px;
object-fit: contain;
position: absolute;
bottom: 0;
right: 0;
left: 0;
top: 0;
margin: auto;
animation: animate 2s infinite ease alternate;

@keyframes animate {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-20px);
    }
`






const Hero = () => {
    return (
        <Section>
            <Navbar />
            <Container>
                <Left>
                    <Title>Merhaba, ben<br /> <span>Mert Can ;</span></Title>
                    <Desc>
                        <Line src="./img/line.png" />
                        <Subtitle>Frontend Developer</Subtitle>
                    </Desc>
                    <Button to="/Who">
                        <a to="#">Keşfet</a>
                    </Button>
                </Left>
                <Right>
                {/* 3d model */ }
                    <Img src="./img/moon.png" />
                </Right>
            </Container>
        </Section>
    )
}

export default Hero