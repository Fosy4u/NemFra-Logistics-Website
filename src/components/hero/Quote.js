import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  DialogHeader,
} from "@material-tailwind/react";
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

const Actions = styled.div`
  ${tw`relative max-w-md text-center mx-auto lg:mx-0`}
  input {
    ${tw`sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300  focus:border-primary-500 hover:border-gray-500`}
  }
  button {
    ${tw`w-full sm:absolute right-0 top-0 bottom-0 bg-primary-500 text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-primary-900 transition duration-300`}
  }
`;
const Span = tw.span`text-red-500 border-gray-500 hover:bg-gray-100 hover:text-primary-500 hover:border-primary-500`;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Quote = () => {
  const [email, setEmail] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const [showQuote, setShowQuote] = useState(false);
  const [quoteMode, setQuoteMode] = useState("");

  const handleCloseQuote = () => setShowQuote(false);
  const handleShowQuote = () => setShowQuote(true);
  return (
    <div className="d-flex justify-content-center alighn-items-center">
      <Actions>
        <input
          type="text"
          placeholder="Your E-mail Address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Popover
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
        >
          <PopoverHandler>
            <button>Get Quote</button>
          </PopoverHandler>
          <PopoverContent className="d-flex flex-column">
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
          </PopoverContent>
        </Popover>
      </Actions>

      <Dialog
        open={showQuote}
        onClose={handleCloseQuote}
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
            initial={{ email }}
            setShowAlert={setShowAlert}
            formType={quoteMode}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Quote;
