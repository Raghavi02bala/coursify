import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
    position:fixed;
    z-index: 999;
    width:100%;
    height: 100%;
    background: #031C32;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition : 0.3s ease-in-out;
    opacity : ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top : ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
    color: #B3365B;
`;

export const Icon = styled.div`
    position: absolute;
    margin-top: -950px;
    margin-left: 320px;    
    font-size: 5rem
    background: transparent;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #EBCACA;
`;

export const SidebarLink = styled(LinkS)`
    display: flex;
    margin-left: 150px;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #EBCACA;
    cursor: pointer; 

    &:hover{
        color: #B3365B;
        transition: 0.2s ease-in-out;
    }
`;

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
    font-size: 20px;
    white-space: nowrap;
    padding: 16px 64px;
    color: #EBCACA;
    border-radius: 50px;
    background:#b3365b;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    /* Second Nav */
    margin-top: -50px;
    margin-bottom: 300px; 
    margin-left: -150px;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #EBCACA;
        color: #031C32;
    }
`;

export const SidebarMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px);
    }
`;