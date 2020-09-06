import React from 'react';
import styled from 'styled-components'


const LabelElement = styled.input`

    

`;

const Label = ({name}) => {
    return (
        <LabelElement>{name}</LabelElement>
    )
}

export default Label