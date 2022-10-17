import React from "react";
import GlobalStyles from "styles/GlobalStyles";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SaaSProductLandingPage from "home/LandingPage";
import AboutUs from "pages/AboutUs";
import Services from "pages/Services";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import RoadTransport from "pages/RoadTransport";
import TruckSales from "pages/TruckSales";
import CustomClearing from "pages/CustomClearing";
import PrivacyPolicies from "pages/PrivacyPolicies";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F15A29",
    },
    secondary: {
      main: "#4D148c",
    },
  },
});

export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<SaaSProductLandingPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/policies" element={<PrivacyPolicies />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/roadtransport" element={<RoadTransport />} />
          <Route path="/services/trucksales" element={<TruckSales />} />
          <Route path="/services/customclearing" element={<CustomClearing />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

// export default EventLandingPage;
// export default HotelTravelLandingPage;
// export default AgencyLandingPage;
// export default SaaSProductLandingPage;
// export default RestaurantLandingPage;
// export default ServiceLandingPage;
// export default HostingCloudLandingPage;

// export default LoginPage;
// export default SignupPage;
// export default PricingPage;
// export default AboutUsPage;
// export default ContactUsPage;
// export default BlogIndexPage;
// export default TermsOfServicePage;
// export default PrivacyPolicyPage;

// export default MainLandingPage;
