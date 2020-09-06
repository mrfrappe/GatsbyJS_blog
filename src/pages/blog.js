import React from "react"
import styled from 'styled-components'
import Input from '../components/Input/Input'


const BlogWrapper = styled.div`
    display: flex;
    widtH: 100%;
    height: 100%;
`

const ArticlesWrapper = styled.div`
    width: 70%;
`

const Aside = styled.div`
    width: 30%;   
    display: flex;
`

const HotArticleWrapper = styled.div`

`

const BlogPage = () => (
    <BlogWrapper>
        <ArticlesWrapper>

        </ArticlesWrapper>
        <Aside>
            <Input placeholder="Search" search/>
            <HotArticleWrapper>
                
            </HotArticleWrapper>

        </Aside>


    </BlogWrapper>
)

export default BlogPage
