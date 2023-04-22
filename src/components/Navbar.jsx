import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
display: flex;
justify-content: center;
`

const Container = styled.div`
width: 1400px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px 0;
`

const Links = styled.div`
display: flex;
align-items: center;
gap: 60px;
`
const Logo = styled.img`
width: 50px;
height: 50px;
cursor: pointer;
`
const List = styled.ul`
display: flex;
gap: 15px;
list-style: none;
`
const ListItem = styled.li`
font-size: 15px;
font-weight: bold;
cursor: pointer;
`
const Icons = styled.div`
display: flex;
align-items: center;
gap: 40px;
`

const Icon = styled.img`
width: 20px;
height: 20px;
cursor: pointer;
`

const Button = styled.button`
width: 100px;
padding: 10px 20px;
border-radius: 10px;
border: none;
background-color: #E33E6A;
color: white;
font-weight: bold;
cursor: pointer;
`


const Navbar = () => {
  return (
    <Section>
        <Container>   
            <Links>
                <Logo src="./img/logo.png" href="#" />
                <List>
                    <ListItem>Anasayfa</ListItem>
                    <ListItem>Hakkımda</ListItem>
                    <ListItem>Projelerim</ListItem>
                    <ListItem>İletişim</ListItem>
                </List>
            </Links>
            <Icons>
                <Icon src="./img/search.png" />
                <Button>Bana Ulaş</Button>
            </Icons>
        </Container>
    </Section>
  )
}

export default Navbar