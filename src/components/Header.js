import React from "react";
import {Box, Container, Row, Column, HeaderLink, Heading } from "./HeaderStyles";


const Header = () => {
    return(
        <Box>
          <HeaderLink href="#">Menu</HeaderLink>
          <HeaderLink href="#">Information</HeaderLink>
          <HeaderLink href="#">Information</HeaderLink>
          {/*<div>*/}
          {/*  <HeaderLink href="#">Hamburger</HeaderLink>*/}
          {/*</div>*/}
        </Box>
    )
}

export default Header;