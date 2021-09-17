import React from "react";
import "./footer.scss";
import {
  Discord,
  Facebook,
  Github,
  Instagram,
  Logo,
  Telegram,
  Twitter,
} from "../../../assets";

const Icon = ({ img }) => {
  return (
    <div className="icon-wrapper">
      <img className="icon-medsos" src={img} alt="icon" />
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div>
          <img className="logo" src={Logo} alt="logo" />
        </div>
        <div className="social-wrapper">
          <Icon img={Facebook} />
          <Icon img={Twitter} />
          <Icon img={Instagram} />
          <Icon img={Telegram} />
          <Icon img={Discord} />
          <Icon img={Github} />
        </div>
      </div>
      <div className="copyright">
        <p>Copyright</p>
      </div>
    </div>
  );
};

export default Footer;
