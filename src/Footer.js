import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TokenIcon from "@mui/icons-material/Token";
import LiveTvIcon from "@mui/icons-material/LiveTv";

const Footer = () => (
  <footer className="footer">
    <center>
      <span>
        {" "}
        <FacebookIcon />
      </span>
      &nbsp;
      <span>
        {" "}
        <GitHubIcon />
      </span>
      &nbsp;
      <span>
        {" "}
        <TokenIcon />
      </span>
      &nbsp;
      <span>
        {" "}
        <LiveTvIcon />
      </span>
    </center>
  </footer>
);

export default Footer;
