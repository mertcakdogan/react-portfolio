import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components'
import Map from './Map'


const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
`;

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: space-between;
gap: 50px;
`;

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;

`;

const Title = styled.h1`
font-weight: 200;
`;


const Form = styled.form`
width: 500px;
display: flex;
flex-direction: column;
gap: 25px;
`;


const Input = styled.input`
height: 50px;
border: none;
border-radius: 5px;
padding: 0 20px;
background-color: #e8e6e6;
`;

const Textarea = styled.textarea`
border: none;
border-radius: 5px;
padding: 20px;
background-color: #e8e6e6;
`;

const Button = styled.button`
padding: 20px;
border: none;
border-radius: 10px;
background-color: #da4ea2;
color: white;
font-weight: bold;
cursor: pointer;

`;

const Right = styled.div`
flex: 1;
`;




const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lihv9x3', 'template_pgpkzgn', ref.current, 'VHZF6fbOu8PfRBMSR')
      .then((result) => {
        console.log(result.text);
        setSuccess(true);
      }, (error) => {
        console.log(error.text);
        setSuccess(false);
      });
  }

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>İletişim</Title>
            <Input type="text" name='name' placeholder="Adınız" />
            <Input type="text" name='email' placeholder="E-posta" />
            <Textarea placeholder="Mesajınız" rows={10} name='message' />
            <Button type="submit" >Gönder</Button>
            {success && "Teşekkürler, mesajınız iletildi."}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  )
}

export default Contact