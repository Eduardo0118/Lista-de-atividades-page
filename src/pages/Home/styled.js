import styled from "styled-components"

import {Link} from 'react-router-dom'

export const HomeWrapper = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    flex-flow: column;
`

export const HomeTitle = styled.h1`
    font-weight: 700;
    font-size: 50px;
    margin-top: 40px;
`

export const HomeDescription = styled.p`
    font-weight: 600;
    font-size: 25px;
    margin: 20px 0 30px;
`

export const HomeButton = styled(Link)`
    text-decoration: none;
    background-color: #ff8c00;
    padding: 10px 10px 10px;
    border-radius: 10px;
    color: #fff;
    font-weight: 600;
    transition: 0.5s;

    &:hover{
        background-color: #FF4500;
    }
`