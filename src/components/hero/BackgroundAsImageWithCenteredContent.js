import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line


import NavBar from "./NavBar.js";
import AboutIntro from "./AboutIntro.js";

const Container = styled.div`
  ${tw`relative -mx-8 -mt-8  bg-cover h-screen min-h-144`}
  background-image: url("/NemfraTruck-resized.jpg");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

export default ({ showWhite }) => {
  return (
    <Container>
      <OpacityOverlay style={{ backgroundColor: "rgba(0, 5, 145, 0.09)" }} />

      <HeroContainer>
        <NavBar showWhite={showWhite} />
        <AboutIntro />
        <Content></Content>
      </HeroContainer>
    </Container>
  );
};
