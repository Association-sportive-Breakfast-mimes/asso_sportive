import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink } from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>A Propos</FooterLinkTitle>
                                <FooterLink to="/">Plan du Site</FooterLink>
                                <FooterLink to="/">Membres</FooterLink>
                                <FooterLink to="/">Nos Partenaires</FooterLink>
                                <FooterLink to="/">Conditions d'utilisations</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>A Propos</FooterLinkTitle>
                                <FooterLink to="/">Plan du Site</FooterLink>
                                <FooterLink to="/">Membres</FooterLink>
                                <FooterLink to="/">Nos Partenaires</FooterLink>
                                <FooterLink to="/">Conditions d'utilisations</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>A Propos</FooterLinkTitle>
                                <FooterLink to="/">Plan du Site</FooterLink>
                                <FooterLink to="/">Membres</FooterLink>
                                <FooterLink to="/">Nos Partenaires</FooterLink>
                                <FooterLink to="/">Conditions d'utilisations</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>A Propos</FooterLinkTitle>
                                <FooterLink to="/">Plan du Site</FooterLink>
                                <FooterLink to="/">Membres</FooterLink>
                                <FooterLink to="/">Nos Partenaires</FooterLink>
                                <FooterLink to="/">Conditions d'utilisations</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
