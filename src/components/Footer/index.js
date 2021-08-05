import React from 'react'
import {
    FooterContainer,  FooterLinksContainer, FooterLinksWrapper,
     FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia,
    SocialMediaWrap, WebsiteRights
} from './FooterElements'
import { FaLinkedin, FaInstagram, } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';


const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>

                    </FooterLinksWrapper>
                </FooterLinksContainer>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            JoseV
                        </SocialLogo>
                        <WebsiteRights>JoseV Copyright {new Date().getFullYear()}
                            All rights reserved
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://www.linkedin.com/in/jose-villar-57293a1ab/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com/vosejillarsc/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
