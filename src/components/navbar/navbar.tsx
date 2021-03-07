import React from "react";
import { ReactComponent as Logo } from "../../assets/aroundhome_logo.svg";
import { Navbar as StyledNavbar } from "./navbar.style";

const Navbar = () => {
  return (
    <StyledNavbar>
      <Logo />
    </StyledNavbar>
  );
};

export default Navbar;
