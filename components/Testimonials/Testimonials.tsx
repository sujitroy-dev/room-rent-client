import Slider from "react-slick";
import styles from "./Testimonials.module.scss";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { useRef } from "react";
import TestimonialCard from "./testimonial-card/TestimonialCard";
import { useQuery } from "react-query";

const settings = {
  dots: false,
  infinite: false,
  initialSlide: 0,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

interface testimonial {
  _id: string;
  name: string;
  designation: string;
  user_pic: string;
  message: string;
}

export default function Testimonials() {
  const CarouselRef = useRef<any>(null);

  async function fetchRooms() {
    const response = await fetch(`${process.env.API_BASE}/testimonial`);
    return (await response).json();
  }

  const { data: testimonials } = useQuery("testimonial", fetchRooms);

  return (
    <div className={styles.testimonials}>
      <h2 className={styles.testimonials__title}>Testimonials</h2>
      <div className={`${styles.testimonials__container} container m-auto`}>
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
        {testimonials !== undefined ? (
          <Slider {...settings} ref={CarouselRef}>
            {testimonials?.data.map((testimonial: testimonial) => {
              return (
                <TestimonialCard
                  key={testimonial._id}
                  name={testimonial.name}
                  designation={testimonial.designation}
                  image={testimonial.user_pic}
                  message={testimonial.message}
                />
              );
            })}
          </Slider>
        ) : (
          <Slider {...settings} ref={CarouselRef}>
            <TestimonialShimmerCard />
            <TestimonialShimmerCard />
            <TestimonialShimmerCard />
          </Slider>
        )}
      </div>
    </div>
  );
}

function TestimonialShimmerCard() {
  return (
    <>
      <div className={styles["testimonials-shimmer"]}>
        <div className={`${styles.image} animate`} />
        <div className={`${styles.name} animate`} />
        <div className={`${styles.message} animate`} />
        <div className={`${styles.designation} animate`} />
      </div>
    </>
  );
}
