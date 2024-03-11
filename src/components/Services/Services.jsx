import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from "./resume.pdf";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <spane className="lineheight">
          <div className="piece">
            {" "}
            <span style={{ fontWeight: "bolder", color: "goldenrod" }}>
              Data Analysis and Interpretation:
            </span>{" "}
            Unleashing Insights from Numbers 🔍📊✨ Dive into the data universe
            to unveil hidden stories! 🚀 I'm the wizard of complex datasets,
            revealing trends and distilling info into actionable insights for
            decision-makers. 🌟
          </div>
          <br />
          <div className="piece abs3">
            <span style={{ fontWeight: "bolder", color: "goldenrod" }}>
              Data Visualization
            </span>
            : Bringing Data to Life 📈🎨✨ Transform raw numbers into a visual
            symphony! 🌈 Through creative charts and dazzling dashboards, I make
            data pop and sizzle, ensuring its story is clear and unforgettable.
            🚀
          </div>
          <br />

          <br />
          <div className="piece abs2">
            <span style={{ fontWeight: "bolder", color: "goldenrod" }}>
              Database Management:
            </span>{" "}
            Efficient Data Handling for Precision 💽🚀✨ Architecting and
            optimizing databases for data magic! 🔮 I ensure data accuracy,
            design slick storage solutions, and turbocharge retrieval speed,
            creating a robust foundation for decision-making brilliance. 🌐
          </div>
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Data Analysis & Machine Learning"}
            detail={
              "Python, R, Java, SQL, Algorithm Implementation, Predictive Models"
            }
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Statistical Modeling & Database Management"}
            detail={
              "Hypothesis Testing, Predictive Modeling, SQL"
            }
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        ></motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
