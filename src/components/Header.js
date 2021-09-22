import React from "react";
import {HeaderLinkWrapper, Logo, Row, Column, HeaderLink, Heading,Wrapper } from "./HeaderStyles";


const Header = () => {
    return (
        <Wrapper>
            <Logo>
                <a href="#">Hamburgers</a>
            </Logo>
            <HeaderLinkWrapper>
                <HeaderLink href="#">Menu</HeaderLink>
                <HeaderLink href="#">Information</HeaderLink>
                <HeaderLink href="#">Information</HeaderLink>
                {/*<div>*/}
                {/*  <HeaderLink href="#">Hamburger</HeaderLink>*/}
                {/*</div>*/}
            </HeaderLinkWrapper>
        </Wrapper>
    );
};

export default Header;