import React from 'react'
import { TopBarContainer, CloseIcon, Icon, TopBarWrapper, TopBarMenu, TopBarLink, TopBtnWrap, TopBarRoute  } from './TopBarElements';

function TopBar({isOpen, toggle}) {
    return (
        <TopBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <TopBarWrapper>
                <TopBarMenu>
                    <TopBarLink to="about" onClick={toggle}>
                        About
                    </TopBarLink>
                    <TopBarLink to="team" onClick={toggle}>
                        Our Team
                    </TopBarLink>
                    <TopBarLink to="services" onClick={toggle}>
                        Services
                    </TopBarLink>
                    <TopBarLink to="values" onClick={toggle}>
                        Our Values
                    </TopBarLink>
                </TopBarMenu>
                <TopBtnWrap>
                    <TopBarRoute to="/book">Book An Appointment</TopBarRoute>
                </TopBtnWrap>
            </TopBarWrapper>
        </TopBarContainer>
    )
}

export default TopBar
