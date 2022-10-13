import React, { useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";

import { Radio } from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-12 lg:py-12`;

const FormContainer = styled.div`
  ${tw`p-10 sm:p-12 md:p-16 bg-primary-500 text-gray-100 rounded-lg relative`}
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  input,
  textarea {
    ${tw`w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 text-gray-100 hocus:border-pink-400 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-gray-500`}
    }
  }
`;

const TwoColumn = tw.div`flex flex-col sm:flex-row justify-between`;
const Column = tw.div`sm:w-5/12 flex flex-col`;
const InputContainer = tw.div`relative py-5 mt-6`;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;
const Input = tw.input``;
const TextArea = tw.textarea`h-24 sm:h-full resize-none`;
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100  rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-primary-500 fill-current w-24`;

const GetQuoteForm = ({ mode, initial }) => {
  const [customerType, setCustomeType] = useState("individual");
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [goodsType, setGoodsType] = useState();
  const [pickUpLocation, setPickUpLocation] = useState();
  const [destination, setDestination] = useState();
  const [companyName, setCompanyName] = useState();
  const [pickUpDate, setPickUpDate] = useState();
  const [insurrance, setInsurrance] = useState();
  const [otherInformation, setOtherInformation] = useState();
  const [manufacturer, setManufacturer] = useState();
  const [truckType, setTruckType] = useState();
  const [tonnage, setTonnage] = useState();
  const [axle, setAxle] = useState();
  const [transmission, setTransmission] = useState();

  useEffect(() => {
    if (initial?.email) {
      setEmail(initial?.email);
    }
  }, [initial]);

  const handleSubmit = () => {
    const payload = {
      firstName,
      lastName,
      email,
      phoneNo,
      companyName,
      goodsType,
      pickUpLocation,
      pickUpDate,
      destination,
      otherInformation,
      axle,
      transmission,
      tonnage,
      insurrance,
      manufacturer,
      truckType,
    };
    console.log(payload);
  };

  return (
    <Container>
      <Content>
        {mode === "logistics" && (
          <FormContainer>
            <div tw="mx-auto max-w-4xl">
              <form action="#">
                <div className="d-flex justify-content-center alighn-items-center">
                  <Radio
                    id="company"
                    name="type"
                    ripple={true}
                    color="purple"
                    checked={customerType === "individual"}
                    onClick={() => setCustomeType("individual")}
                  />
                  <span className="mt-3">Company</span>

                  <Radio
                    color="purple"
                    id="Individual"
                    name="type"
                    ripple={true}
                    checked={customerType === "company"}
                    onClick={() => setCustomeType("company")}
                  />
                  <span className="mt-3">Individual</span>
                </div>
                <TwoColumn>
                  <Column>
                    <InputContainer>
                      <Label htmlFor="email-input"> First Name</Label>
                      <Input
                        id="email-input"
                        type="text"
                        placeholder="E.g.Foster"
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </InputContainer>

                    <InputContainer>
                      <Label htmlFor="email-input"> Email Address</Label>
                      <Input
                        id="email-input"
                        type="email"
                        name="email"
                        value={email || " "}
                        placeholder="E.g. John@mail.com"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </InputContainer>
                    <InputContainer>
                      <Label htmlFor="name-input">Phone Number</Label>
                      <Input
                        id="name-input"
                        type="text"
                        name="name"
                        placeholder="E.g. 08098767***"
                        onChange={(e) => setPhoneNo(e.target.value)}
                      />
                    </InputContainer>
                    <InputContainer>
                      <Label htmlFor="email-input"> Type of Goods</Label>
                      <Input
                        type="text"
                        placeholder="E.g. Beaverages"
                        onChange={(e) => setGoodsType(e.target.value)}
                      />
                    </InputContainer>
                    <InputContainer>
                      <Label htmlFor="email-input"> Pick Up Location</Label>
                      <Input
                        type="text"
                        placeholder="E.g.   35 Marina Street, Lagos Island, Lagos"
                        onChange={(e) => setPickUpLocation(e.target.value)}
                      />
                    </InputContainer>
                  </Column>
                  <Column>
                    <InputContainer>
                      <Label>Last Name</Label>
                      <Input
                        type="text"
                        placeholder="E.g. Joe"
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </InputContainer>
                    <InputContainer>
                      <Label> Company Name</Label>
                      <Input
                        type="text"
                        placeholder="E.g. NemFra Logistics LTD"
                        onChange={(e) => setCompanyName(e.target.value)}
                      />
                    </InputContainer>
                    <InputContainer>
                      <Label>PickUp Date</Label>
                      <Input
                        type="date"
                        name="name"
                        onChange={(e) => setPickUpDate(e.target.value)}
                      />
                    </InputContainer>
                    <InputContainer>
                      <Label>Are the Goods Insured? (Yes or No)</Label>
                      <Input
                        type="text"
                        name="name"
                        onChange={(e) => setInsurrance(e.target.value)}
                      />
                    </InputContainer>
                    <InputContainer>
                      <Label htmlFor="email-input"> Delivery Location</Label>
                      <Input
                        type="text"
                        placeholder="E.g. 16 Amawbia Street, Uwani Enugu"
                        onChange={(e) => setDestination(e.target.value)}
                      />
                    </InputContainer>
                  </Column>
                </TwoColumn>
                <span className="d-flex justify-content-center alighn-items-center">
                  <InputContainer tw="flex-1">
                    <Label htmlFor="name-input">Any other Information?</Label>
                    <TextArea
                      id="message-input"
                      name="message"
                      placeholder="E.g. Details about your enquiry"
                      onChange={(e) => setOtherInformation(e.target.value)}
                    />
                  </InputContainer>
                </span>

                <SubmitButton
                  type="submit"
                  value="Submit"
                  style={{ backgroundColor: "#F15A29" }}
                  onClick={handleSubmit}
                >
                  Submit
                </SubmitButton>
              </form>
            </div>
            <SvgDotPattern1 />
          </FormContainer>
        )}
        {mode === "sales" && (
          <FormContainer>
            <div tw="mx-auto max-w-4xl">
              <form action="#">
                <div className="d-flex justify-content-center alighn-items-center">
                  <Radio
                    id="company"
                    name="type"
                    ripple={true}
                    color="purple"
                    checked={customerType === "individual"}
                    onClick={() => setCustomeType("individual")}
                  />
                  <span className="mt-3">Company</span>
                  <Radio
                    color="purple"
                    id="Individual"
                    name="type"
                    ripple={true}
                    checked={customerType === "company"}
                    onClick={() => setCustomeType("company")}
                  />
                  <span className="mt-3">Individual</span>
                </div>
                <TwoColumn>
                  <Column>
                    <InputContainer>
                      <Label htmlFor="email-input"> First Name</Label>
                      <Input
                        id="email-input"
                        type="text"
                        placeholder="E.g.Foster"
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </InputContainer>

                    <InputContainer>
                      <Label htmlFor="email-input"> Email Address</Label>
                      <Input
                        id="email-input"
                        type="email"
                        name="email"
                        value={email || " "}
                        placeholder="E.g. Foster@mail.com"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </InputContainer>
                    <InputContainer>
                      <Label htmlFor="name-input">Phone Number</Label>
                      <Input
                        id="name-input"
                        type="text"
                        name="name"
                        placeholder="E.g. 08098767***"
                        onChange={(e) => setPhoneNo(e.target.value)}
                      />
                    </InputContainer>
                    <InputContainer>
                      <Label htmlFor="email-input"> Manfacturer</Label>
                      <Input
                        type="text"
                        placeholder="E.g. DAF, Scannia"
                        onChange={(e) => setManufacturer(e.target.value)}
                      />
                    </InputContainer>
                    <InputContainer>
                      <Label htmlFor="email-input"> Type</Label>
                      <Input
                        type="text"
                        placeholder="E.g.   Tractor Unit, Tipper"
                        onChange={(e) => setTruckType(e.target.value)}
                      />
                    </InputContainer>
                  </Column>
                  <Column>
                    <InputContainer>
                      <Label>Last Name</Label>
                      <Input
                        type="text"
                        placeholder="E.g. Ogwudu"
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </InputContainer>
                    <InputContainer>
                      <Label> Company Name</Label>
                      <Input
                        type="text"
                        placeholder="E.g. NemFra Logistics LTD"
                        onChange={(e) => setCompanyName(e.target.value)}
                      />
                    </InputContainer>

                    <InputContainer>
                      <Label>Tonnage</Label>
                      <Input
                        type="text"
                        name="name"
                        placeholder="E.g. 30 Tonnes"
                        onChange={(e) => setTonnage(e.target.value)}
                      />
                    </InputContainer>
                    <InputContainer>
                      <Label> Transmission</Label>
                      <Input
                        type="text"
                        placeholder="E.g. Manual or Automatic"
                        onChange={(e) => setTransmission(e.target.value)}
                      />
                    </InputContainer>
                    <InputContainer>
                      <Label> Axles</Label>
                      <Input
                        type="text"
                        placeholder="E.g. 4 x 2, 6 x 2"
                        onChange={(e) => setAxle(e.target.value)}
                      />
                    </InputContainer>
                  </Column>
                </TwoColumn>
                <span className="d-flex justify-content-center alighn-items-center">
                  <InputContainer tw="flex-1">
                    <Label htmlFor="name-input">Any other Information?</Label>
                    <TextArea
                      id="message-input"
                      name="message"
                      placeholder="E.g. Details about your enquiry"
                      onChange={(e) => setOtherInformation(e.target.value)}
                    />
                  </InputContainer>
                </span>

                <SubmitButton
                  type="submit"
                  value="Submit"
                  style={{ backgroundColor: "#F15A29" }}
                  onClick={handleSubmit}
                >
                  Submit
                </SubmitButton>
              </form>
            </div>
            <SvgDotPattern1 />
          </FormContainer>
        )}
      </Content>
    </Container>
  );
};

export default GetQuoteForm;
