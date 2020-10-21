import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import styled from 'styled-components';


export const Title = styled.h1`
  font-size: 1.5em;
  margin-top: 15px;
  text-align: center;
  color: #EBCACA;
`;

export const Nav = styled.nav`
  position: fixed;
  background: #031c32;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  font-family: 'Chilanka', cursive;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(LinkS)`
  color: #ebcaca;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 50%;
  cursor: pointer;
  &.active {
    color: #B3365B;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #B3365B;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: 250px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: -30px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 4px;
  background:#b3365b;
  padding: 10px 22px;
  color: #ebcaca;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #EBCACA;
    color: #031C32;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  color: #b3365b;
  @media screen and (max-width: 768px) {
    cursor: pointer;
    display: block;
    position: absolute;
    right: 0;
    top: 20;
    transfoarm: translate(-100%, 75%);
    font-size: 1.8rem;
  }
    
`;