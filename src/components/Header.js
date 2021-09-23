import React from "react";
import {HeaderLinkWrapper, Logo, Row, Column, HeaderLink, Heading,Wrapper } from "./HeaderStyles";
import logo from "../images/hamburger.jpeg";
import styled from 'styled-components';


const Img = styled.img`
  height: 5rem;
  width: 5rem;
  padding: 4px;
 padding-bottom: 10px;
  
`;


const Header = () => {
    return (
        <Wrapper>
            <Logo>
                <a href="">Hamburgers</a>
            </Logo>
            <HeaderLinkWrapper>
                <HeaderLink href="#">Menu</HeaderLink>
                <HeaderLink href="#">Information</HeaderLink>
                <HeaderLink href="#">Information</HeaderLink>
            </HeaderLinkWrapper>
        </Wrapper>
    );
};

export default Header;