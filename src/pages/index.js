import React from "react"
import styled from 'styled-components'


const HomeWrapper = styled.div`
    display: flex;
    widtH: 100%;
    height: 100%;

`

const HomeSiteTitle = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


`

const HomeImageSection = styled.div`
    width: 50%;   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`
const HomeDescription = styled.div`
    width: 200px;
    height: 200px;

    h1 {

    }
    p {
        padding-left: 30px;
    }
`

const IndexPage = () => (
    <HomeWrapper>
        <HomeSiteTitle>
            <HomeDescription>
            <h1>Gatsby demo</h1>
            <p>Simple blog project with
                Gatsby js library </p>
            </HomeDescription>
        </HomeSiteTitle>
        <HomeImageSection>
            <img src="/picture.png"/>
        </HomeImageSection>
    </HomeWrapper>
)


export default IndexPage
