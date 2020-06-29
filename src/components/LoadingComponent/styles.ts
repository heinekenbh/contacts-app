import styled, { keyframes } from 'styled-components'

const breatheAnimation = keyframes`
    0% {
        opacity: 0 
    }
    
    50% {
        opacity: 1 
    }

    100% {
        opacity: 0; 
    }
`

export const Circle = styled.div`
    margin-top: 50px;
    height: 30px;
    width: 30px;
    background-color: #F0ECE2;
    border-style: solid;
    border-width: 5px;
    border-radius: 50%;
    border-color: black;
    animation-name: ${ breatheAnimation };
    animation-duration: 1s;
    animation-iteration-count: infinite;
`