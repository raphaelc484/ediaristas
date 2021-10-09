import React from "react";
import {
  FooterStyled,
  FooterContainer,
  FooterTittle,
  AppList,
} from "./Footer.styled";
import { Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <>
      <FooterStyled>
        <FooterContainer>
          <Box sx={{ maxWidth: "400px" }}>
            <FooterTittle>Quem somos</FooterTittle>
            <Typography variant={"body2"} sx={{ marginTop: "16px" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
              ea ipsa quas officia eos, vitae perferendis illo voluptate commodi
              id dolore dignissimos voluptatem perspiciatis eaque nisi ipsam
              quia libero quae?
            </Typography>
          </Box>
          <div>
            <FooterTittle>Baixe nossos aplicativos</FooterTittle>
            <AppList>
              <li>
                <a href={"/"} target={"_blank"} rel="noopener noreferrer">
                  <img src={"/img/logos/app-store.png"} alt={"App Store"} />
                </a>
              </li>
              <li>
                <a href={"/"} target={"_blank"} rel="noopener noreferrer">
                  <img src={"/img/logos/google-play.png"} alt={"Google Play"} />
                </a>
              </li>
            </AppList>
          </div>
        </FooterContainer>
      </FooterStyled>
    </>
  );
};

export default Footer;
