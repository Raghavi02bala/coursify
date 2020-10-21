import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SideBtnWrap, SidebarWrapper, SidebarLink, SidebarRoute, SidebarMenu } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/boards" >
                        Boards
                    </SidebarLink>
                    <SidebarLink to="/books" >
                        Books
                    </SidebarLink>
                    <SidebarLink to="/exams" >
                        Exams
                    </SidebarLink>
                    <SidebarLink to="/whyus" >
                        Why us
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signup">
                        Sign Up
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
