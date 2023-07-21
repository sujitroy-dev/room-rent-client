"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  showRegistierForm,
  showLoginForm,
} from "@/redux/features/layout/layoutSlice";
import { updateLoginStatus } from "@/redux/features/auth/authSlice";
import token from "@/services/auth";
import { AiFillHeart } from "react-icons/ai";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

interface globAuthState {
  auth: {
    isLoggedin: boolean;
  };
}

export default function Header() {
  const dispatch = useDispatch();
  const isLoggedin = useSelector(
    (state: globAuthState) => state.auth.isLoggedin
  );

  const router = useRouter();

  useEffect(() => {
    if (token) dispatch(updateLoginStatus(true));
    else dispatch(updateLoginStatus(false));
  }, [token]);

  function logoutHandler() {
    Cookies.remove("token");
    localStorage.removeItem("token");
    router.refresh();
  }

  return (
    <>
      <header className="fixed w-full shadow-md z-[1000] bg-white">
        <div className="container m-auto py-5 flex items-center justify-between text-dark">
          <Link href="/" className="text-3xl font-semibold">
            Room Rent
          </Link>
          <div className="flex items-center gap-4">
            {!isLoggedin && (
              <>
                <button
                  className="px-5 py-2 bg-white text-dark font-medium border border-dark rounded-md"
                  onClick={() => dispatch(showLoginForm())}
                >
                  Login
                </button>
                <button
                  className="px-5 py-2 bg-dark text-white font-medium border border-dark rounded-md"
                  onClick={() => dispatch(showRegistierForm())}
                >
                  Sign up
                </button>
              </>
            )}
            {isLoggedin && (
              <>
                <Link href="/wishlist" className="flex gap-2 mr-2">
                  <AiFillHeart size="25px" className="text-red" />
                  <span className="">Wishlist</span>
                </Link>
                <button
                  className="px-5 py-2 bg-dark text-white font-medium border border-dark rounded-md"
                  onClick={logoutHandler}
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </header>
      <div className="h-20 w-full relative" />
    </>
  );
}
