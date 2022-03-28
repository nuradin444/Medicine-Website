import React from 'react';
import {animateScroll as scroll} from 'react-scroll';
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa';
import {FooterContainer, FooterWrap, FooterLinksContainer, 
    FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo,
    WebsiteRights,SocialIcons,SocialIconLink} from './FooterElements';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
              <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to="/">How It Works</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Investors</FooterLink>
                        <FooterLink to="/">Our Team</FooterLink>
                        <FooterLink to="/">Terms of service</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Contact us</FooterLinkTitle>
                        <FooterLink to="/">Coming Soon</FooterLink>
                </FooterLinkItems>
              </FooterLinksWrapper>
              <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>Service</FooterLinkTitle>
                        <FooterLink to="/">Coming Soon</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to="/">Instagram</FooterLink>
                        <FooterLink to="/">Facebook</FooterLink>
                        <FooterLink to="/">Youtube</FooterLink>
                        <FooterLink to="/">Twitter</FooterLink>
                </FooterLinkItems>
              </FooterLinksWrapper>
              </FooterLinksContainer> 
              <SocialMedia>
                  <SocialMediaWrap>
                      <SocialLogo to="/" onClick={toggleHome}>
                      Diaspora eClinic
                      </SocialLogo>
                      <WebsiteRights>Diaspora eClinic &copy; {new Date().getFullYear()} All rights reserved</WebsiteRights>
                      <SocialIcons>
                          <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                          <FaFacebook/>
                          </SocialIconLink>
                          <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                          <FaTwitter/>
                          </SocialIconLink>
                          <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                          <FaInstagram/>
                          </SocialIconLink>
                          <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                          <FaLinkedin/>
                          </SocialIconLink>
                      </SocialIcons>
                  </SocialMediaWrap>
                  </SocialMedia> 
        </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
