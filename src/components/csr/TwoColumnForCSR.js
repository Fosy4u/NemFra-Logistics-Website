import "slick-carousel/slick/slick.css";
import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Subheading as SubheadingBase } from "components/misc/Headings.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import loveIllustrationImageSrc from "images/love-illustration.svg";
import { ReactComponent as ArrowLeftIcon } from "images/arrow-left-3-icon.svg";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-3-icon.svg";
import Foundation from "../../images/Foundation.jpg";
import Logo2 from "../../images/Logo2.png";
import CSR1 from "../../images/csr1.JPG";

const Row = tw.div`flex flex-col md:flex-row justify-between items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-7/12 xl:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:pr-12 lg:pr-16 md:order-first`
    : tw`md:pl-12 lg:pl-16 md:order-last`,
]);

const Image = styled.img((props) => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);

const Subheading = tw(SubheadingBase)`text-center md:text-left`;

const Description = tw.p`mt-6 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const TestimonialSlider = styled(Slider)`
  ${tw`w-full mt-10 text-center md:text-left`}
  .slick-track {
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;

const Testimonial = tw.div`outline-none h-full flex! flex-col`;

const CustomerInfoAndControlsContainer = tw.div`mt-auto flex justify-between items-center flex-col sm:flex-row`;

const Controls = styled.div`
  ${tw`flex mt-8 sm:mt-0`}
  .divider {
    ${tw`my-3 border-r`}
  }
`;
const ControlButton = styled.button`
  ${tw`mx-3 p-4 rounded-full transition duration-300 bg-gray-200 hover:bg-gray-300 text-primary-500 hover:text-primary-700 focus:outline-none focus:shadow-outline`}
  svg {
    ${tw`w-4 h-4 stroke-3`}
  }
`;
const DecoratorBlob = styled.div`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default ({
  imageSrc = loveIllustrationImageSrc,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  subheading = "Testimonials",
  heading = "Our Clients Love Us.",
  description = "",
  textOnLeft = true,
  charities = [Foundation],
  imageAlt = "",
}) => {
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <Container>
      <ContentWithPaddingXl>
        <Subheading className="mb-2">{subheading}</Subheading>
        <Row>
          <ImageColumn>
            <Image
              src={CSR1}
              imageBorder={imageBorder}
              imageShadow={imageShadow}
              imageRounded={imageRounded}
              alt={imageAlt}
            />
          </ImageColumn>
          <TextColumn textOnLeft={textOnLeft}>
            {/* <Heading>{heading}</Heading> */}
            <Description>{description}</Description>
            <TestimonialSlider arrows={false} ref={setSliderRef}>
              {charities.map((charity, index) => (
                <Testimonial key={index}>
                  <CustomerInfoAndControlsContainer>
                    <img
                      tw="min-w-0 w-full max-w-lg xl:max-w-3xl"
                      src={charity}
                      alt="Design Illustration"
                    />
                    <Controls>
                      <ControlButton onClick={sliderRef?.slickPrev}>
                        <ArrowLeftIcon />
                      </ControlButton>
                      <div className="divider" />
                      <ControlButton onClick={sliderRef?.slickNext}>
                        <ArrowRightIcon />
                      </ControlButton>
                    </Controls>
                  </CustomerInfoAndControlsContainer>
                </Testimonial>
              ))}
            </TestimonialSlider>
          </TextColumn>
        </Row>
      </ContentWithPaddingXl>
      <DecoratorBlob>
        <img src={Logo2} alt="logo" />
      </DecoratorBlob>
    </Container>
  );
};
