import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import Csr from "components/csr/TwoColumnForCSR.js";
import GetStarted from "components/cta/GetStarted";
import Truck2 from "../../images/Truck-2-on-white-background2.png";
import TruckSales from "../../images/TruckSale.jpg";
import { ReactComponent as Star } from "feather-icons/dist/icons/star.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import Quote from "components/hero/Quote";
import { ReactComponent as Heart } from "feather-icons/dist/icons/heart.svg";
import { ReactComponent as ArrowUp } from "feather-icons/dist/icons/arrow-up.svg";
import Footer from "components/footers/Footer";
import TruckBack1 from "../../images/back-2-on-white-background.jpg";


const Heading = tw.h2`font-bold text-4xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-900 leading-tight text-center`;

const StyledDiv = tw.div` p-8`;

const HomeBody = () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;

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
    <>
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

      <StyledDiv className="mt-5">
        <span>
          <Heading>
            What We <HighlightedText>Do</HighlightedText>
          </Heading>

          <MainFeature
            description="Freight over land using trucks of all sizes where possible keeping transit time and costs at its lowest. Monitoring the movement all over the route and tracking from source to delivery point"
            subheading={<Subheading>Road Transportation / Haulage</Subheading>}
            primaryButtonUrl ="/services/roadtransport"
            imageSrc={Truck2}
            imageBorder={true}
            imageDecoratorBlob={true}
          />
          <MainFeature
            description="No more need to pay exorbitant prices for purchase of trucks when you can shop directly from European market and get it delivered to you within two weeks. We assist you through the process starting from linking you to our European Market, helping you select the right truck and assisting with the shipping, clearing and delivering to your door step. Meanwhile, you can choose not to pay until delivery of your truck"
            subheading={<Subheading>Truck Sales</Subheading>}
            primaryButtonUrl ="/services/trucksales"
            imageSrc={TruckSales}
            imageBorder={true}
            imageDecoratorBlob={true}
          />
          <MainFeature
            description="We handle all custom documentation and clearance without any ambiguities in charges or bureaucracies. We can as well transport your cargo to your door step"
            subheading={<Subheading>Custom Clearance</Subheading>}
            primaryButtonUrl ="/services/customclearing"
            imageSrc={
              "https://img.freepik.com/premium-vector/tiny-airport-security-customs-officer-character-filling-huge-declaration-document-check-passenger-baggage-confiscate-illegal-freight-forbidden-things_87771-10638.jpg?w=2000"
            }
            imageBorder={true}
            imageDecoratorBlob={true}
          />
        </span>
        <Quote />
        <Features
          subheading={<Subheading> </Subheading>}
          heading={
            <>
              Why Choose <HighlightedText>Us</HighlightedText>
            </>
          }
        />
        {/* <FeatureWithSteps
          subheading={<Subheading>STEPS</Subheading>}
          heading={
            <>
              Easy to <HighlightedText>Get Started.</HighlightedText>
            </>
          }
          textOnLeft={false}
          imageSrc={macHeroScreenshotImageSrc}
          imageDecoratorBlob={true}
          decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
        /> */}
        <MainFeature2
          subheading={<Subheading className="brandPrimary">VALUES</Subheading>}
          primaryButtonText="About Us"
          primaryButtonUrl="/aboutUs"
          description="Our objective is to be the most transparent, standard, and safest brand in Nigeria. We are committed to making our customers happy and relaxed by simplifying logistics and making truck procurement as affordable as possible by assisting you in buying directly from European market. "
          heading={
            <>
              We Live By Our <HighlightedText>Principles.</HighlightedText>
            </>
          }
          imageSrc={TruckBack1}
          showDecoratorBlob={true}
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

        {/* <Testimonial
          subheading={
            <Subheading className="brandPrimary">Testimonials</Subheading>
          }
          heading={
            <>
              Our Clients <HighlightedText>Love Us.</HighlightedText>
            </>
          }
          testimonials={[
            {
              stars: 5,
              profileImageSrc:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
              heading: "Amazing Customer Support Experience",
              quote:
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
              customerName: "Charlotte Hale",
              customerTitle: "Director, Delos Inc.",
            },
            {
              stars: 5,
              profileImageSrc:
                "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
              heading: "Bought my Truck at the best market rate",
              quote:
                "Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
              customerName: "Adam Cuppy",
              customerTitle: "Founder, EventsNYC",
            },
          ]}
        /> */}
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
          description="We partner with Franca Ogwudu foundation in rendering help in our communities through education scholarships and charities to the less priviledged"
        />

        <GetStarted />
        <Footer />
      </StyledDiv>
    </>
  );
};

export default HomeBody;
