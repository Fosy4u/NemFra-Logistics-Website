import React from "react";

//eslint-disable-next-line
import { css } from "styled-components/macro";

import Header from "../headers/light.js";







export default ({ roundedHeaderButton }) => {
  return (
    <div >
      <Header roundedHeaderButton={roundedHeaderButton} />
      {/* <Container>
        <TwoColumn>
          <LeftColumn>
            <Heading>
              NemFra  <span tw="text-primary-500">Logistics</span>
            </Heading>
            <span tw="text-primary-500">OnTime! EveryTime!! EveryWhere!!!.</span>
            <Paragraph>
             A realiable Truck Logistics and Sales company in Nigeria with its hallmark stamped on safety, transparency and affordability. 
            </Paragraph>
            <Actions>
              <input type="text" placeholder="Your E-mail Address" />
              <button>Get Started</button>
            </Actions>
            <CustomersLogoStrip>
              <p>Our TRUSTED Customers</p>
              <img src={CustomersLogoStripImage} alt="Our Customers" />
            </CustomersLogoStrip>
          </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
              <img tw="min-w-0 w-full max-w-lg xl:max-w-3xl" src={DesignIllustration} alt="Design Illustration" />
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
        <DecoratorBlob1 />
      </Container> */}
    </div>
  );
};
