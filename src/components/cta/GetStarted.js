import React, { useState } from "react";
import styled from "styled-components"; //eslint-disable-line
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-9.svg";
import { ContentWithPaddingXl, Container } from "components/misc/Layouts";
import { ReactComponent as FacebookIcon } from "images/facebook-icon.svg";
import { ReactComponent as InstagramIcon } from "feather-icons/dist/icons/instagram.svg";
import { ReactComponent as Linkedin } from "feather-icons/dist/icons/linkedin.svg";
import { ReactComponent as Phone } from "feather-icons/dist/icons/phone.svg";
import { ReactComponent as Mail } from "feather-icons/dist/icons/mail.svg";

import Logo2 from "../../images/Logo2.png";
import { DialogHeader } from "@material-tailwind/react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import ContactUsForm from "components/forms/ContactUsForm";
import CloseIcon from "@mui/icons-material/Close";
import GetQuoteForm from "components/forms/GetQuoteForm";
import {
  Alert,
  Collapse,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Slide,
} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PrimaryBackgroundContainer = tw.div`py-20 lg:py-24 bg-primary-500 rounded-lg relative`;
const Row = tw.div`px-8 max-w-screen-lg mx-auto flex items-center relative z-10 flex-col lg:flex-row text-center lg:text-left`;

const ColumnContainer = tw.div`lg:w-1/2 max-w-lg`;
const TextContainer = tw(ColumnContainer)``;
const Text = tw.h5`text-gray-100 text-2xl sm:text-3xl font-bold`;

const LinksContainer = tw(
  ColumnContainer
)`flex justify-center lg:justify-end mt-6 lg:mt-0 flex-col sm:flex-row`;

const Link = tw.button`w-full sm:w-auto text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 mt-4 first:mt-0 sm:mt-0 sm:mr-8 sm:last:mr-0 rounded-full font-bold border border-transparent tracking-wide transition duration-300 focus:outline-none focus:shadow-outline`;
const Span = tw.span`text-red-500 border-gray-500 hover:bg-gray-100 hover:text-primary-500 hover:border-primary-500`;
const PrimaryLink = tw(
  Link
)`bg-red-500 text-gray-100 shadow-lg hocus:bg-red-600 hocus:text-gray-200`;

const SecondaryLink = tw(
  Link
)`text-gray-100 border-gray-500 hover:bg-gray-100 hover:text-primary-500 hover:border-primary-500`;

const DecoratorBlobContainer = tw.div`absolute inset-0 overflow-hidden rounded-lg`;
const DecoratorBlob1 = tw.span`absolute bottom-0 left-0 w-80 h-80 transform -translate-x-20 translate-y-32 text-primary-700 opacity-50`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob1
)`absolute top-0 right-0 w-80 h-80 transform  translate-x-20 -translate-y-64 text-primary-700 opacity-50`;

