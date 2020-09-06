import React from 'react';
import styled from 'styled-components'
import { Link } from "gatsby"


const NavigationWrapper = styled.nav`
    position: fixed;
    top: 0;
    height: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    position: relative;
    color: #fff;


    a {
        text-decoration: none;
        color: #fff;
        pointer: cursor;
        :hover {
            color: #ccc;
        }
    }
`;

const Logo = styled.span`
    position: absolute;
    left: 0;
    font-size: 26px;
    font-weight: bold;
    padding-left: 100px;
`;

const NavigationList = styled.ul`
    display: flex;
    list-style-type: none;
    text-align: center;
    height: 100%;
    
`;

const NavigationListItem = styled.li`
    width: 100px;
    font-size: 16px;
    font-weight: bold;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        width: 100px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &:hover {
        border-bottom 5px solid #fff
    } 




    

`;
const Navigation = () => (
    <NavigationWrapper>
        <Logo>
            <Link to="/">LOGO</Link>
        </Logo>
        <NavigationList>
            <NavigationListItem>
                <Link to="/" >HOME</Link>
            </NavigationListItem>
            <NavigationListItem>
                <Link to="/blog" >BLOG</Link>
            </NavigationListItem>
            <NavigationListItem>
                <Link to="/contact" >CONTACT</Link>
            </NavigationListItem>
        </NavigationList>
    </NavigationWrapper>
)

export default Navigation