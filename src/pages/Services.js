import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import "../styles/GlobalCss.css";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import GetStarted from "components/cta/GetStarted";
import Footer from "components/footers/Footer.js";

import CarouselFade from "components/hero/CarouselFade";
import Quote from "components/hero/Quote";


import { ReactComponent as ArrowUp } from "feather-icons/dist/icons/arrow-up.svg";

import NavBar from "components/hero/NavBar";
import Logo1 from "../images/Logo2.png";


const StyledDiv = tw.div` p-8`;

const Services = () => {


  const [show, setShow] = useState(false);
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      window.scrollY > 200 ? setShow(true) : setShow(false);
    });
  });

  return (
    <AnimationRevealPage>
      <div
        style={{
          background: " #f2f2f2",
        }}
        // style={{
        //   background:
        //     "linear-gradient(0deg, rgba(34,193,195,0) -3%, rgba(253,106,45,0.8785889355742297) 100%)",
        // }}
        // style={{
        //   background:
        //     'url("https://wallpaperaccess.com/full/520866.jpg")  no-repeat center center fixed',
        //   backgroundSize: "cover",
        // }}
      >
        {/* <VideoPlayer
          className="video"
          src={
            "https://player.vimeo.com/external/454460055.sd.mp4?s=b423b13e5ab70ec1bca0a0cb5299a2a05893f8fe&profile_id=164&oauth2_token_id=57447761"
          }
          autoPlay={true}
          muted={true}
        /> */}
        <StyledDiv>
          {" "}
          {/* <Header /> */}
          <NavBar icon={Logo1} />
          <CarouselFade />
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
        href="https://wa.me/2347061146501"
        class="whatsapp_float bounceIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
      <StyledDiv>
        <Quote />

        <GetStarted />

        <Footer />
      </StyledDiv>
    </AnimationRevealPage>
  );
};

export default Services;
