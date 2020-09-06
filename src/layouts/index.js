import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import GlobalStyles from '../assets/styles/globalStyles'
import Navigation from '../components/Navigation/Navigation'
import Footer from '../components/Footer/Footer'


const MainLayout = ({children}) => (
    <>
        <GlobalStyles />
        <Navigation />
        {children}
        <Footer />
    </>
)


export default MainLayout
