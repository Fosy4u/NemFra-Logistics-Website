import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import "../styles/GlobalCss.css";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import GetStarted from "components/cta/GetStarted";
import Footer from "components/footers/Footer.js";
import Quote from "components/hero/Quote";
import { SectionHeadingTop } from "components/misc/Headings.js";
import { ReactComponent as ArrowUp } from "feather-icons/dist/icons/arrow-up.svg";
import Logo2 from "../images/Logo2.png";
import Truck1 from "../images/Truck-1-on-white-background.png";
import TruckSales2 from "../images/TruckSales2.png";
import Custom from "../images/customClearing.jpeg";

import NavBar from "components/hero/NavBar";
import ServiceDescription from "components/hero/ServiceDescription";
import styled from "styled-components";
import OtherServices from "components/hero/OtherServices";

const DecoratorBlob1 = styled.div`
  ${tw`pointer-events-none opacity-5 absolute left-1/2 bottom-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;

const StyledDiv = tw.div` p-8`;
const Heading = tw(SectionHeadingTop)`w-full`;

const cards = [
  {
    imageSrc: TruckSales2,
    company: "Truck Sales.",

    title: "Shop directly from European Market",

    serviceLink: "/services/truck-sales",
  },
  {
    imageSrc: Custom,
    company: "Custom Clearing / Documentation",
    title: "Clear your shipment and have it on your door post with no hassle",

    serviceLink: "/services/custom-clearing",
  },
];

const RoadTransport = () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;

  const [show, setShow] = useState(false);
  const [showWhite, setShowWhite] = useState(false);
  useEffect(() => {
    document.title =
      "Road Transportation - A Tech-Enabled Truck Logistics and Sales company in Nigeria.";
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
          {" "}
          {/* <Header /> */}
          <Heading className="mt-5">
            <HighlightedText>Road Transportation / Haulage </HighlightedText>
          </Heading>
        </StyledDiv>
      </div>
      <span>
        <ServiceDescription
          description1="We offer truck logistic solution accross all the states in Nigeria. We scrutinise the small print
          to identify where we might save you time and money. You’ll have
          specialised trucks driven by uniformed drivers with extensive
          expertise.. "
          description2='We have a 24 hours tracking system which gives you visibilty and update on your goods. We often say "our drivers never drive alone" Yes, because our drivers are been monitored and assisted by well-trained contollers ensuring adherence to all our policies especially health and safety.'
          description3="We are just one call/chat or email away. Let our experienced team kickstart our promise to you."
          subheading={
            <Subheading>OnTime! EveryTime!! EveryWhere!!!</Subheading>
          }
          imageSrc={Truck1}
          imageBorder={true}
          imageDecoratorBlob={true}
          imageAlt="NemFra Logistics"
        />
      </span>
      <DecoratorBlob1>
        {" "}
        <img src={Logo2} alt="logo" />
      </DecoratorBlob1>
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
        title="Whatsapp"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
      <StyledDiv>
        <Quote />
        <OtherServices cards={cards} />

        <GetStarted />

        <Footer />
      </StyledDiv>
    </AnimationRevealPage>
  );
};

export default RoadTransport;
