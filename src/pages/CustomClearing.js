import React, { useEffect,  useState } from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import "../styles/GlobalCss.css";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import GetStarted from "components/cta/GetStarted";
import Footer from "components/footers/Footer.js";
import Quote from "components/hero/Quote";
import { SectionHeading } from "components/misc/Headings.js";
import styled from "styled-components";
import Logo2 from "../images/Logo2.png";
import Truck2 from "../images/Truck2OrangeBg.JPG";
import Custom from "../images/customClearing.jpeg";
import { ReactComponent as ArrowUp } from "feather-icons/dist/icons/arrow-up.svg";
import TruckSales2 from "../images/TruckSales2.png";
import NavBar from "components/hero/NavBar";
import ServiceDescription from "components/hero/ServiceDescription";
import OtherServices from "components/hero/OtherServices";


const cards = [
  {
    imageSrc: Truck2,
    company: "Road Transportation.",
    type: "Ad Campaign",
    title: "Get your goods moved to anywhere in Nigeria",
  
    serviceLink: "/services/roadtransport",
  },
  {
    imageSrc: TruckSales2,
    company: "Truck Sales.",

    title: "Shop directly from European Market",
 
    serviceLink: "/services/trucksales",
  },
];

const StyledDiv = tw.div` p-8`;
const Heading = tw(SectionHeading)`w-full`;
const CustomClearing = () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;
  const DecoratorBlob1 = styled.div`
  ${tw`pointer-events-none opacity-5 absolute left-1/2 bottom-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;
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
          {" "}
          {/* <Header /> */}
          <Heading className="mt-5">
            <HighlightedText>Custom Clearance </HighlightedText>
          </Heading>
        </StyledDiv>
      </div>
      <span>
        <ServiceDescription
          description1="NemFra takes the custom clearance and documentation burden off customers. We operate at all ports in Nigeria. With us, you are rest assured of recieving your shipments without any ambiguities or ridiculous prices. "
          description2="Our clients’ business is our first focus at NemFra. Our extensive communication network and significant investment in cutting-edge technology (such as GPS tracking, immediate proof of delivery, and real-time ETAs) ensure that the container’s whole voyage is as efficient as possible – swift, trackable, and on time.."
          description3="We are just one call/chat or email away. Let our experienced team kickstart our promise to you."
          subheading={<Subheading>Clearing Made Simple</Subheading>}
          imageSrc={
           Custom
          }
          imageBorder={true}
          imageDecoratorBlob={true}
        />
      </span>
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
      <DecoratorBlob1>
        {" "}
        <img src={Logo2} alt="logo" />
      </DecoratorBlob1>
      <StyledDiv>
        <Quote />
        <OtherServices cards={cards} />
        <GetStarted />

        <Footer />
      </StyledDiv>
    </AnimationRevealPage>
  );
};

export default CustomClearing;
