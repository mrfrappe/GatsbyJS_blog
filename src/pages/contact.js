import React from "react"
import styled from 'styled-components'
import Input from '../components/Input/Input'
import Button from '../components/Button/Button'




const ContactWrapper = styled.div`
    display: flex;
    widtH: 100%;
    height: 100%;

`


const ContactImageSection = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


`

const ContactForm = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Form = styled.form`

`;

const InputGroup = styled.div`
    display: flex;
    margin:20px 0px;
`;



const ContactPage = () => (
    <ContactWrapper>
        <ContactImageSection>
            <img src="/picture.png"/>
        </ContactImageSection>
        <ContactForm>
            <Form>
                <InputGroup>
                    <Input placeholder="First name" secondary/>
                    <Input placeholder="Last name" secondary/>
                </InputGroup>
                <InputGroup>
                    <Input placeholder="Email"/>
                </InputGroup>
                <InputGroup>
                    <Input placeholder="Title"/>
                </InputGroup>
                <InputGroup>
                    <Input placeholder="Message"/>
                </InputGroup>
                <Button/>
            </Form>

        </ContactForm>


    </ContactWrapper>
)

export default ContactPage
