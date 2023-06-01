import Slider from "react-slick";
import styles from "./Testimonials.module.scss";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { useEffect, useRef, useState } from "react";
import TestimonialCard from "./testimonial-card/TestimonialCard";

const settings = {
  dots: false,
  infinite: false,
  initialSlide: 0,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

// const testimonials = [
//   {
//     name: "Thomas Brown",
//     designation: "Software Engineer",
//     user_pic: "https://randomuser.me/api/portraits/men/1.jpg",
//     message: "Room Rent is very easy to use and it has broad categories of rooms"
//   },
//   {
//     name: "John Doe",
//     designation: "Product Manager",
//     user_pic: "https://randomuser.me/api/portraits/men/2.jpg",
//     message: "I found Room Rent incredibly helpful for finding affordable accommodations."
//   },
//   {
//     name: "Emma Thompson",
//     designation: "Marketing Specialist",
//     user_pic: "https://randomuser.me/api/portraits/women/3.jpg",
//     message: "Room Rent made my apartment hunting a breeze. Highly recommended!"
//   },
//   {
//     name: "Michael Smith",
//     designation: "Data Analyst",
//     user_pic: "https://randomuser.me/api/portraits/men/4.jpg",
//     message: "Room Rent's user-friendly interface made it easy to find my dream apartment."
//   },
//   {
//     name: "Sarah Johnson",
//     designation: "Graphic Designer",
//     user_pic: "https://randomuser.me/api/portraits/women/5.jpg",
//     message: "I love how Room Rent provides detailed information about each listing."
//   },
//   {
//     name: "David Brown",
//     designation: "UX Designer",
//     user_pic: "https://randomuser.me/api/portraits/men/6.jpg",
//     message: "Room Rent's search filters helped me narrow down my options quickly."
//   },
//   {
//     name: "Rachel Wilson",
//     designation: "Content Writer",
//     user_pic: "https://randomuser.me/api/portraits/women/7.jpg",
//     message: "I had a fantastic experience using Room Rent to find my new home."
//   }
// ];

export default function Testimonials() {
  const CarouselRef = useRef(null);
  const [ testimonials, setTestimonials] = useState([]);

  async function fetchTestimonials() {
    const Response = await fetch(
      `${process.env.API_BASE}/testimonial`
    );
    const testimonials = await Response.json();
    if (testimonials) setTestimonials(testimonials.data);
  }
  
  useEffect(() => {
    fetchTestimonials()
  }, [])
  

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
          {testimonials.map((user) => {
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