const SocialLinksContainer = tw.div`mt-8 md:mt-0 flex`;
const SocialLink = styled.a`
  ${tw`cursor-pointer p-2 rounded-full bg-gray-100 text-gray-900 hover:bg-gray-400 transition duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-4 h-4`}
  }
`;
export default ({
  text = "We’re passionate about helping clients with empathy and transparency while giving them the best of service.",
  primaryLinkText = "Get Quote",
  secondaryLinkText = "Contact Us",
  pushDownFooter = true,
}) => {
  const [show, setShow] = useState(false);
  const [showQuote, setShowQuote] = useState(false);
  const [quoteMode, setQuoteMode] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseQuote = () => setShowQuote(false);
  const handleShowQuote = () => setShowQuote(true);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Select Quote</Popover.Header>
      <Popover.Body className="d-flex flex-column">
        <Span
          className="btn border rounded-pill mb-1 "
          tw="hover:text-primary-500"
          onClick={() => {
            setQuoteMode("logistics");
            handleShowQuote();
          }}
          variant="gradient"
        >
          Truck Logistics
        </Span>
        <Span
          className="btn border rounded-pill mt-1"
          onClick={() => {
            setQuoteMode("sales");
            handleShowQuote();
          }}
        >
          Truck Sales
        </Span>
      </Popover.Body>
    </Popover>
  );

  return (
    <Container css={pushDownFooter && tw`mb-20 lg:mb-24`}>
      <ContentWithPaddingXl>
        <PrimaryBackgroundContainer>
          <Row>
            <TextContainer>
              <Text>{text}</Text>
            </TextContainer>
            <LinksContainer>
              <OverlayTrigger trigger="click" placement="top" overlay={popover}>
                <PrimaryLink>{primaryLinkText}</PrimaryLink>
              </OverlayTrigger>

              <SecondaryLink onClick={handleShow}>
                {secondaryLinkText}
              </SecondaryLink>
            </LinksContainer>
          </Row>
          <DecoratorBlobContainer>
            <DecoratorBlob1>
              <img src={Logo2} alt="logo" />
            </DecoratorBlob1>
            <DecoratorBlob2 />
          </DecoratorBlobContainer>
        </PrimaryBackgroundContainer>
      </ContentWithPaddingXl>
      <Dialog
        open={show}
        onClose={handleClose}
        TransitionComponent={Transition}
        keepMounted
        fullWidth
        size="md"
      >
        <DialogHeader className="d-flex flex-column ">
          <span className="d-flex justify-content-between">
            <DialogTitle className="brandPrimary">Contact Us</DialogTitle>
            <span onClick={handleClose} style={{ cursor: "pointer" }}>
              <CloseIcon fontSize="inherit" />
            </span>
          </span>
          <Collapse in={showAlert}>
            <Alert
              severity="success"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setShowAlert(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              Thanks for sending your request. We will get back to you as soon
              as possible
            </Alert>
          </Collapse>
        </DialogHeader>

        <DialogContent>
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column mt-2">
              <span className="d-flex">
                {" "}
                <span tw="text-primary-500">
                  <Mail />
                </span>{" "}
                <span className="brandPrimary ms-2 mb-1">info@nemfra.com </span>
              </span>
              <span className="d-flex">
                <span tw="text-primary-500">
                  <Phone />
                </span>
                <span className="brandPrimary ms-2">+2347061146501</span>
              </span>
            </div>
            <span>
              <SocialLinksContainer>
                <SocialLink href="https://facebook.com">
                  <FacebookIcon />
                </SocialLink>
                <SocialLink href="https://twitter.com">
                  <InstagramIcon />
                </SocialLink>
                <SocialLink href="https://twitter.com">
                  <Linkedin />
                </SocialLink>
              </SocialLinksContainer>
            </span>
          </div>
          <ContactUsForm
            setShowAlert={setShowAlert}
            formType={"Contact Form"}
          />
        </DialogContent>
      </Dialog>
      <Dialog
        open={showQuote}
        onClose={handleClose}
        TransitionComponent={Transition}
        keepMounted
        fullWidth
        size="md"
      >
        <DialogHeader className="d-flex flex-column ">
          <span className="d-flex justify-content-between">
            <DialogTitle className="brandPrimary">
              {" "}
              {quoteMode === "logistics" && <span>Truck Logistics Quote</span>}
              {quoteMode === "sales" && <span>Truck Sales Quote</span>}
            </DialogTitle>
            <span onClick={handleCloseQuote} style={{ cursor: "pointer" }}>
              <CloseIcon fontSize="inherit" />
            </span>
          </span>
          <Collapse in={showAlert}>
            <Alert
              severity="success"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setShowAlert(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              Thanks for sending your request. We will get back to you as soon
              as possible
            </Alert>
          </Collapse>
        </DialogHeader>
        <DialogContent>
          {quoteMode === "sales" && (
            <span>
              The Information you provide will help us know the right European
              companies that fit your request. Note that you can choose to pay
              on delivery
            </span>
          )}
          <GetQuoteForm
            mode={quoteMode}
            setShowAlert={setShowAlert}
            formType={quoteMode}
          />
        </DialogContent>
      </Dialog>
    </Container>
  );
};
