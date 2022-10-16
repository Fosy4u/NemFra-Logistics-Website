import React, { useEffect, useState } from "react";

import { css } from "styled-components/macro"; //eslint-disable-line
import "../styles/GlobalCss.css";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import VideoBackground from "components/hero/VideoBackground";
import HomeBody from "components/hero/HomeBody";
import PhoneNumber from "components/hero/PhoneNumber";

export default () => {
  const [showWhite, setShowWhite] = useState(false);
  const [open, setOpen] = useState(false);
  const [firstLoad, setFirstLoad] = useState(false);

  useEffect(() => {
    document.title =
      "Home - A Tech-Enabled Truck Logistics and Sales company in Nigeria.";
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      window.scrollY > 700 ? setShowWhite(true) : setShowWhite(false);
    });
  });
  useEffect(() => {
    if (!firstLoad) {
      let timer1 = setTimeout(() => {
        setOpen(true);
        setFirstLoad(true);
      }, 2000);

      return () => {
        clearTimeout(timer1);
      };
    }
  });

  return (
    <AnimationRevealPage>
      <VideoBackground showWhite={showWhite}>
        <PhoneNumber open={open} setOpen={setOpen} />
        <HomeBody />

        {/* <div
          style={{
            background: " #f2f2f2",
          }}
          style={{
            background:
              "linear-gradient(0deg, rgba(34,193,195,0) -3%, rgba(253,106,45,0.8785889355742297) 100%)",
          }}
          style={{
            background:
              'url("https://wallpaperaccess.com/full/520866.jpg")  no-repeat center center fixed',
            backgroundSize: "cover",
          }}
        >
          <VideoPlayer
            className="video"
            src={
              "https://player.vimeo.com/external/454460055.sd.mp4?s=b423b13e5ab70ec1bca0a0cb5299a2a05893f8fe&profile_id=164&oauth2_token_id=57447761"
            }
            autoPlay={true}
            muted={true}
          />
          <StyledDiv>
            <Hero roundedHeaderButton={true} />
            <CarouselFade />
          </StyledDiv>
        </div> */}
      </VideoBackground>
    </AnimationRevealPage>
  );
};
