import React from 'react'
import styled from 'styled-components'

const WhatWeDo = styled.div`
display: flex;
align-items: center;
gap: 5px;
`
const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
justify-content: center;
`
const Container = styled.div`
height: 100vh;
scroll-snap-align: center;
width: 1400px;
display: flex;
justify-content: space-between;

`
const Left = styled.div`
flex: 1;

`

const Right = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;
`

const Title = styled.h1`
font-size: 60px;
font-weight: bold;
color: #E33E6A;
`


const Desc = styled.div`
display: flex;
align-items: center;
gap: 5px;
`
const Line = styled.img`
width: 15px;
`
const Subtitle = styled.h2`
font-size: 25px;
font-weight: bold;
color: #E33E6A;
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

const Who = () => {
    return (
        <Section>
            <Container>
                <Left>{/* 3d model */ }</Left>
                <Right>
                    <Title>Think outside the square space</Title>
                    <WhatWeDo>
                        <Line src="./img/line.png" />
                        <Subtitle>Kimim ben ?</Subtitle>
                    </WhatWeDo>
                    <Desc>
                     ben bir front-end developerım ve kendimi sürekli geliştirmeye çalışıyorum.
                    </Desc>
                    <Button> 
                        <a>Projelerim</a>
                    </Button>
                </Right>
            </Container>
        </Section>
    )
}

export default Who