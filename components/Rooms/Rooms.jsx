"client side"
import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import styles from "./Rooms.module.scss";
import RoomCard from "./RoomCard/RoomCard";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import {useQuery} from 'react-query';


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
  const fetchRecentRooms = async () => {
		const res = await fetch('http://localhost:4000/api/room/recent');
    return res.json();
	};

  const {data: rooms, error, isLoading} = useQuery('recent-rooms', fetchRecentRooms);

  fetchRecentRooms();
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
          {rooms?.map((room) => (
            <RoomCard
              key={room._id}
              title={room.title}
              rent={room.rent_amount}
              currency={room.currency}
              deposit={room.deposit}
              security={room.security_amount}
              postedTime={room.postedTime}
              images={room.pictures?.[0]}
              location={room.location}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}
