import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { HamburgerSpin } from "react-animated-burgers";
import Nav from "components/hero/Nav";
import Logo1 from "../../images/Logo1.png";
import tw from "twin.macro";
import styled from "styled-components";
import Logo2 from "../../images/Logo2.png";
import { Dialog, DialogHeader } from "@material-tailwind/react";
import { DialogContent, DialogTitle, Slide } from "@mui/material";
import ContactUsForm from "components/forms/ContactUsForm";
import { ReactComponent as FacebookIcon } from "images/facebook-icon.svg";
import { ReactComponent as InstagramIcon } from "feather-icons/dist/icons/instagram.svg";
import { ReactComponent as Phone } from "feather-icons/dist/icons/phone.svg";
import { ReactComponent as Mail } from "feather-icons/dist/icons/mail.svg";
import { ReactComponent as Close } from "feather-icons/dist/icons/x.svg";
import { ReactComponent as Linkedin } from "feather-icons/dist/icons/linkedin.svg";
import {  useNavigate } from "react-router-dom";

export const NavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-orange-600 hocus:text-primary-500
`;

const SocialLinksContainer = tw.div`mt-8 md:mt-0 flex`;
const SocialLink = styled.a`
  ${tw`cursor-pointer p-2 rounded-full bg-gray-100 text-gray-900 hover:bg-gray-400 transition duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-4 h-4`}
  }
`;
const drawerWidth = 240;
const navItems = [
  { label: "Home", link: "/" },
  { label: "About", link: "/aboutUs" },
  { label: "Services", link: "/services" },
  { label: "Contact Us" },
];

export const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};

  img {
    ${tw`w-10 mr-3`}
  }
`;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function NavBar(props) {
  const navigate = useNavigate();
  const { window, showWhite, icon } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [show, setShow] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleNav = (link) => {
    navigate(link);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <LogoLink href="/">
        <img src={icon || Logo2} alt="logo" className="swing" />
      </LogoLink>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => handleNav(item.link)}
            >
              {item.link && <p>{item.label}</p>}
              {!item.link && <p onClick={handleShow}>{item.label}</p>}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" color={showWhite ? "inherit" : "transparent"}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ mr: 2, flexGrow: 1, display: { sm: "none" } }}
          >
            <LogoLink href="/">
              <img
                src={showWhite ? Logo2 : icon || Logo1}
                alt="logo"
                className="swing"
              />
            </LogoLink>
          </Typography>

          <Box sx={{ display: { sm: "none" } }}>
            <HamburgerSpin
              isActive={mobileOpen}
              toggleButton={handleDrawerToggle}
              buttonColor={"#F15A29"}
              barColor="white"
              buttonWidth={20}
            />
          </Box>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <LogoLink href="/">
              <img
                src={showWhite ? Logo2 : icon || Logo1}
                alt="logo"
                className="swing"
              />
            </LogoLink>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Nav
              roundedHeaderButton
              showWhite={showWhite}
              handleShow={handleShow}
            />
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Dialog
        open={show}
        onClose={handleClose}
        TransitionComponent={Transition}
        keepMounted
        fullWidth
        size="md"
      >
        <DialogHeader className="d-flex justify-content-between">
          <DialogTitle className="brandPrimary">Contact Us</DialogTitle>
          <span onClick={handleClose} style={{ cursor: "pointer" }}>
            <Close />
          </span>
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

                <span className="brandPrimary ms-2">
                  {" "}
                  <a href="tel:+2347061146501">+2347061146501</a>
                </span>
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
          <ContactUsForm />
        </DialogContent>
      </Dialog>
    </Box>
  );
}
