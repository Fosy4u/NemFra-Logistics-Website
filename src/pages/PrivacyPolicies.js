import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import "../styles/GlobalCss.css";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Footer from "components/footers/Footer.js";

import { ReactComponent as ArrowUp } from "feather-icons/dist/icons/arrow-up.svg";
import Logo2 from "../images/Logo2.png";

import NavBar from "components/hero/NavBar";

import styled from "styled-components";

import FAQ from "components/faqs/SingleCol.js";
import Terms from "components/policies/Terms";
import ThirdParties from "components/policies/ThirdParties";
import PrivacyChoices from "components/policies/PrivacyChoices";
import Information from "components/policies/Information";
import Track from "components/policies/Track";
import PolicyChanges from "components/policies/PolicyChanges";
import PolicyContact from "components/policies/PolicyContact";

const DecoratorBlob1 = styled.div`
  ${tw`pointer-events-none opacity-5 absolute left-1/2 bottom-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;

const StyledDiv = tw.div` p-8`;

const PrivacyPolicies = () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;

  const [show, setShow] = useState(false);
  const [showWhite, setShowWhite] = useState(false);
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      window.scrollY > 200 ? setShow(true) : setShow(false);
    });
  });

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      window.scrollY > 50 ? setShowWhite(true) : setShowWhite(false);
    });
  });

  return (
    <AnimationRevealPage>
      <NavBar showWhite={showWhite} />
      <div
        // style={{
        //   background: " #f2f2f2",
        // }}
        style={{
          background:
            "linear-gradient(0deg, rgba(34,193,195,0) -3%, rgba(253,106,45,0.8785889355742297) 100%)",
        }}
        // style={{
        //   background:
        //     'url("https://wallpaperaccess.com/full/520866.jpg")  no-repeat center center fixed',
        //   backgroundSize: "cover",
        // }}
      >
        <StyledDiv>
          <DecoratorBlob1>
            {" "}
            <img src={Logo2} alt="logo" />
          </DecoratorBlob1>
          <FAQ
            subheading={<Subheading>Privacy Policies</Subheading>}
            heading={
              <>
                Read our <HighlightedText>Privacy Policy </HighlightedText>
              </>
            }
            faqs={[
              {
                question: (
                  <span className="brandPrimary">Terms and Conditions</span>
                ),
                answer: <Terms />,
              },
              {
                question: (
                  <span className="brandPrimary">
                    Links to Third-Party Sites
                  </span>
                ),
                answer: <ThirdParties />,
              },
              {
                question: (
                  <span className="brandPrimary">Your Privacy Choices</span>
                ),
                answer: <PrivacyChoices />,
              },
              {
                question: (
                  <span className="brandPrimary">
                    Protection of Information
                  </span>
                ),
                answer: <Information />,
              },
              {
                question: (
                  <span className="brandPrimary">Do-Not-Track Signals</span>
                ),
                answer: <Track />,
              },
              {
                question: (
                  <span className="brandPrimary">
                    Changes to this Privacy Policy
                  </span>
                ),
                answer: <PolicyChanges />,
              },
              {
                question: <span className="brandPrimary">Contact Us</span>,
                answer: <PolicyContact />,
              },
            ]}
          />
        </StyledDiv>
      </div>

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
        href="https://wa.me/447466874452"
        class="whatsapp_float bounceIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
      <StyledDiv>
        <Footer />
      </StyledDiv>
    </AnimationRevealPage>
  );
};

export default PrivacyPolicies;
