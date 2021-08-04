import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const AboutNavbar = styled.nav`
    background-color:rgba(0,0,0,1);
    height: 60px;
    /* margin-top: -80px; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: transparent;
    white-space: nowrap;
    padding: 10px 22px;
    color: #FFF;
    font-size: 16px;
    outline: none;
    border:none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.3s ease-in-out;
        background:#fff ;
        color: #010606;
    }
`

export const InfoContainer = styled.div`
    background: #81ecec;

    @media screen and (max-width: 768px) {
        padding: 150px 0;
        /* margin-bottom: 500px; */
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    min-height: calc(100vh - 60px);
    height: 100%;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const InfoRow = styled.div`
    display: grid;
    /* grid-auto-columns: minmax(auto, 2fr); */
    grid-template-columns: 2fr 2fr;
    align-items: center;
    grid-template-areas: 'col2 col1'; 
    /* justify-content: space-evenly; */
    
    @media screen and (max-width: 650px){
        grid-template-columns: 90% 100%;
        grid-template-areas: 'col2' 'col1';
        /* display: inline; */
        /* margin-top: 80px; */
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    margin-right: 20px;
    margin-top: 40px;
    padding: 0 15px;
    grid-area: col1;

    @media screen and (max-width: 650px){
        /* margin-bottom: 10vh; */
        margin-top: 2vh;
    }
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 10px;
    grid-area: col2;
    margin-top: -30vh;
    
    @media screen and (max-width: 768px){
        margin-bottom: 14vh;
        margin-top: -10vh;
        margin-left: 10%;
    }
`

export const ColumnP = styled.p`
    text-align: justify;
    text-justify: inter-word;
    margin-bottom: 35px;
    width: 98%;
    color: '#010606';
    
    @media screen and (max-width: 768px){
        width: 98%;
        margin-left: 10%;
        margin-bottom: 50px;
    }
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const TopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    margin-top: 20px;
    font-size: 2.3em;
    text-align: center;
    line-height: 1.1;
    font-weight: 600;
    color: '#010606';

    @media screen and (max-width: 480px){
        font-size: 1.5em;
    }
`

export const Subtitle = styled.p`
    /* max-width: 440px; */
    width: auto;
    font-size: 1.1;
    line-height: 30px;
    color: '#010606';
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`
