import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

    html {
        box-sizing: border-box;
        background : -moz-linear-gradient(87.91% -17.44% -132deg,rgba(0, 0, 0, 1) 0%,rgba(0, 0, 4, 1) 25.68%,rgba(0, 1, 15, 1) 50.25%,rgba(0, 3, 35, 1) 74.39%,rgba(0, 5, 62, 1) 98.12%,rgba(0, 5, 64, 1) 100%);
        background : -webkit-linear-gradient(-132deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 4, 1) 25.68%, rgba(0, 1, 15, 1) 50.25%, rgba(0, 3, 35, 1) 74.39%, rgba(0, 5, 62, 1) 98.12%, rgba(0, 5, 64, 1) 100%);
        background : -webkit-gradient(linear,87.91% -17.44% ,12.09% 117.44% ,color-stop(0,rgba(0, 0, 0, 1) ),color-stop(0.2568,rgba(0, 0, 4, 1) ),color-stop(0.5025,rgba(0, 1, 15, 1) ),color-stop(0.7439,rgba(0, 3, 35, 1) ),color-stop(0.9812,rgba(0, 5, 62, 1) ),color-stop(1,rgba(0, 5, 64, 1) ));
        background : -o-linear-gradient(-132deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 4, 1) 25.68%, rgba(0, 1, 15, 1) 50.25%, rgba(0, 3, 35, 1) 74.39%, rgba(0, 5, 62, 1) 98.12%, rgba(0, 5, 64, 1) 100%);
        background : -ms-linear-gradient(-132deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 4, 1) 25.68%, rgba(0, 1, 15, 1) 50.25%, rgba(0, 3, 35, 1) 74.39%, rgba(0, 5, 62, 1) 98.12%, rgba(0, 5, 64, 1) 100%);
        -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#000000', endColorstr='#000540' ,GradientType=0)";
        background : linear-gradient(222deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 4, 1) 25.68%, rgba(0, 1, 15, 1) 50.25%, rgba(0, 3, 35, 1) 74.39%, rgba(0, 5, 62, 1) 98.12%, rgba(0, 5, 64, 1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#000000',endColorstr='#000540' , GradientType=1);
        height: 100%;
    }
    *,
    *::before,
    *::after {
        box-sizing: inherit
    }
    body {
        margin: 0;
        color: #fff;



    }
    button {
        padding: 0;
        cursor: pointer;
    }
    ul {
        padding: 0;
        magrin: 0;
    }

`

export default GlobalStyles;