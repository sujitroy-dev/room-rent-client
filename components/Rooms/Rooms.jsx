import React, { useRef } from "react";
import Slider from "react-slick";
import styles from "./Rooms.module.scss";
import RoomCard from "./RoomCard/RoomCard";
import property1 from "@/assets/properties/property1.jpg";
import property2 from "@/assets/properties/property2.jpg";
import property3 from "@/assets/properties/property3.jpg";
import property4 from "@/assets/properties/property4.jpg";
import property5 from "@/assets/properties/property5.jpg";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import Link from "next/link";

const rooms = [
  {
    _id: 1,
    title: "3 BHK Appartment in Guwahati",
    location: "Guwahati, Assam",
    rent: 10000,
    currency: "INR",
    deposit: 10000,
    security: 10000,
    postedTime: "Today",
    images: property1,
  },
  {
    _id: 2,
    title: "3 BHK Appartment in Guwahati",
    location: "Guwahati, Assam",
    rent: 10000,
    currency: "INR",
    deposit: 10000,
    security: 10000,
    postedTime: "Today",
    images: property2,
  },
  {
    _id: 3,
    title: "3 BHK Appartment in Guwahati",
    location: "Guwahati, Assam",
    rent: 10000,
    currency: "INR",
    deposit: 10000,
    security: 10000,
    postedTime: "Today",
    images: property3,
  },
  {
    _id: 4,
    title: "3 BHK Appartment in Guwahati",
    location: "Guwahati, Assam",
    rent: 10000,
    currency: "INR",
    deposit: 10000,
    security: 10000,
    postedTime: "Today",
    images: property4,
  },
  {
    _id: 5,
    title: "3 BHK Appartment in Guwahati",
    location: "Guwahati, Assam",
    rent: 10000,
    currency: "INR",
    deposit: 10000,
    security: 10000,
    postedTime: "Today",
    images: property5,
  },
];
const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1439,
      settings: {
        slidesToShow: 3.1,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1380,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1332,
      settings: {
        slidesToShow: 2.9,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1292,
      settings: {
        slidesToShow: 2.8,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1244,
      settings: {
        slidesToShow: 2.7,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2.6,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1156,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1108,
      settings: {
        slidesToShow: 2.4,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1060,
      settings: {
        slidesToShow: 2.3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1020,
      settings: {
        slidesToShow: 2.2,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 970,
      settings: {
        slidesToShow: 2.1,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 930,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 890,
      settings: {
        slidesToShow: 1.9,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 848,
      settings: {
        slidesToShow: 1.8,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1.7,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 1.8,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 725,
      settings: {
        slidesToShow: 1.7,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 670,
      settings: {
        slidesToShow: 1.6,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 630,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 590,
      settings: {
        slidesToShow: 1.4,
        slidesToScroll: 3,
      },
    },
  ],
};

export default function Rooms({ header }) {
  const CarouselRef = useRef(null);

  return (
    <div className={styles.rooms}>
        <h2 className={styles.title}>{header}</h2>
      <div className={styles.rooms__container}>
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
          {rooms.map((room) => (
            <RoomCard
              key={room._id}
              title={room.title}
              rent={room.rent}
              currency={room.currency}
              deposit={room.deposit}
              security={room.security}
              postedTime={room.postedTime}
              images={room.images}
              location={room.location}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}
