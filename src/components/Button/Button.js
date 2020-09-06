import React from 'react';
import styled from 'styled-components'


const ButtonElement = styled.button`
    height: 30px;
    width: 200px;
    background : #121312;
    background : rgba(18, 19, 18, 1);
    color: #fff;
    font-weight: bold;
    border: none;
    margin-left: 10px;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(255,255,255,1);
    -moz-box-shadow: 0px 0px 5px 0px rgba(255,255,255,1);
    box-shadow: 0px 0px 5px 0px rgba(255,255,255,1);
    



`;

const Button = () => (
    <ButtonElement> SEND </ButtonElement>
)

export default Button