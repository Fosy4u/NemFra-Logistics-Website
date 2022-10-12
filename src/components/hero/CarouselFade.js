import Carousel from "react-bootstrap/Carousel";

import SlideContent2 from "./SlideContent2";
import SlideContent3 from "./SlideContent3";

import SlideContent4 from "./SlideContent4";
import { useState } from "react";

const NextControlHandle = () => {
  return <div className="arrow-1"></div>;
};
const PreviousControlHandle = () => {
  return <div className="arrow-2"></div>;
};
const yes = () => {
  return <span>hello</span>;
};

function CarouselFade() {
  const [pause, setPause] = useState(false);
  return (
    <Carousel
      nextIcon={<NextControlHandle />}
      prevIcon={<PreviousControlHandle />}
      // variant="dark"
      interval="4000"
      style={{ height: "92vh" }}
      indicatorLabels={yes}
    >
      <Carousel.Item onClick={() => setPause(!pause)}>
        <SlideContent2 />
      </Carousel.Item>
      <Carousel.Item onClick={() => setPause(!pause)}>
        <SlideContent3 />
      </Carousel.Item>
      <Carousel.Item onClick={() => setPause(!pause)}>
        <SlideContent4 />
      </Carousel.Item>

      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://imgs.search.brave.com/-Wmaf3A34mcP9o1ucEIaiex4IHpEAc_fVTb1ews65wY/rs:fit:780:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5a/bVI5YzR0Si00RVJj/bE1qLU5pM1ZRSGFF/ZyZwaWQ9QXBp"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item> */}
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://imgs.search.brave.com/-Wmaf3A34mcP9o1ucEIaiex4IHpEAc_fVTb1ews65wY/rs:fit:780:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5a/bVI5YzR0Si00RVJj/bE1qLU5pM1ZRSGFF/ZyZwaWQ9QXBp"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}

export default CarouselFade;
