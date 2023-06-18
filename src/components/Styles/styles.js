// CSS in JS
import styled, { keyframes } from 'styled-components'

const spin = keyframes`
    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(360deg);
    }
`

export const Heading1 = styled.h1`
    font-size: 1.5rem;
    color: #e99;

    span {
        display: block;
        font-size: 80%;
        color: #99e;
    }
`

export const Titulo = styled.h2`
    display: flex;
    justify-content: center;
    align-content: center;
    width: 500px;
    color: #0d04ab;
    border-radius: 7px;
    border: 1px solid #88885b;
    margin: 0 auto;
    padding: 15px;
`

export const Loader = styled.div`
    height: 50px;
    width: 50px;
    display: flex;
    margin: 0 auto;
    border-top: 4px solid #99e;
    border-right: 4px solid transparent;
    border-radius: 50%;
    animation: 1s ${spin} infinite;
`

 