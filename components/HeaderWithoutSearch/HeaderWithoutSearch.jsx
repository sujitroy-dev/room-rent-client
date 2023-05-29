"use client";
import styles from "./HeaderWithoutSearch.module.scss";
import Link from "next/link";
import { AiFillHeart } from "react-icons/ai";
import { RiUser6Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { makeAuthFormVisible } from "@/redux/features/layout/layoutSlice.js";
import { useEffect, useState } from "react";
import useParseJWT from "@/hooks/useParseJWT";

export default function HeaderWithoutSearch() {
  const dispatch = useDispatch();
  const showAuthFormFunc = () => dispatch(makeAuthFormVisible());
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    let isLoggedIn = localStorage.getItem("token");

    if (isLoggedIn) {
      const data = useParseJWT(isLoggedIn);
      if (data.email) return setLoggedIn(true);
      return setLoggedIn(false)
    }else{
      return setLoggedIn(false);
    }
  }, []);

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.header__wrapper}>
          <Link href="/" className={styles.header__logo}>
            Room Rent
          </Link>
          <div className={styles["cta-container"]}>
            <Link href="/">
              <AiFillHeart size="25px" className={styles["wishlist-icon"]} />
            </Link>
            {!isLoggedIn ? (
              <div
                className={styles["registier-login"]}
                onClick={showAuthFormFunc}
              >
                Login
              </div>
            ) : (
              <RiUser6Fill size="41px" className={styles["user-icon"]} />
            )}
          </div>
        </div>
      </header>
    </div>
  );
}
