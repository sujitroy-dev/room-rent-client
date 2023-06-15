import Image from "next/image";
import styles from "./RoomCard.module.scss";
import Link from "next/link";
import { useDispatch } from 'react-redux'
import { makeAuthFormVisible } from '@/redux/features/layout/layoutSlice.js'
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineHeart,
} from "react-icons/ai";
import { useState } from "react";
import { toast } from "react-toastify";
import token from "@/data/token";

export default function RoomCard({
  id,
  title,
  rent,
  apartment_type,
  currency,
  security,
  postedTime,
  images,
  location,
  path='/',
  liked=false
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
        <WishListButton liked={liked} id={id}/>
        <Link href={path} className={styles["view-btn"]}>
          View Details
        </Link>
      </div>
    </div>
  );
}

function WishListButton({ liked, id }) {
  const [isLiked, setLiked] = useState(liked);
  const dispatchGlob = useDispatch();
  const showAuthFormFunc = () => dispatchGlob(makeAuthFormVisible());


  async function likeFunction() {
    const response = await fetch(`${process.env.API_BASE}/wishlist/add/${id}`, {
      method: "POST",
      headers: {
        credentials: 'include',
        Authorization: token
      },
    })
    const data = await response.json();
    if (data.success) {
      setLiked(true);
      toast.success(data.message);
    }
    return data;
  }
  async function dislikeFunction() {
    const response = await fetch(`${process.env.API_BASE}/wishlist/remove/${id}`, {
      method: "DELETE",
      headers: {
        credentials: 'include',
        Authorization: token
      },
    })
    const data = await response.json();
    if (data.success) {
      setLiked(false);
      toast.success(data.message)
    }
    return data;
  }
  
  function handleLikeDislike() {
    Authorization: token
    if(!token) return showAuthFormFunc();
    if(isLiked) return dislikeFunction();
    return likeFunction();
  }
  
  return (
    <div
      className={styles["wishlist-btn"]}
      onClick={handleLikeDislike}
    >
      {isLiked ? (
        <AiFillHeart size="25px" className={styles["wishlist-icon"]} />
      ) : (
        <AiOutlineHeart size="25px" className={styles["wishlist-icon"]} />
      )}
    </div>
  );
}
