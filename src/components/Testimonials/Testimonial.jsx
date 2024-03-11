import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Gilbert was a game-changer for our data analysis projects. His keen eye for detail and ability to turn complex datasets into actionable insights truly set him apart. A true professional, he exceeded our expectations, and we look forward to future collaborations!",
    },
    {
      img: profilePic2,
      review:
        "We had the pleasure of working with Gilbert on our big data project, and his expertise in database management was invaluable. His meticulous approach to data cleaning and preprocessing ensured the accuracy and reliability of our information. We are grateful for his contribution and look forward to future collaborations!",
    },
    {
      img: profilePic3,
      review:
        "Gilbert's data visualization skills brought a whole new dimension to our reports. His creative and visually engaging charts not only made the data understandable but also captivated our audience. We highly recommend Gilbert for anyone seeking a data analyst with a unique blend of technical and creative skills.",
    },
    {
      img: profilePic4,
      review:
        "Gilbert has been a revelation in data analysis. His expertise in AI and big data is unmatched, bringing a blend of precision and innovation to our projects. A strategic partner in every sense, I highly recommend Gilbert for anyone seeking impactful data-driven results.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span className="text">{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
