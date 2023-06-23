import Image from "next/image";
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
import token from "@/services/auth";
import { dislikeRoom, likeRoom } from "@/services/apiClients/rooms";


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
  path = '/',
  liked = false
}) {
  return (
    <div className="p-5 bg-white shadow-md rounded-xl w-[300px] mb-3">
      <Link href={path}><Image src={images} width={300} height={175} alt={title} className="rounded-md mb-2.5 w-full h-[173px]" /></Link>
      <h6 className="text-md font-medium mb-3"><Link href={path}>{title}</Link></h6>
      <div className="grid grid-cols-2 gap-y-3 gap-x-2.5 mb-5">
        <div className="text-sm font-normal text-light-black flex items-center gap-2">
          <b className="font-medium">Type: </b>{apartment_type}
        </div>
        <div className="text-sm font-normal text-light-black flex items-center gap-2">
          <b className="font-medium">Ratings: </b>
          <div className="text-yellow flex items-center">
            <AiFillStar size="16px" /><span>4.7</span>
          </div>
        </div>
        <div className="text-sm font-normal text-light-black flex items-center gap-2">
          <b className="font-medium">Rent: </b>₹ {rent}
        </div>
        <div className="text-sm font-normal text-light-black flex items-center gap-2">
          <b className="font-medium">Security: </b>₹ {security}
        </div>
      </div>
      <div className="flex gap-3">
        <div className="w-10 border border-light-gray rounded-md flex items-center justify-center"><WishListButton liked={liked} id={id} /></div>
        <Link href={path} className="border border-blue rounded-md px-3 py-2 text-center font-medium text-blue flex-1">view details</Link>
      </div>
    </div>
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
      toast.success(data.message)
    }
    return data;
  }

  function handleLikeDislike() {
    if (!token) return showAuthFormFunc();
    if (isLiked) return dislikeFunction();
    return likeFunction();
  }

  return (
    <div onClick={handleLikeDislike} >
      {isLiked ? (
        <AiFillHeart size="25px" className="text-red" />
      ) : (
        <AiOutlineHeart size="25px" className="text-red" />
      )}
    </div>
  );
}
