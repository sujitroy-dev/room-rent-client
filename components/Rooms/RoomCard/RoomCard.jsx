import Image from "next/image";
import styles from "./RoomCard.module.scss";
import Link from "next/link";
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineHeart,
  AiOutlineStar,
} from "react-icons/ai";
import { useState } from "react";

export default function RoomCard({
  title,
  rent,
  apartment_type,
  currency,
  security,
  postedTime,
  images,
  location,
  path='/'
}) {
  return (
    <div className={styles["room-card"]}>
      <Link href={path}>
        <Image src={images} width={300} height={175} alt={title} />
      </Link>
      <Link href={path}>
        <h2 className={styles.title}>{title}</h2>
      </Link>
      <div className={styles.info}>
        <div className={styles.type}>
          <b>Type:</b> {apartment_type}
        </div>
        <div className={styles.ratings}>
          <b>Ratings: </b>
          <AiFillStar size="16px" className={styles["wishlist-icon"]} />
          <span>4.7</span>
        </div>
        <div className={styles.price}>
          <b>Rent:</b> ₹ {rent}
        </div>
        <div className={styles.security}>
          <b>Security:</b> ₹ {security}
        </div>
      </div>
      <div className={styles.location}>{location}</div>
      <div className={styles.action_buttons}>
        <WishListButton liked={true} />
        <Link href={path} className={styles["view-btn"]}>
          View Details
        </Link>
      </div>
    </div>
  );
}

function WishListButton({ liked = false }) {
  const [isLiked, setLiked] = useState(liked);
  return (
    <div
      className={styles["wishlist-btn"]}
      onClick={() => setLiked((prev) => !prev)}
    >
      {isLiked ? (
        <AiFillHeart size="25px" className={styles["wishlist-icon"]} />
      ) : (
        <AiOutlineHeart size="25px" className={styles["wishlist-icon"]} />
      )}
    </div>
  );
}
