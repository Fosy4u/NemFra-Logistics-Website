import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavLinks = tw.div`inline-block`;

/* hocus: stands for "on hover or focus"
 * hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
 */
export const NavLink = tw.span` text-lg my-2 lg:text-sm lg:mx-6 lg:my-0 
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-orange-600 hocus:text-primary-500
`;

export const PrimaryLink = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-primary-500 text-gray-100
  hocus:bg-primary-500 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;

export const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};

  img {
    ${tw`w-10 mr-3`}
  }
`;
const Nav = ({ roundedHeaderButton, showWhite = "false", handleShow }) => {
  console.log("🚀 ~ file: Nav.js ~ line 30 ~ Nav ~ showWhite", showWhite);
  return (
    <div>
      {" "}
      <NavLinks key={1}>
        <Link to="/">
          <NavLink className={`${showWhite ? " " : "text-white"}`}>
            Home
          </NavLink>
        </Link>
        <Link to="/about-us">
          <NavLink className={`${showWhite ? " " : "text-white"}`}>
            About
          </NavLink>
        </Link>
        <Link to="/services">
          <NavLink className={`${showWhite ? " " : "text-white"}`}>
            Services
          </NavLink>
        </Link>
        <PrimaryLink
          css={roundedHeaderButton && tw`rounded-full`}
          onClick={handleShow}
          className="btn"
        >
          Contact Us
        </PrimaryLink>
      </NavLinks>
    </div>
  );
};

export default Nav;
