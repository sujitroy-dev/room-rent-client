import RoomCard from "@/components/Rooms/RoomCard/RoomCard";
import styles from "./index.module.scss";
import WithoutSearchLayout from "@/layouts/Default";
import { useQuery } from "react-query";
import {
  getWishlist,
  likeRoom,
  dislikeRoom,
} from "@/services/apiClients/rooms";
import Image from "next/image";
import { AiFillHeart, AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { makeAuthFormVisible } from "@/redux/features/layout/layoutSlice";
import token from "@/services/auth";
import { toast } from "react-toastify";

export default function Wishlist() {
  const { data: rooms } = useQuery("wishlist-rooms", getWishlist);

  return (
    <WithoutSearchLayout>
      <div className="container m-auto">
        <div className={styles.wishlist}>
          {rooms?.data?.map((room) => (
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
              liked={true}
            />
          ))}
        </div>
      </div>
    </WithoutSearchLayout>
  );
}

function WishListButton({ liked, id }) {
  const [isLiked, setLiked] = useState(liked);
  const dispatchGlob = useDispatch();
  const showAuthFormFunc = () => dispatchGlob(makeAuthFormVisible());

  async function likeFunction() {
    const data = await likeRoom(id);

    if (data.success) {
      setLiked(true);
      toast.success(data.message);
    }
    return data;
  }
  async function dislikeFunction() {
    const data = await dislikeRoom(id);

    if (data.success) {
      setLiked(false);
      toast.success(data.message);
    }
    return data;
  }

  function handleLikeDislike() {
    if (!token) return showAuthFormFunc();
    if (isLiked) return dislikeFunction();
    return likeFunction();
  }

  return (
    <div onClick={handleLikeDislike}>
      {isLiked ? (
        <AiFillHeart size="25px" className="text-red" />
      ) : (
        <AiOutlineHeart size="25px" className="text-red p-2" />
      )}
    </div>
  );
}
