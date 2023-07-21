"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import styles from "./Rooms.module.scss";
import RoomCard from "./RoomCard/RoomCard";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import room from "@/types/room";
interface Props {
  header: string;
  rooms: room[];
}

const settings = {
  dots: false,
  infinite: false,
  initialSlide: 0,
  speed: 500,
  slidesToShow: 4.6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1439,
      settings: {
        slidesToShow: 3.1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1380,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1332,
      settings: {
        slidesToShow: 2.9,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1292,
      settings: {
        slidesToShow: 2.8,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1244,
      settings: {
        slidesToShow: 2.7,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2.6,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1156,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1108,
      settings: {
        slidesToShow: 2.4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1060,
      settings: {
        slidesToShow: 2.3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1020,
      settings: {
        slidesToShow: 2.2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 970,
      settings: {
        slidesToShow: 2.1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 930,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 890,
      settings: {
        slidesToShow: 1.9,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 848,
      settings: {
        slidesToShow: 1.8,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1.7,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 1.8,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 725,
      settings: {
        slidesToShow: 1.7,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 670,
      settings: {
        slidesToShow: 1.6,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 630,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 590,
      settings: {
        slidesToShow: 1.6,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 535,
      settings: {
        slidesToShow: 1.4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 490,
      settings: {
        slidesToShow: 1.3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 455,
      settings: {
        slidesToShow: 1.2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function Rooms({ header, rooms = [] }: Props) {
  const CarouselRef = useRef<any>(null);
  return (
    <div className={styles.rooms}>
      <h2 className={styles.title}>{header}</h2>
      <div className={`${styles.rooms__container} container`}>
        <div
          className={styles["prev-slide-btn"]}
          onClick={() => CarouselRef?.current?.slickPrev()}
        >
          <GrLinkPrevious />
        </div>
        <div
          className={styles["next-slide-btn"]}
          onClick={() => CarouselRef?.current?.slickNext()}
        >
          <GrLinkNext />
        </div>
        {rooms.length !== 0 ? (
          <Slider {...settings} ref={CarouselRef}>
            {rooms.map((room: room) => (
              <RoomCard
                key={room._id}
                id={room._id}
                title={room.title}
                rent={room.rent_amount}
                currency={room.currency}
                deposit={room.deposit}
                security={room.security_amount}
                postedTime={room.postedTime}
                images={room.pictures?.[0]}
                location={room.location}
                apartment_type={room.apartment_type}
                path={`/room/${room._id}`}
                liked={room.like}
              />
            ))}
          </Slider>
        ) : (
          <Slider {...settings} ref={CarouselRef}>
            <ShimmerRoomCard />
            <ShimmerRoomCard />
            <ShimmerRoomCard />
            <ShimmerRoomCard />
          </Slider>
        )}
      </div>
    </div>
  );
}

function ShimmerEffect() {
  return (
    <div className={styles["shimmer-effect"]}>
      <ShimmerRoomCard />
      <ShimmerRoomCard />
      <ShimmerRoomCard />
      <ShimmerRoomCard />
    </div>
  );
}

function ShimmerRoomCard() {
  return (
    <div className={`${styles["shimmer-room-card"]}`}>
      <div className={`${styles.banner} animate br`} />
      <div className={`${styles.title} animate br`} />
      <div className={styles.details}>
        <div className={`${styles.item} animate br`} />
        <div className={`${styles.item} animate br`} />
        <div className={`${styles.item} animate br`} />
        <div className={`${styles.item} animate br`} />
      </div>
      <div className={styles.actions}>
        <div className={`${styles.btn} animate br`} />
        <div className={`${styles.btn} animate br`} />
      </div>
    </div>
  );
}
