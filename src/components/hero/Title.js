import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";

import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";

import Button from "@mui/material/Button";
import PhoneNumber from "./PhoneNumber";

const Container = tw.div`relative`;

const Heading = tw.h1`font-bold text-5xl md:text-5xl lg:text-5xl xl:text-5xl text-gray-900 leading-tight`;
const Paragraph = tw.h2`font-bold text-3xl md:text-4xl lg:text-4xl xl:text-4xl`;

// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;

const Title = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [open, setOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <Container
      style={{ margin: "0 auto", width: "100vw" }}
      className="rotateInDownLeft"
    >
      <div
        className="d-flex flex-column text-center "
        style={{
          height: "100vh",
          margin: "0 auto",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Heading className="mb-3">
          <span className="brandPrimary"> NemFra </span>{" "}
          <span tw="text-primary-500">Logistics</span>
        </Heading>
        {/* <span tw="text-primary-500">OnTime! EveryTime!! EveryWhere!!!.</span> */}
        <span className="mb-5 mt-3">
          <Paragraph tw="text-white">
            A Tech-Enabled Truck Logistics and Sales company in Nigeria.
          </Paragraph>
        </span>
        <PhoneNumber open={open} setOpen={setOpen} />
        <span className="d-flex justify-content-center align-items-center mb-5 mt-5">
          <Button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => setOpen(!open)}
            variant="outlined"
            color={isHovering ? "secondary" : "primary"}
            style={{
              color: isHovering ? "#F15A29" : "white",
            }}
          >
            We are here for you. Call us
          </Button>
        </span>

        <div
          className="indicator mt-5"
          onClick={() => {
            window.scrollTo({ top: 770, left: 0, behavior: "smooth" });
          }}
        >
          <span className="spanIndicator spanIndicator1"></span>
          <span className="spanIndicator spanIndicator2"></span>
          <span className="spanIndicator spanIndicator3"></span>
          <span className="spanIndicator spanIndicator4"></span>
          <span className="spanIndicator spanIndicator5"></span>
        </div>
      </div>
      <DecoratorBlob1 />
    </Container>
  );
};

export default Title;
