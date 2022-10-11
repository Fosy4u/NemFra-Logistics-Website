import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Truck6 from "../../images/Truck6.png";
//eslint-disable-next-line
import { css } from "styled-components/macro";

import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";


const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left `;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`;

const Heading = tw.p`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight`;
const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg`;

const Actions = styled.a`
  ${tw`relative max-w-md text-center mx-auto lg:mx-0 `}
  input {
    ${tw`sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300  focus:border-primary-500 hover:border-gray-500`}
  }
  button {
    ${tw`w-full sm:absolute right-0 top-0 bottom-0 bg-primary-500 text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-primary-900 transition duration-300`}
  }
`;

const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center`;

// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;



const SlideContent3 = () => {
  return (
    <Container className="mt-5">
      <TwoColumn>
        <LeftColumn>
          <Heading className="rotateInDownLeft">
            <span className="brandPrimary"> Truck </span>{" "}
            <span tw="text-primary-500">Sales</span>
          </Heading>
          <span tw="text-primary-500">European Market Closer to You</span>
          <Paragraph>
            What if you can shop directly from Europe? NemFra makes this
            possible. We give you direct access to European market which
            guarantees you varieties, quality and far cheaper than local market.
            You can have your truck within two weeks of placing order and you
            only make payment when delivered
          </Paragraph>
          <span className="d-flex justify-content-center align-items-center ms-5">
            <Actions href="/services/trucksales" className="ms-5">
              <button>Find Out More</button>
            </Actions>
          </span>
         
        </LeftColumn>
        <RightColumn>
          <IllustrationContainer>
            <img
              className="swing"
              tw="min-w-0 w-full max-w-lg xl:max-w-3xl"
              src={Truck6}
              alt="Design Illustration"
            />
          </IllustrationContainer>
        </RightColumn>
      </TwoColumn>
      <DecoratorBlob1 />
    </Container>
  );
};

export default SlideContent3;
