import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import Logo2 from "../../images/Logo2.png";

const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`text-center mx-auto`;


const DecoratorBlob1 = styled.div`
  ${tw`pointer-events-none opacity-5 absolute left-1/2 bottom-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;

const Origin = ({ heading = "", subheading = "" }) => {
  return (
    <Container style={{ height: "100vh" }}>
      <ContentWithPaddingXl>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>
          <span>
            Welcome to{" "}
            <strong className="brandPrimary">
              Nem<span className="brandSecondary">Fra</span>
            </strong>
          </span>
        </Heading>
        <span>
          <Description>
            We’re a unique group of people at NemFra and we only say that
            because we do things differently, and that difference comes from the
            way we were founded. NemFra fondly coined from "Nne m (My Mother)"
            and "Franca" was named after Late Franca Ogwudu - a teacher known
            for her love of family and passion for science and tech. This sums
            up why we regard our customers as family deserving the best with
            full transparency while leveraging the powers of technology
          </Description>
          <Description></Description>
        </span>
        <span className="d-flex">
          <Description>
            NemFra Logistics Limited is a reliable provider of innovative
            logistics and supply-chain service and solutions. We aim at making
            logistic in Nigeria simpler, safer and more efficient. We haul goods
            accross the states in Nigeria; from manufacturers to wholesalers,
            retailers and final consumers. As part of our logistic solutions, we
            equally offer port handlings, custom's clearing documentations and
            brokerage services.
          </Description>
          <Description>
            Its no longer a news how much expensive standard trucks are in
            Nigeria. Hence why we have many below industry standard trucks on
            the road. NemFra is here to solve the issue by making standard
            trucks easily accessible and affordable. With our group of
            professional team, technology and reliable europe network of Truck
            companies, we assure our trucks' sales customers standard and
            reliable trucks at exact European rate.
          </Description>
        </span>

        <Description>
          <strong className="brandPrimary">
            Nem<span className="brandSecondary">Fra</span>
          </strong>{" "}
          : OnTime! EveryTime!! EveryWhere!!!
        </Description>
      </ContentWithPaddingXl>
      <DecoratorBlob1>
        {" "}
        <img src={Logo2} alt="logo" />
      </DecoratorBlob1>
    </Container>
  );
};

export default Origin;
