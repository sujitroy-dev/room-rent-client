"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { showRegistierForm, showLoginForm } from "@/redux/features/layout/layoutSlice.js";
import token from "@/services/auth";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { AiFillHeart } from "react-icons/ai";


export default function HeaderWithoutSearch() {
  const dispatch = useDispatch();
  const [isLoggedIn, setLoggedIn] = useState(null);
  const router = useRouter();
  
  useEffect(() => {
    if (token) {
      return setLoggedIn(true)
    }else{
      return setLoggedIn(false);
    }
  }, [token]);

  function logoutHandler() {
    Cookies.remove("token");
    localStorage.removeItem("token");
    router.refresh();
  }

  return (
    <header className="w-full shadow-md bg-white fixed z-[1000]">
      <div className="container m-auto py-5 flex itmes-center justify-between">
        <Link href="/" className="text-3xl text-dark font-semibold">Room Rent</Link>
        <div className="flex items-center gap-4">
          {!isLoggedIn ? <>
            <button className="border border-dark bg-darkest-blue text-dark py-2 px-5 font-medium rounded-md" onClick={()=>dispatch(showLoginForm())}>Loign</button>
            <button className="border border-dark bg-dark text-white py-2 px-5 font-medium rounded-md" onClick={()=>dispatch(showRegistierForm())}>Sign up</button>
          </>:
          <>
          <Link href="/wishlist" className="flex gap-2 mr-4 items-center">
            {/* <AiFillHeart size="25px" className="text-red border border-dark text-6 rounded-md w-10 h-10 p-1"/> */}
            <AiFillHeart size="25px" className="text-red"/>
            <span>Wishlist</span>
          </Link>
            <button className="border border-dark bg-dark text-white py-2 px-5 font-medium rounded-md" onClick={logoutHandler}>Logout</button>
          </>
          }
        </div>
      </div>
    </header>
  );
}
