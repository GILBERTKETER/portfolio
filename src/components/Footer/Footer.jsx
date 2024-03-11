import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>
          <a
            style={{
              background: "gold",
              borderRadius: "5px",
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
              padding:"5px",
            }}
            href="mailto:gilbertketer759@gmail.com"
          >
            gilbertketer759@gmail.com
          </a>
        </span>
        <div className="f-icons">
          <a href="https://www.instagram.com/gilbertketer759">
            {" "}
            <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100080933747540">
            {" "}
            <Facebook color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/gilbertketer">
            {" "}
            <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
