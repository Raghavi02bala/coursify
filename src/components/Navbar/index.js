import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavLink, NavBtn, NavBtnLink, NavMenu, Title, MobileIcon } from './NavbarElements';
import logo from '../../images/logo.png';



const Navbar = ( {toggle} ) =>{
    return (
        <>
            <Nav>
                <NavLink to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}                
                >
                    <img src={logo} alt="" />
                    &nbsp;&nbsp;
                        <Title>
                        Coursify
                        </Title>
                </NavLink>
                <MobileIcon onClick={ toggle }>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavLink to="card"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {800}
                    >
                        Positives
                    </NavLink>
                    <NavLink to="books"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {800}
                    >
                        Books
                    </NavLink>
                    <NavLink to="exams"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {800}
                    >
                        Exams
                    </NavLink>
                    <NavLink to="testi"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {800}
                    >
                        Why us
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signup">Sign-up</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar;
