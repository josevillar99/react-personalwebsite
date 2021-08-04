import React from 'react'
import {
    SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu,
    SidebarLink, SideBtnWrap, SidebarRoute
} from './SidebarElements'

const Sidebar = ({ about, resume, project, contact, lan1, icon1, lan2, icon2, isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" smooth={true} duration={1200} spy={true} exact='true' offset={-80} onClick={toggle}>{about}</SidebarLink>
                    <SidebarLink to="resume" smooth={true} duration={1200} spy={true} exact='true' offset={-80} onClick={toggle}>{resume}</SidebarLink>
                    <SidebarLink to="articles" smooth={true} duration={1200} spy={true} exact='true' offset={-80} onClick={toggle}>{project}</SidebarLink>
                    <SidebarLink to="contact" smooth={true} duration={1200} spy={true} exact='true' onClick={toggle}>{contact}</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute onClick={() => localStorage.setItem('lan', 'ES')}><img src={icon1}></img></SidebarRoute>
                    <SidebarRoute onClick={() => localStorage.setItem('lan', 'EN')}><img src={icon2}></img> </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
