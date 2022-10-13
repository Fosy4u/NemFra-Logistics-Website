import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import Logo3 from "../../images/Logo3.png";

import { ReactComponent as FacebookIcon } from "images/facebook-icon.svg";
import { ReactComponent as Linkedin } from "feather-icons/dist/icons/linkedin.svg";
import { ReactComponent as InstagramIcon } from "feather-icons/dist/icons/instagram.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-9.svg";
import { Link } from "react-router-dom";

const Container = tw.div`relative bg-primary-500 text-gray-100 -mb-8 -mx-8 px-8 py-20 lg:py-24`;
const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;
const FiveColumns = tw.div`flex flex-wrap text-center sm:text-left justify-center sm:justify-start md:justify-between -mt-12`;

const Column = tw.div`px-4 sm:px-0 sm:w-1/3 md:w-auto mt-12`;

const ColumnHeading = tw.h5`uppercase font-bold`;

const LinkList = tw.ul`mt-6 text-sm font-medium`;
const LinkListItem = tw.li`mt-3 hover:text-orange-600`;
const LinkItem = tw.p`border-b-2 border-transparent hocus:border-gray-100 pb-1 transition duration-300 hover:text-orange-600`;

const Divider = tw.div`my-16 border-b-2 border-primary-400 w-full`;

const ThreeColRow = tw.div`flex flex-col md:flex-row items-center justify-between`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-16`;

const CopywrightNotice = tw.p`text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-gray-400`;

const SocialLinksContainer = tw.div`mt-8 md:mt-0 flex`;
const SocialLink = styled.a`
  ${tw`cursor-pointer p-2 rounded-full bg-gray-100 text-gray-900 hover:bg-gray-400 transition duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

const SubscribeNewsletterColumn = tw(
  Column
)`text-center lg:text-left w-full! lg:w-auto! mt-20 lg:mt-12`;
const SubscribeNewsletterContainer = tw.div`max-w-sm mx-auto lg:mx-0 `;
const SubscribeText = tw.p`mt-2 lg:mt-6 text-sm font-medium text-orange-600`;
const SubscribeForm = tw.form`mt-4 lg:mt-6 text-sm sm:flex max-w-xs sm:max-w-none mx-auto sm:mx-0`;
const Input = tw.input`bg-white text-black px-6 py-3 rounded sm:rounded-r-none border-2 sm:border-r-0 border-gray-400 hover:border-primary-500 focus:outline-none transition duration-300 w-full`;
const SubscribeButton = tw(
  PrimaryButtonBase
)`mt-4 sm:mt-0 w-full sm:w-auto rounded sm:rounded-l-none px-8 py-3 border-2 border-orange-600`;
const DecoratorBlobContainer = tw.div`absolute inset-0 overflow-hidden rounded-lg`;
const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`absolute top-0 left-0 w-80 h-80 transform -translate-x-20 -translate-y-32 text-primary-700 opacity-50`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob1
)`absolute bottom-0 right-0 w-80 h-80 transform  translate-x-32 translate-y-48 text-primary-700 opacity-50`;

const Footer = () => {
  return (
    <Container>
      <Content>
        <FiveColumns>
          <Column>
            <ColumnHeading>Main</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link to="/">
                  <LinkItem>Home</LinkItem>
                </Link>
              </LinkListItem>

              <LinkListItem>
                <Link to="/aboutUs">
                  <LinkItem>About Us</LinkItem>{" "}
                </Link>
              </LinkListItem>

              <LinkListItem>
                <Link to="/services">
                  <LinkItem>Services</LinkItem>{" "}
                </Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Services</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link to="/services/roadtransport">
                  <LinkItem>Road Transportation</LinkItem>
                </Link>
              </LinkListItem>
              <LinkListItem>
                <Link to="/services/trucksales">
                  <LinkItem>Truck Sales</LinkItem>
                </Link>
              </LinkListItem>
              <LinkListItem>
                <Link to="/services/customclearing">
                  <LinkItem>Custom Clearing</LinkItem>
                </Link>
              </LinkListItem>
            </LinkList>
          </Column>

          <Column>
            <ColumnHeading>Legal</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link to="/policies">
                  <LinkItem>Privacy Policy</LinkItem>
                </Link>
              </LinkListItem>

              <LinkListItem>
                <Link to="/policies">
                  <LinkItem>Terms and Conditions</LinkItem>
                </Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <SubscribeNewsletterColumn>
              <SubscribeNewsletterContainer>
                <ColumnHeading>Subscribe to our Newsletter</ColumnHeading>
                <SubscribeText className="brandPrimary">
                  Get in touch with what is happening in Nemfra as well as
                  logistic ecosystem in Nigeria.
                </SubscribeText>
                <SubscribeForm method="get" action="#">
                  <Input type="email" placeholder="Your Email Address" />
                  <SubscribeButton type="submit">Subscribe</SubscribeButton>
                </SubscribeForm>
              </SubscribeNewsletterContainer>
            </SubscribeNewsletterColumn>
          </Column>
        </FiveColumns>
        <Divider />
        <ThreeColRow>
          <LogoContainer>
            <LogoImg src={Logo3} />
          </LogoContainer>
          <CopywrightNotice>
            &copy; NemFra Ltd. All Rights Reserved.
          </CopywrightNotice>
          <SocialLinksContainer>
            <SocialLink href="https://facebook.com">
              <FacebookIcon />
            </SocialLink>

            <SocialLink href="https://youtube.com">
              <InstagramIcon />
            </SocialLink>
            <SocialLink href="https://youtube.com">
              <Linkedin />
            </SocialLink>
          </SocialLinksContainer>
        </ThreeColRow>
      </Content>
      <DecoratorBlobContainer>
        <DecoratorBlob1 />
        <DecoratorBlob2 />
      </DecoratorBlobContainer>
    </Container>
  );
};
export default Footer;
