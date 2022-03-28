import styled from "styled-components";
import {Link as LinkS} from 'react-scroll';
import{Link as LinkRouter} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';

export const TopBarContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #8cb89f;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({isOpen})=> (isOpen ? '100%' : '0')};
top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
color: #fff;
`

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`;

export const TopBarWrapper = styled.div`
color: #fff;
`;

export const TopBarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 80px);
text-align: center;

@media screen and (max-width: 480px){
    grid-template-rows: repeat(6, 60px);
}
`

export const TopBarLink = styled(LinkS)`
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 1.5rem;
 text-decoration: none;
 list-style: none;
 transition: 0.2s ease-in-out;
 text-decoration: none;
 color: #000;
 cursor: pointer;

 &:hover{
     color: #01bf71;
     transition: 0.2s ease-in-out;
 }
`

export const TopBtnWrap = styled.div`
display: flex;
justify-content: center;
`

export const TopBarRoute = styled(LinkRouter)`
border-radius: 50px;
background: #4281aa;
white-space: nowrap;
padding: 16px 64px;
color: #010606;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
    transition: all 0.2s ease-in-out;
    background: #01bf71;
    color: #010606;
}
`