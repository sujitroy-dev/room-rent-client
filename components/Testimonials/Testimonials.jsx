import Slider from "react-slick";
import styles from "./Testimonials.module.scss";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { useEffect, useRef, useState } from "react";
import TestimonialCard from "./testimonial-card/TestimonialCard";
import { useQuery } from "react-query";

const settings = {
  dots: false,
  infinite: false,
  initialSlide: 0,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

export default function Testimonials() {
  const CarouselRef = useRef(null);

  async function fetchRooms() {
    const response = await fetch(`${process.env.API_BASE}/testimonial`);
    return (await response).json();
  }

  const { data: testimonials } = useQuery("testimonial", fetchRooms, {
    data: [],
  });

  return (
    <div className={styles.testimonials}>
      <h2 className={styles.testimonials__title}>Testimonials</h2>
      <div className={styles.testimonials__container}>
        <div
          className={styles["next-slide-btn"]}
          onClick={() => CarouselRef?.current?.slickNext()}
        >
          <GrLinkNext />
        </div>
        <div
          className={styles["prev-slide-btn"]}
          onClick={() => CarouselRef?.current?.slickPrev()}
        >
          <GrLinkPrevious />
        </div>
        <Slider {...settings} ref={CarouselRef}>
          {testimonials?.data.map((user) => {
            return (
              <TestimonialCard
                key={user.message}
                name={user.name}
                designation={user.designation}
                image={user.user_pic}
                message={user.message}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
