import Image from "next/image";
import styles from "./RoomCard.module.scss";
import Link from "next/link";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

export default function RoomCard({
  title,
  rent,
  currency,
  deposit,
  security,
  postedTime,
  images,
  location,
}) {
  return (
    <div className={styles["room-card"]}>
      <Image src={images} width={300} height={175} alt={title} />
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.info}>
        <div className={styles.price}>
          <b>Rent:</b> ₹{rent}
        </div>
        <div className={styles.security}>
          <b>Security:</b> ₹{security}
        </div>
        <div className={styles.deposit}>
          <b>Deposite:</b> ₹{deposit}
        </div>
      </div>
      <div className={styles.location}>{location}</div>
      <div className={styles.action_buttons}>
        <WishListButton liked={true}/>
        <Link href="/" className={styles["view-btn"]}>View Details</Link>
      </div>
    </div>
  );
}

function WishListButton({ liked = false }) {
  const [isLiked, setLiked] = useState(liked)
  return (
    <div className={styles['wishlist-btn']} onClick={()=>setLiked(prev=>!prev)}>
      {isLiked?<AiFillHeart size="25px" className={styles["wishlist-icon"]} />:
      <AiOutlineHeart size="25px" className={styles["wishlist-icon"]} />}
    </div>
  );
}
