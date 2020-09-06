import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

const StyledDiv = styled.div`
    width: 100px;
    height: 100px;
    background-color: pink;
`

const IndexPage = () => (
    <StyledDiv>
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
    </StyledDiv>
)

export default IndexPage
