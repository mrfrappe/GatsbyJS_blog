import React from 'react';
import styled from 'styled-components'


const InputElement = styled.input`
    height: 30px;
    width: 200px;
    background: #FFFFFF;
    margin-left: 10px;

    

`;

const Input = ({placeholder, second}) => {
    return (
        <InputElement placeholder={placeholder}></InputElement>
    )
}

export default Input