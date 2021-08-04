import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, NavMenu, MobileIcon, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({  about, resume, project, contact, lan1, icon1, lan2, icon2, toggle }) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scollY >= 80) {
            setScrollNav(true)
        } else setScrollNav(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>JoseV</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks
                                to="about" smooth={true} duration={1200} spy={true} exact='true' offset={-80}>
                                {about}</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="resume" smooth={true} duration={1200} spy={true} exact='true' offset={-80}>
                                {resume}</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="articles" smooth={true} duration={1200} spy={true} exact='true' offset={-80}>
                                {project}</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact" smooth={true} duration={1200} spy={true} exact='true'>
                                {contact}</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink onClick={() => localStorage.setItem('lan', 'ES')}><img src={icon1}></img></NavBtnLink>
                        <NavBtnLink onClick={() => localStorage.setItem('lan', 'EN')}><img src={icon2}></img></NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar