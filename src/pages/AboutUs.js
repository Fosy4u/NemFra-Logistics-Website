import React, { useEffect, useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line

import MainFeature2 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import { ReactComponent as Star } from "feather-icons/dist/icons/star.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import Csr from "components/csr/TwoColumnForCSR.js";
import { ReactComponent as ArrowUp } from "feather-icons/dist/icons/arrow-up.svg";
import { ReactComponent as Heart } from "feather-icons/dist/icons/heart.svg";
import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";

import Truck2 from "../images/Truck-1-on-white-background.png";
import Origin from "components/hero/Origin";
import Footer from "components/footers/Footer";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
const HighlightedText = tw.span`text-primary-500`;
const StyledDiv = tw.div` p-8`;
export default () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      window.scrollY > 200 ? setShow(true) : setShow(false);
    });
  });

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <AnimationRevealPage>
      <StyledDiv>
        <Hero showWhite />
        <button
          className={
            show
              ? "rotateInDownLeft scroll d-flex justify-content-center align-items-center"
              : "d-none"
          }
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          style={{
            backgroundColor: "#F15A29",
          }}
        >
          <ArrowUp />
        </button>

        <a
          href="https://wa.me/2347061146501"
          class="whatsapp_float bounceIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-whatsapp whatsapp-icon"></i>
        </a>
        <Origin subheading={<Subheading>About Us</Subheading>} linkText="" />

        <MainFeature2
          subheading={<Subheading className="brandPrimary">VALUES</Subheading>}
          primaryButtonText="Our Services"
          primaryButtonUrl="/services"
          description="Our objective is to be the most transparent, standard, and safest brand in Nigeria. We are committed to making our customers happy and relaxed by simplifying logistics and making truck procurement as affordable as possible by assisting you in buying directly from European market. "
          heading={
            <>
              We Live By Our <HighlightedText>Principles.</HighlightedText>
            </>
          }
          imageSrc={Truck2}
          showDecoratorBlob={false}
          features={[
            {
              Icon: Star,
              title: "Standard",
              description:
                "There is no NemFra without standard. Excellence is our second nature. With our standard trucks, technology and well trained professionals, you are sure of getting nothing but the best.",
              iconContainerCss: tw`bg-green-300 text-green-800`,
            },
            {
              Icon: Heart,
              title: "Safety",
              description:
                "Health and Safety is part of our corporate culture. It is not something that has to be done, it is something that is accepted as a responsibility that ensures safety of our drivers and customer goods.",
              iconContainerCss: tw`bg-red-300 text-red-800`,
            },
            {
              Icon: MoneyIcon,
              title: "Transpearency",
              description:
                "All our services are rendered with honesty and sincerity without any hidden charges or obscure process. We promise to offer you the best logistic rate we can - at par with the industry standard. As for purchasing trucks, we make sure you buy the best at European price. We are simply open book.",
              iconContainerCss: tw`bg-orange-300 text-orange-800`,
            },
          ]}
        />

        <Csr
          subheading={
            <Subheading className="brandPrimary">
              Corporate Social Responsibility
            </Subheading>
          }
          heading={
            <>
              Franca Ogwudu <HighlightedText>Foundation</HighlightedText>
            </>
          }
          description='As our name was coined from "Nne m Franca" - "My Mother Franca", we partner with Franca Ogwudu foundation in rendering help in our communities through education scholarships and charities to the less priviledged'
        />
        <Footer />
      </StyledDiv>
    </AnimationRevealPage>
  );
};
