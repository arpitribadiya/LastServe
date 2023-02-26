import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { ImFacebook } from "react-icons/im";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="social-media-links">
        <AiOutlineInstagram />
        <ImFacebook />
        <AiOutlineTwitter />
      </div>
      <div className="copyright">
        &#169; Last Serve, 2022. We love our users.
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 4rem;
  background-color: rgb(239, 240, 243);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: auto;
  .social-media-links {
    display: flex;
    justify-content: center;
    gap: 2rem;
    svg {
      width: 20px;
      height: 20px;
      :hover {
        cursor: pointer;
      }
    }
  }
  .copyright {
    text-align: center;
    font-size: 1.4rem;
  }
`;

export default Footer;
