import React from "react";
import {Box, Container, Row, Column, FooterLink, Heading } from "./FooterStyles";

const Footer = () => {
    return (
        <Box>
            <Container>
                <Row>
                    <Column>
                        <Heading>About Us</Heading>
                        <FooterLink href="#">Aim</FooterLink>
                        <FooterLink href="#">Vision</FooterLink>
                        <FooterLink href="#">Testimonials</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Services</Heading>
                        <FooterLink href="#">Writing</FooterLink>
                        <FooterLink href="#">Internships</FooterLink>
                        <FooterLink href="#">Coding</FooterLink>
                        <FooterLink href="#">Teaching</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="#">FaceBook</FooterLink>
                        <FooterLink href="#">Google</FooterLink>
                        <FooterLink href="#">Instagram</FooterLink>
                        <FooterLink href="#">Youtube</FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
};
export default Footer;
